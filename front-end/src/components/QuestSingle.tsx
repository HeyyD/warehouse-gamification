import * as React from 'react';
import { Line } from 'rc-progress';
import { RouteComponentProps } from 'react-router-dom';
import './QuestSingle.scss';

interface IProps extends RouteComponentProps<any> {
    //quest: {id: number, name: string, description: string,
         //currentExp: number, requiredExp: number}
  }

class QuestSingle extends React.Component<IProps> {


  constructor(props: IProps) {
    super(props);

    
  }

  public render() {

    // Get quest information from DB
    //const { id } = this.props.match.params;

    let expPercent = 181/200*90
                  
    return(
        <div className='quest-single'>
          <h2>Quests</h2>
          <h3>{/*quest.name*/}Defeat the box dragon!</h3>
          <div className='description'>{/*quest.desc*/}The gruesome box dragon has appeared! 
                Save the warehouse and pick 200 boxes to force it away!</div>
          <div className='line-container'>
            <Line 
              percent={expPercent}
              strokeWidth={10}
              strokeColor="#eb9605"
              trailWidth={10}
            />
            <span>{/*quest.currentExp} / {quest.requiredExp*/}181 / 200</span>
          </div>
          <div className='reward'><h1>Reward: 100 xp</h1></div>
        </div>
    )
  }
}

export default QuestSingle;