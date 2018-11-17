import * as React from 'react';
import { Table, Header } from 'semantic-ui-react';

const ManagerQuest = ({title, id}: {title: string, id: string}) => {
  return(
    <Table.Row>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>
        <Header as='h4' image={true}>
          <Header.Content>
            {title}
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>filler2</Table.Cell>
    </Table.Row>
  );
};

export default ManagerQuest;
