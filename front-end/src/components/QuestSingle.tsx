import * as React from 'react';
import { Line } from 'rc-progress';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import IQuest from '../models/IQuest';
import './QuestSingle.scss';

interface IProps extends RouteComponentProps<any> {
    // quest: {id: number, name: string, description: string,
         // currentExp: number, requiredExp: number}
  }

class QuestSingle extends React.Component<IProps> {

  // private quest: IQuest;

  constructor(props: IProps) {
    super(props);
  }

  public render() {

    /*console.log(this.props.match.params);
    const { id } = this.props.match.params;
    console.log(id);
    
    fetch(`api/quests`).then(res => res.json().then(res1 => console.log(res1)));*/
    // Get quest information from DB
    // const { id } = this.props.match.params;

    const expPercent = 181/200*90;
                  
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
    );
  }
}

const mapStateToProps = (state: {assets: {data: {}}, isMobile: boolean}) => {
  return {
    assets: state.assets,
    isMobile: state.isMobile
  };
};

export default withRouter(connect(mapStateToProps, null) (QuestSingle));