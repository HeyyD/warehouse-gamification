import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Inventory from './components/Inventory';
import MobileLayout from './layouts/MobileLayout'; 
import MainPage from './pages/MainPage';

class App extends React.Component {

  public render() {
    return (
      <React.Fragment>
      <Router>
        <div className='content-wrapper'>
        <Route exact={true} path='/'
          render={() =>(<MobileLayout> <MainPage /> </MobileLayout>)} />
        <Route exact={true} path='/inventory' render={ this.inventoryLayout } />
        <Route exact={true} path='/settings'
          render={() =>(<MobileLayout> <div>settings</div> </MobileLayout>)} />
        </div>
      </Router>
      </React.Fragment>
    );
  }

  private inventoryLayout(): JSX.Element {
    return (
      <MobileLayout>
        <Inventory/>
      </MobileLayout>
    );
  }
}

export default App;


