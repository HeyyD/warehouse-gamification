import * as React from 'react';
import { Line } from 'rc-progress';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import IQuest from '../models/IQuest';
import './QuestSingle.scss';
import IUser from 'src/models/IUser';

interface IProps extends RouteComponentProps<any> {
    user: IUser;
  }

class QuestSingle extends React.Component<IProps> {

  private quest: IQuest;
  
  constructor(props: IProps) {
    super(props);
    this.props.user.quests.forEach(element => {
      if (element.id === parseInt(this.props.match.params.id, 10)) {
        this.quest = element;
      }
    });
  }

  public render() {
    return(
        <div className='quest-single'>
          <h2>Quests</h2>
          <h3>{this.quest.title}</h3>
          <div className='description'>{this.quest.description}</div>
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
  }
}

const mapStateToProps = (state: {user: IUser, isMobile: boolean}) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null) (QuestSingle);