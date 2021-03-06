import * as React from 'react';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';
import './QuestListItem.scss';
import IQuest from '../models/IQuest';


interface IProps {
  quest: IQuest;
}

class QuestListItem extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  public render() {

    // Calculate percentage of quest completion for the 
    // filling bar. Multiply with 90 instead of 100 to 
    // compensate for Line's strokeWidth of 10.
    const expPercent = this.props.quest.currentAmount 
                  / this.props.quest.requiredAmount 
                  * 90;

    return(
      <div className='quest-item'>
        <Link to={`/quests/${this.props.quest.id}`}>
          <span>{this.props.quest.title}</span>
          <div className='line-container'>
            <Line 
              percent={expPercent}
              strokeWidth={10}
              strokeColor="#eb9605"
              trailWidth={10}
            />
            <span>{this.props.quest.currentAmount} / {this.props.quest.requiredAmount}</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default QuestListItem;