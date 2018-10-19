import * as React from 'react';
import { Route, Router } from 'react-router';
import './App.scss';
import MainLayout from './layouts/MainLayout'; 
import MainPage from './pages/MainPage';

class App extends React.Component {
  public render() {
    return (
      <div>
      <Router>
        <Route><MainLayout> <MainPage /> </MainLayout> </Route>
      </Router>
      </div>
    );
  }
}

export default App;

