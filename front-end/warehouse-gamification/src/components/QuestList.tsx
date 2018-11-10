import * as React from 'react';
import QuestListItem from './QuestListItem';
import './QuestList.scss';

interface IProps {

}

class QuestList extends React.Component<IProps> {

  private quests = [{id: 1, name: 'Beat your friend!', currentExp: 98, requiredExp: 100}, 
                    {id: 2, name: 'Slay the box dragon!', currentExp: 181, requiredExp: 200}]

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
        <ul>
          {elements}
        </ul>
      </div>
    )
  }
}

export default QuestList;