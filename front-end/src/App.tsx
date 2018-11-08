import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Inventory from './components/Inventory';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import { changeMobileState } from './reducers/mobileReducer';
import {initAssets} from './reducers/assetsReducer';
import Login from './components/Login';

interface IProps {
  initAssets: () => any;
  isReady: boolean;
  isMobile: boolean;
  changeMobileState: (state: boolean) => any;
}

class App extends React.Component<IProps> {

  private isLoggedIn = false;

  constructor(props: IProps) {
    super(props);
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
    if (!this.isLoggedIn) {
      return <Login login={(login: boolean) => {
        this.isLoggedIn = login;
        this.forceUpdate();
      }}/>;
    } else if(this.props.isReady) {
      return (
        <React.Fragment>
          <Router>
            <div className='content-wrapper'>
              <MainLayout>
                <Route exact={true} path='/' component={MainPage} />
                <Route exact={true} path='/inventory/:id' component={Inventory} />
                <Route exact={true} path='/settings' render={() =>(<div>settings</div>)} />
              </MainLayout>
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
  }

}

const mapStateToProps = (state: {isMobile: boolean, assets: {isReady: boolean}}) => {
  return {
    isMobile: state.isMobile,
    isReady : state.assets.isReady
  };
};

export default connect(mapStateToProps, {changeMobileState, initAssets})(App);
