import * as React from 'react';
import QuestListItem from './QuestListItem';
import './QuestList.scss';

interface IProps {
  assets: {data: {}};
}

class QuestList extends React.Component<IProps> {

  private quests = [{id: 1, name: 'Defeat the box dragon!', currentExp: 181, requiredExp: 200},
                    {id: 2, name: 'Beat your friend!', currentExp: 36, requiredExp: 100},
                    {id: 3, name: 'Picking challenge', currentExp: 3, requiredExp: 7},
                    {id: 4, name: 'Work for 100 days', currentExp: 55, requiredExp: 100},
                    {id: 5, name: 'Quest #5', currentExp: 470, requiredExp: 1000},
                    {id: 6, name: 'Quest #6', currentExp: 24, requiredExp: 500}];

  constructor(props: IProps) {
    super(props);
  }

  public render() {

    fetch('api/quests').then(res => res.json().then(res1 => console.log(res1)));
    fetch('api/users').then(res => res.json().then(res1 => console.log(res1)));
    fetch('api/quests/1').then(res => res.json().then(res1 => console.log(res1)));

    const elements = this.quests.map(q => {
      return(
        <li key={q.id}>
          <QuestListItem quest={q}/>
        </li>
      );
    });

    return(
        <div className='quest-list'>
          <h2>Quests</h2>
          <ul>
            {elements}
          </ul>
        </div>
    );
  }
}

export default QuestList;