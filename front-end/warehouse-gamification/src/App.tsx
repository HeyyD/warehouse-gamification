import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Inventory from './components/Inventory';
import MobileLayout from './layouts/MobileLayout';
import DesktopLayout from './layouts/DesktopLayout';
import MainPage from './pages/MainPage';
import { changeMobileState } from './reducers/mobileReducer';
import {initAssets} from './reducers/assetsReducer';

interface IProps {
  initAssets: () => any;
  isReady: boolean;
  isMobile: boolean;
  changeMobileState: (state: boolean) => any;
}

class App extends React.Component<IProps> {

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
    if(this.props.isReady) {
      return (
        <React.Fragment>
        <Router>
          <div className='content-wrapper'>
            <Route exact={true} path='/' render={() =>(<MobileLayout> <MainPage /> </MobileLayout>)} />
            <Route exact={true} path='/inventory/:id' render={() => <MobileLayout><Inventory/></MobileLayout> } />
            <Route exact={true} path='/settings' render={() =>(<MobileLayout> <div>settings</div> </MobileLayout>)} />
            <Route exact={true} path='/desktop' render={() =>(<DesktopLayout/>)} />
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

const mapStateToProps = (state: {isMobile: boolean, isReady: boolean}) => {
  return {
    isMobile: state.isMobile,
    isReady : state.isReady
  };
};

export default connect(mapStateToProps, {changeMobileState, initAssets})(App);
