import * as React from 'react';
import { connect } from 'react-redux';

import './Friends.scss';
import IUser from 'src/models/IUser';

interface IProps {
  user: IUser;
}

interface IState {
  users: JSX.Element[];
}

class Friends extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.createListItems = this.createListItems.bind(this);
    this.state = {
      users: []
    };
  }

  public componentDidMount() {
    fetch('http://localhost:3001/api/users')
    .then(res => res.json())
    .then(res => {
      this.setState({ users: this.createListItems(res)});
    })
    .catch(error => console.log(error));
  }

  public render() {
    return(
      <ul className='friends-list'>{this.state.users}</ul>
    );
  }

  private createListItems(users: Array<{username: string, level: number, xp: number}>): JSX.Element[] {
    return users.filter(user => user.username !== this.props.user.name).map((user, index) => {
      return (
        <li key={index}>
          <i className='fa fa-user' />
          <div className='item-content'>
            <div className='item-content-name'>{user.username}</div>
            <div className='item-content-info'>{`Level: ${user.level}`}</div>
          </div>
        </li>
      );
    });
  }
}

const mapStateToProps = (state: {user: IUser}) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null) (Friends);