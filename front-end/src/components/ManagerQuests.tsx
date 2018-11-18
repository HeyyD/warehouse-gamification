import * as React from 'react';
import { Table } from 'semantic-ui-react';
import ManagerQuest from '../components/ManagerQuest';
import { connect } from 'react-redux';

const ManagerQuests = ({quests}: {quests: []}) => {
  console.log(quests);
  return(
      <Table basic='very' celled={true} collapsing={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        { quests.map( (q: {title: string, id: string}) =>
          <ManagerQuest key={'quest'+q.id} title={q.title} id={q.id}/>
        )}
        </Table.Body>
      </Table>
  );
};
const mapStateToProps = (state:{quests:[]}) => {
  return {
    quests: state.quests 
  };
};
export default connect(mapStateToProps)(ManagerQuests);
