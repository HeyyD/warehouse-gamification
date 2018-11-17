import * as React from 'react';
import { Table, Header, Image, Button } from 'semantic-ui-react';

const ManagerUser = ({username, level} : {username: string, level: number}) => {
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
      <Table.Cell><Button color="red">PUNISH</Button></Table.Cell>
    </Table.Row>
  );
};

export default ManagerUser;
