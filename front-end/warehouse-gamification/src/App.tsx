import * as React from 'react';
import './App.scss';
import MainLayout from './layouts/MainLayout'; 
import MainPage from './pages/MainPage';

class App extends React.Component {
  public render() {
    return (
      <MainLayout>
        <MainPage />
      </MainLayout>
    );
  }
}

export default App;
