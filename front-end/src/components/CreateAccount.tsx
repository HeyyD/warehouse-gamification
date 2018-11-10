import * as React from 'react';

import './CreateAccount.scss';

interface IState {
  username: string;
  password: string;
  confirm: string;
}

export default class CreateAccount extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.createAccount = this.createAccount.bind(this);

    this.state = {
      username: '',
      password: '',
      confirm: ''
    };
  }

  public render() {
    return(
      <div className='create-account-container'>
        <div className='create-account-container-panel'>
          <div className='account-input-container'>
            <p>Username</p>
            <input name='username' type='text' onChange={this.onChange} />
            <p>Password</p>
            <input name='password' type='password' onChange={this.onChange}/>
            <p>Confirm password</p>
            <input name='confirm' type='password' onChange={this.onChange} />
            <button onClick={this.createAccount}>Create an account</button>
          </div>
        </div>
      </div>
    );
  }

  private onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({[event.target.name]: event.target.value} as any);
  }

  private createAccount() {
    fetch('http://localhost:3001/api/users')
    .then(res => res.json())
    .then(res => {
      res.forEach((user: {username: string}) => {
        if (this.state.username === user.username) {
          console.log('SUCCESS!');
        }
      });
    })
    .catch(error => console.log(error));
  }

}
