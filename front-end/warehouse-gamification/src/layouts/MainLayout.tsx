import * as React from 'react';
import DesktopLayout from './DesktopLayout';
import { connect } from 'react-redux';
import MobileLayout from './MobileLayout';


const MainLayout = (props: { children: React.ReactNode, isMobile: boolean }) => {
  return (
    <React.Fragment>
      {props.isMobile?
      <MobileLayout >
        {props.children}
      </MobileLayout>
      :
      <DesktopLayout /> }
    </React.Fragment>
  );
};

const mapStateToProps = (state: {isMobile: boolean}) => {
  return {
    isMobile: state.isMobile 
  };
};
export default connect(mapStateToProps)( MainLayout );
