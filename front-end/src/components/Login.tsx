import * as React from 'react';

import './Login.scss';

interface IProps {
  login: () => any;
}

interface IState {
  isReady: boolean;
  username: string;
  password: string;
  users: [];
}

class Login extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      isReady: false,
      username: '',
      password: '',
      users: []
    };
  }

  public componentDidMount() {
    fetch('http://localhost:3001/api/users')
      .then(res => res.json())
      .then(res => {
        this.setState({
          isReady: true,
          users: res
        });
      })
      .catch(error => console.log(error));
  }

  public render() {
    return (
      <div className='login-container'>
        <div className='login-panel'>
          <h1>Welcome</h1>
          <p>Sign in with your credentials</p>
          <div className='input-container'>
            <input name='username' type='text' onChange={e => this.onChange(e)}/>
            <input name='password' type='password' onChange={e => this.onChange(e)}/>
          </div>
          <button disabled={!this.state.isReady} onClick={e => this.login(e)}>Login</button>
        </div>
      </div>
    );
  }
  private onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ [event.target.name]: event.target.value } as any);
  }
}
export default Login;
