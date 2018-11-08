import * as React from 'react';
import QuestListItem from './QuestListItem';

interface IProps {

}

class QuestList extends React.Component<IProps> {

  private quests = [{name: 'asd', exp: 100}, {name: 'asd2', exp: 200}]

  constructor(props: IProps) {
    super(props);
  }

  public render() {

    const elements = this.quests.map(q => {
      return(
        <li>
          <QuestListItem quest={q}/>
          
        </li>
        
      )
    })

    return(
      <ul className='questlist'>
        {elements}
      </ul>
    )
  }
}

export default QuestList;