import * as React from 'react';
import { Line } from 'rc-progress';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import IQuest from '../models/IQuest';
import './QuestSingle.scss';
import IUser from '../models/IUser';

interface IProps extends RouteComponentProps<any> {
    user: IUser;
  }

class QuestSingle extends React.Component<IProps> {

  private quest?: IQuest;
  private dueDate: string = '';
  
  constructor(props: IProps) {
    super(props);

    // Iterate through user's quest array and find the one with
    // an id matching with the id in the URL
    this.props.user.quests.forEach(element => {
      if (element.id === parseInt(this.props.match.params.id, 10)) {
        this.quest = element;
      }
    });
    if (this.quest) {
      // Parse dueDate string from database to be clearer to viewer
      this.dueDate += (this.quest.dueDate.substr(8, 2) + '.');
      if (this.quest.dueDate.substr(5, 1) === '0') {
        this.dueDate += (this.quest.dueDate.substr(6, 1) + '.');
      } else {
        this.dueDate += (this.quest.dueDate.substr(5, 2) + '.');
      }
      this.dueDate += (this.quest.dueDate.substr(0, 4) + ' ');
      this.dueDate += (this.quest.dueDate.substr(11, 2) + ':');
      this.dueDate += (this.quest.dueDate.substr(14, 2));
    }
    }
    
    public render() {
      if (this.quest) {
        return(
          <div className='quest-single'>
            <h2>Quests</h2>
            <h3>{this.quest.title}</h3>
            <div className='description'>{this.quest.description}</div>
            <div className='due-date'>Due: {this.dueDate}</div>
            <div className='line-container'>
              <Line 
                percent={this.quest.currentAmount / this.quest.requiredAmount * 90}
                strokeWidth={10}
                strokeColor="#eb9605"
                trailWidth={10}
                />
              <span>{this.quest.currentAmount} / {this.quest.requiredAmount}</span>
            </div>
            <div className='reward'><h1>Reward: {this.quest.rewardExp} xp</h1></div>
          </div>
    );
    } else {
      return(
        <div className='quest-single'>
          <h2>Quests</h2>
          <h3>No quest found!</h3>
        </div>
      );
    }
  }
}

const mapStateToProps = (state: {user: IUser, isMobile: boolean}) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null) (QuestSingle);