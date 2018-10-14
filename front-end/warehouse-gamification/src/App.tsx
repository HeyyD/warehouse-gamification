import * as React from 'react';
import './App.scss';
import MainLayout from './layouts/MainLayout'; 
import Avatar from './Avatar';

class App extends React.Component {
  public render() {
    return (
      <div>
        <MainLayout />
        <Avatar />
      </div>
    );
  }
}

export default App;
