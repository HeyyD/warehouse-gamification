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

    const ordered = this.props.user.quests;

    ordered.sort((a,b) => {
      return (b.currentAmount/b.requiredAmount) - (a.currentAmount/a.requiredAmount);
    });

    this.biggest = ordered[0];
  }
  
  public render() {
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
}

const mapStateToProps = (state: {user: IUser}) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null) (CurrentQuest);
