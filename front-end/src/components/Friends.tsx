import * as React from 'react';

interface IState {
  users: JSX.Element[];
}

class Friends extends React.Component<{}, IState> {

  constructor(props: {}) {
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
      <ul>{this.state.users}</ul>
    );
  }

  private createListItems(users: Array<{username: string}>): JSX.Element[] {
    return users.map((user, index) => {
      return <li key={index}>{user.username}</li>;
    });
  }
}
export default Friends;