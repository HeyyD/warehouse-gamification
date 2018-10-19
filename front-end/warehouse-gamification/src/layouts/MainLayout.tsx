import * as React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import ProgressCircle from '../components/ProgressCircle';
import { setFalse } from '../reducers/sidebarReducer';
import './MainLayout.scss'; 

class MainLayout extends React.Component {


  public render() {
  return (
    <div className='main-layout' onClick={setFalse}>
      <Navigation />
      <ProgressCircle />
        {this.props.children} 
    </div>
  );
  }
}

export default connect(null,{setFalse})(MainLayout);
