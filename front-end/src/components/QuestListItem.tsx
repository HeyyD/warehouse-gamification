import * as React from 'react';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';
import './QuestListItem.scss';


interface IProps {
  quest: {id: number, name: string, currentExp: number, requiredExp: number}
}

class QuestListItem extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  public render() {

    let expPercent = this.props.quest.currentExp 
                  / this.props.quest.requiredExp 
                  * 90;

    return(
      <div className='quest-item'>
        <Link to={`/quests/${this.props.quest.id}`}>
          <span>{this.props.quest.name}</span>
          <div className='line-container'>
            <Line 
              percent={expPercent}
              strokeWidth={10}
              strokeColor="#eb9605"
              trailWidth={10}
            />
            <span>{this.props.quest.currentExp} / {this.props.quest.requiredExp}</span>
          </div>
        </Link>
      </div>
    )
  }
}

export default QuestListItem;