import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Inventory from './components/Inventory';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import QuestList from './components/QuestList';
import QuestSingle from './components/QuestSingle';
import ManagerLayout from './layouts/ManagerLayout';
import { changeMobileState } from './reducers/mobileReducer';
import {initAssets} from './reducers/assetsReducer';
import { initUsers } from './reducers/usersReducer';
import { initQuests } from './reducers/questsReducer';
import Login from './components/Login';
import Friends from './components/Friends';
import IUser from './models/IUser';

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
  user?: IUser;
}

class App extends React.Component<IProps, IState> {

  initDone = false;

  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoggedIn: false,
      user: undefined
    };

    this.init();
    window.addEventListener('resize', this.handleResize); 
    if(window.innerWidth > 720){
      props.changeMobileState(false); 
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if(!this.initDone && this.state.user && this.state.user.isManager) {
      this.initDone = true;
      this.init();
      
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
        <Login login={({isLoggedIn, user}) =>  this.setState({isLoggedIn, user}) }/>
      );
    } else if(this.props.isReady) {
      return (
        <React.Fragment>
          <Router>
            <div className='content-wrapper'>
              { (this.state.user && this.state.user.isManager) || this.props.isManager
                  ? <ManagerLayout />
                  : <MainLayout>
                      <Route exact={true} path='/' component={MainPage} />
                      <Route exact={true} path='/inventory/:inventoryId' component={Inventory} />
                      <Route exact={true} path='/settings' render={() =>(<div>settings</div>)} />
                      <Route exact={true} path='/quests' component={QuestList} />
                      <Route exact={true} path='/quests/:id' component={QuestSingle} />
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
    if(this.props.isManager || this.state.user && this.state.user.isManager) {
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

export default connect(mapStateToProps, {changeMobileState, initAssets, initUsers, initQuests})(App as any);
