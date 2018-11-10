import * as React from 'react';
import QuestListItem from './QuestListItem';
import './QuestList.scss';

interface IProps {

}

class QuestList extends React.Component<IProps> {

  private quests = [{id: 1, name: 'Beat your friend!', currentExp: 36, requiredExp: 100}, 
                    {id: 2, name: 'Defeat the box dragon!', currentExp: 181, requiredExp: 200},
                    {id: 3, name: 'Picking challenge', currentExp: 3, requiredExp: 7},
                    {id: 4, name: 'Work for 100 days', currentExp: 55, requiredExp: 100},
                    {id: 5, name: 'Quest #5', currentExp: 470, requiredExp: 1000},
                    {id: 6, name: 'Quest #6', currentExp: 24, requiredExp: 500}]

  constructor(props: IProps) {
    super(props);
  }

  public render() {

    const elements = this.quests.map(q => {
      return(
        <li key={q.id}>
          <QuestListItem quest={q}/>
        </li>
      )
    })

    return(
        <div className='quest-list'>
          <h2>Quests</h2>
          <ul>
            {elements}
          </ul>
        </div>
    )
  }
}

export default QuestList;