import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Inventory from './components/Inventory';
import MobileLayout from './layouts/MobileLayout';
import MainPage from './pages/MainPage';
import {initAssets} from './reducers/assetsReducer';

interface IProps {
  initAssets: () => any;
  isReady: boolean;
}

class App extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
    this.init();
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

const mapStateToProps = (state: {assets: {isReady: boolean}}) => {
  return {
    isReady : state.assets.isReady
  };
};

export default connect(mapStateToProps, { initAssets }) (App);
