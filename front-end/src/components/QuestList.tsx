import * as React from 'react';
import { connect } from 'react-redux';
import QuestListItem from './QuestListItem';
import IUser from '../models/IUser';
import './QuestList.scss';

interface IProps {
  user: IUser;
  isMobile: boolean;
}

class QuestList extends React.Component<IProps> {

  private quests: any;

  constructor(props: IProps) {
    super(props);
    console.log(this.props.user);
    this.quests = this.props.user.quests.map(q => {
      return(
        <li key={q.id}>
          <QuestListItem quest={q}/>
        </li>
      );
    });
  }

  public render() {
    fetch('api/quests').then(res => res.json().then(res1 => console.log(res1)));
    return(
        <div className='quest-list'>
          <h2>Quests</h2>
          <ul>
            {this.quests}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state: {user: IUser, assets: {}, isMobile: boolean}) => {
  return {
    assets: state.assets,
    user: state.user,
    isMobile: state.isMobile
  };
};

export default connect(mapStateToProps, null) (QuestList);