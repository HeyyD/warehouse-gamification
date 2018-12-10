import * as React from 'react';
import UserForm from './UserForm';
import { Table, Header, Image } from 'semantic-ui-react';

const ManagerUser = ({username, level, id} : {username: string, level: number, id: string}) => {
  return(
    <Table.Row>
      <Table.Cell>
        <Header as='h4' image={true}>
          <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded={true} size='mini' />
          <Header.Content>
            {username}
            <Header.Subheader>Gladiator</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>{level}</Table.Cell>
      <Table.Cell>
        <UserForm username={username} level={level} id={id}/>
      </Table.Cell>
    </Table.Row>
  );
};

export default ManagerUser;
