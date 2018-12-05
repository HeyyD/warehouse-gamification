import { Line } from 'rc-progress';
import * as React from 'react';
import IQuest from '../models/IQuest';
import { connect } from 'react-redux';
import IUser from '../models/IUser';
import './CurrentQuest.scss';

interface IProps {
  user: IUser;
}

class CurrentQuest extends React.Component<IProps> {

  private biggest: IQuest;

  constructor(props: IProps) {
    super(props);

    // Copy array of quests from user data
    const ordered = [...this.props.user.quests];

    // Sort copied array by completion percentage, largest percentage first
    ordered.sort((a,b) => {
      return (b.currentAmount/b.requiredAmount) - (a.currentAmount/a.requiredAmount);
    });

    // First insert smallest percentage to variable
    this.biggest = ordered[ordered.length - 1];

    // Then iterate through the ordered array and if a quest has a larger
    // percentage than the current one, but still under 100%, insert it as
    // biggest.
    ordered.forEach(element => {
      if (element.currentAmount/element.requiredAmount < 1
        && element.currentAmount / element.requiredAmount 
        > this.biggest.currentAmount / this.biggest.requiredAmount) {
          this.biggest = element;
        }
    });
  }
  
  public render() {
    if(this.biggest) {
      return(
        <div className='quest'>
          <h2> Current quest </h2>
          <span>{this.biggest.title}</span>
          <div className='line-container'>
            <Line 
              percent={this.biggest.currentAmount / this.biggest.requiredAmount * 90}
              strokeWidth={10}
              strokeColor="#eb9605"
              trailWidth={10}
            />
            <span>{this.biggest.currentAmount} / {this.biggest.requiredAmount}</span>
          </div>
        </div>
      );
    }
    return(
      <div className='quest'>
        <h2> Current quest </h2>
        <span>No quests active!</span>
      </div>
    );
  }
}

const mapStateToProps = (state: {user: IUser}) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null) (CurrentQuest);
