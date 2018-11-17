import * as React from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ManagerUser from './ManagerUser';

const ManagerUsers = ({users}: {users: []}) => {
  console.log(users);
  return (
      <Table basic='very' celled={true} collapsing={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Worker</Table.HeaderCell>
            <Table.HeaderCell>Level</Table.HeaderCell>
            <Table.HeaderCell>Shift</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map( (u:{username: string, level: number, id: number}, i) => 
           <ManagerUser 
            key={u.id}
            username={u.username}
            level={u.level}/>
          )}
        </Table.Body>
      </Table>
  );
};
const mapStateToProps = (state: {users: []}) => {
  return {
    users: state.users 
  };
};
export default connect(mapStateToProps)( ManagerUsers );

