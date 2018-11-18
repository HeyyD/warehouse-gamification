import * as React from 'react';
import { Table, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteQuest } from '../reducers/questsReducer';

// tslint:disable-next-line:no-shadowed-variable
const ManagerQuest = ({title, id, deleteQuest}: {title: string, id: string, deleteQuest: (id: string) => any}) => {
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
      <Table.Cell><Button color="red" onClick={() => deleteQuest(id)}>Delete Quest </Button></Table.Cell>
    </Table.Row>
  );
};

export default connect(null, {deleteQuest})( ManagerQuest );
