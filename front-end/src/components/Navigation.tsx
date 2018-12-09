import * as React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle } from '../reducers/sidebarReducer';
import './Navigation.scss'; 
//import NavigationItem from './NavigationItem';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';

const Navigation = (props : {toggled: boolean, children: any, toggle: ()=>{}}) => {
  const openSidebar = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    props.toggle(); 
  };
  //const preventPropagation = (event: React.MouseEvent<HTMLElement>) =>{
  //  event.stopPropagation(); 
  //};

  return (

    <div id='wrapper'>
      <div className='navigation'>
        <i className='fa fa-bars' onClick={openSidebar}/> 
      </div>
      
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          inverted
          vertical
          visible={props.toggled}
          width='thin'
          >
          <Link to='/'>
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
          </Link>
          <Link to='/inventory/menu'>
            <Menu.Item as='a'>
              <Icon name='archive' />
              Inventory
            </Menu.Item>
          </Link>
          <Link to='/friends'>
            <Menu.Item as='a'>
              <Icon name='users' />
              Friends
            </Menu.Item>
          </Link>
          <Link to='/settings'>
            <Menu.Item as='a'>
              <Icon name='cogs' />
              Settings
            </Menu.Item>
          </Link>
          <Link to='/quests'>
          <Menu.Item as='a'>
            <Icon name='trophy' />
            Quests
          </Menu.Item>
          </Link>
        </Sidebar>

    

    <Sidebar.Pusher dimmed={props.toggled}>
            <Segment basic>
              {props.children}
            </Segment>
    </Sidebar.Pusher>
  
  </Sidebar.Pushable>
   
    </div>
  )

};

const mapStateToProps = (state : {sidebar: boolean}) => {
  return {
    toggled: state.sidebar 
  };
};

export default connect(mapStateToProps, {toggle})(Navigation as any);
