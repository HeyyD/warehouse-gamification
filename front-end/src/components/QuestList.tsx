import * as React from 'react';
import { connect } from 'react-redux';
import QuestListItem from './QuestListItem';
import IUser from '../models/IUser';
import './QuestList.scss';

interface IProps {
  user: IUser;
  isMobile: boolean;
}

class QuestList extends React.Component<IProps> {

  private incompleteQuests: any;
  private completedQuests: any;

  constructor(props: IProps) {
    super(props);
    this.incompleteQuests = this.props.user.quests.map(q => {

      const dueDate: Date = new Date();

      dueDate.setFullYear(parseInt(q.dueDate.substr(0, 4), 10));
      dueDate.setMonth(parseInt(q.dueDate.substr(5, 2), 10));
      dueDate.setDate(parseInt(q.dueDate.substr(8, 2), 10));
      dueDate.setHours(parseInt(q.dueDate.substr(11, 2), 10));
      dueDate.setMinutes(parseInt(q.dueDate.substr(14, 2), 10));

      console.log(dueDate < new Date());

      if (!q.isComplete && q.currentAmount >= q.requiredAmount) {
        // add xp to user
        // mark quest as completed
      }

      if (!q.isComplete && dueDate < new Date()) {
        // quest is expired
      } 

      if (!q.isComplete) {
        return(
          <li key={q.id}>
            <QuestListItem quest={q}/>
          </li>
        );
      } else {
        return null;
      }
    });

    this.completedQuests = this.props.user.quests.map(q => {
      if (q.isComplete) {
        return(
          <li key={q.id}>
            <QuestListItem quest={q}/>
          </li>
        );
      } else {
        return null;
      }
    });
  }

  public render() {
    // fetch('api/quests').then(res => res.json().then(res1 => console.log(res1)));
    return(
        <div className='quest-list'>
          <h2>Quests</h2>
          <ul>
            {this.incompleteQuests}
          </ul>
          <ul className='completed'>
            {this.completedQuests}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state: {user: IUser, isMobile: boolean}) => {
  return {
    user: state.user,
    isMobile: state.isMobile
  };
};

export default connect(mapStateToProps, null) (QuestList);