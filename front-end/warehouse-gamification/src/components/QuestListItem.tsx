import * as React from 'react';

interface IProps {
  quest: {name: string, exp: number}
}

class QuestListItem extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  public render() {

    return(
      <div className='quest'>
        {this.props.quest.name}
        {this.props.quest.exp}
      </div>
    )
  }
}

export default QuestListItem;