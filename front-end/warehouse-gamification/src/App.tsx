import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Inventory from './components/Inventory';
import MainLayout from './layouts/MainLayout'; 
import MainPage from './pages/MainPage';

class App extends React.Component {
  public render() {
    return (
      <div>
      <Router>
        <div>
        <Route exact={true} path='/'
          render={() =>(<MainLayout> <MainPage /> </MainLayout>)} />
        <Route exact={true} path='/inventory'
          render={() =>(<MainLayout> <Inventory /> </MainLayout>)} />
        <Route exact={true} path='/settings'
          render={() =>(<MainLayout> <div>settings</div> </MainLayout>)} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;


