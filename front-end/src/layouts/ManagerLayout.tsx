import * as React from 'react';
import ManagerUsers from '../components/ManagerUsers';
import { Menu, Header } from 'semantic-ui-react';


const ManagerLayout = () => {
  return (
    <React.Fragment>
      <Menu>
        <Menu.Item>
          <Header>
            Manager sivu
          </Header>
        </Menu.Item>
      </Menu> 
      <ManagerUsers />
    </React.Fragment>
  );
};

export default ManagerLayout;
