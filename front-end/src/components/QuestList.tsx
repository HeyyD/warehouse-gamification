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

      // Create new Date object from Date string in database
      const dueDate: Date = new Date();
      dueDate.setFullYear(parseInt(q.dueDate.substr(0, 4), 10));
      dueDate.setMonth(parseInt(q.dueDate.substr(5, 2), 10));
      dueDate.setDate(parseInt(q.dueDate.substr(8, 2), 10));
      dueDate.setHours(parseInt(q.dueDate.substr(11, 2), 10));
      dueDate.setMinutes(parseInt(q.dueDate.substr(14, 2), 10));

      // Check if quest has expired
      if (!q.isComplete && dueDate < new Date()) {
        // quest is expired
        return null;
      } 
      // If not, check if quest has been completed
      else if (!q.isComplete && q.currentAmount >= q.requiredAmount) {
        // Update user's experience
        const updatedUser = this.props.user;
        updatedUser.xp += q.rewardExp;
        // TODO: put updated user to db
        
        // Mark quest as completed
        q.isComplete = true;
        // TODO: put updated quest to db
        return null;
      } 
      // If quest isn't yet completed, add it to array of incomplete quests
      else if (!q.isComplete) {
        return(
          <li key={q.id}>
            <QuestListItem quest={q}/>
          </li>
        );
      } 
      // If the quest had been completed earlier, do nothing
      else {
        return null;
      }
    });

    // Map completed quests to array of completed quests
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
    return(
        <div className='quest-list'>
          <h2>Quests</h2>
          <h4>Ongoing</h4>
          <ul>
            {this.incompleteQuests}
          </ul>
          <h4>Completed</h4>
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