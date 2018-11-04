import * as React from 'react';
import DesktopLayout from './DesktopLayout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MobileLayout from './MobileLayout';


const MainLayout = (props: { children: React.ReactNode, isMobile: boolean }) => {
  return (
    <React.Fragment>
      {props.isMobile?
      <MobileLayout >
        {props.children}
      </MobileLayout>
      :
      <DesktopLayout>
        {props.children}
      </DesktopLayout>}
    </React.Fragment>
  );
};

const mapStateToProps = (state: {isMobile: boolean}) => {
  return {
    isMobile: state.isMobile 
  };
};
export default withRouter(connect(mapStateToProps)( MainLayout ) as any);
