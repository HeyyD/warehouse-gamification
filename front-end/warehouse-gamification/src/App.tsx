import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
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
        </div>
      </Router>
      </div>
    );
  }
}

export default App;


