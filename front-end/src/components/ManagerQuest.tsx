import * as React from 'react';
import { Table, Header } from 'semantic-ui-react';

const ManagerQuest = ({title}: {title: string}) => {
  return(
    <Table.Row>
      <Table.Cell>
        <Header as='h4' image={true}>
          <Header.Content>
            {title}
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>filler</Table.Cell>
      <Table.Cell>filler2</Table.Cell>
    </Table.Row>
  );
};

export default ManagerQuest;
