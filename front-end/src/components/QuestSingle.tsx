import * as React from 'react';
import { Line } from 'rc-progress';
import './QuestSingle.scss';

interface IProps {
    quest: {id: number, name: string, description: string,
         currentExp: number, requiredExp: number}
  }

class QuestSingle extends React.Component<IProps> {


  constructor(props: IProps) {
    super(props);

    
  }

  public render() {

    //let expPercent = this.props.quest.currentExp 
    //              / this.props.quest.requiredExp 
    //              * 90;
    let expPercent = 36/100*90
                  
    return(
        <div className='quest-single'>
          <h2>Quests</h2>
          <h3>{/*this.props.quest.name*/}Defeat the box dragon!</h3>
          <div className='description'>The gruesome box dragon has appeared! 
                Save the warehouse and pick 200 boxes to force it away!</div>
          <div className='line-container'>
            <Line 
              percent={expPercent}
              strokeWidth={10}
              strokeColor="#eb9605"
              trailWidth={10}
            />
            <span>{/*this.props.quest.currentExp} / {this.props.quest.requiredExp*/}36 / 100</span>
          </div>
          <div className='reward'><h1>Reward: 100 xp</h1></div>
        </div>
    )
  }
}

export default QuestSingle;