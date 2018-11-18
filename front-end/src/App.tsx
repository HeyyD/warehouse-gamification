import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Inventory from './components/Inventory';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import ManagerLayout from './layouts/ManagerLayout';
import { changeMobileState } from './reducers/mobileReducer';
import {initAssets} from './reducers/assetsReducer';
import { initUsers } from './reducers/usersReducer';
import { initQuests } from './reducers/questsReducer';
import Login from './components/Login';
import Friends from './components/Friends';

interface IProps {
  initAssets: () => any;
  isManager: boolean;
  isReady: boolean;
  isMobile: boolean;
  changeMobileState: (state: boolean) => any;
  initUsers: () => any;
  initQuests: () => any;
}

interface IState {
  isLoggedIn: boolean;
}

class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.init();
    window.addEventListener('resize', this.handleResize); 
    if(window.innerWidth > 720){
      props.changeMobileState(false); 
    }
  }


  public handleResize = () => {
    const size = window.innerWidth;
    if(size > 720 && this.props.isMobile){
      this.props.changeMobileState(false);
    } else if(size <= 720 && !this.props.isMobile){
      this.props.changeMobileState(true);
    }
  }

  public render() {
    if (!this.state.isLoggedIn) {
      return (
        <Login login={(login: boolean) => {
          this.setState({isLoggedIn: login});
        }}/>
      );
    } else if(this.props.isReady) {
      return (
        <React.Fragment>
        <Router>
          <div className='content-wrapper'>
          { this.props.isManager? 
            <ManagerLayout />
            :
            <MainLayout>
              <Route exact={true} path='/' component={MainPage} />
              <Route exact={true} path='/inventory/:id' component={Inventory} />
              <Route exact={true} path='/settings' render={() =>(<div>settings</div>)} />
              <Route exact={true} path='/friends' component={Friends} />
            </MainLayout>
          }
          </div>
        </Router>
        </React.Fragment>
      ); 
    } else {
      return <div>Loading...</div>;
    }
  }

  private async init() {
    this.props.initAssets();
    if(this.props.isManager) {
      this.props.initUsers(); 
      this.props.initQuests();
    }
  }

}

const mapStateToProps = (state: {isManager: boolean, isMobile: boolean, assets: {isReady: boolean}}) => {
  return {
    isManager: state.isManager,
    isMobile: state.isMobile,
    isReady : state.assets.isReady
  };
};

export default connect(mapStateToProps, {changeMobileState, initAssets, initUsers, initQuests})(App);
