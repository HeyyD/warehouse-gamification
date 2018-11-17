import * as React from 'react';
import { Table } from 'semantic-ui-react';

const ManagerQuests = () => {
  return(
      <Table basic='very' celled={true} collapsing={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Quest</Table.HeaderCell>
            <Table.HeaderCell>Level</Table.HeaderCell>
            <Table.HeaderCell>Button</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          moi
        </Table.Body>
      </Table>
  );
};

export default ManagerQuests;
