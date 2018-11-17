import * as React from 'react';
import ManagerUsers from '../components/ManagerUsers';
import ManagerQuests from '../components/ManagerQuests';
import { Menu, Header, Grid } from 'semantic-ui-react';


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
      <Grid padded='vertically' columns={2} container={true} stackable={true} >
        <Grid.Column>
          <ManagerUsers />
        </Grid.Column>
        <Grid.Column>
          <ManagerQuests />
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};

export default ManagerLayout;