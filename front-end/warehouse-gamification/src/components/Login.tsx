import * as React from 'react';

import './Login.scss';

interface IProps {
  login: () => any;
}

class Login extends React.Component<IProps> {
  public render() {
    return (
      <div className='login-container'>
        <div className='login-panel'>
          <h1>Welcome</h1>
          <p>Sign in with your credentials</p>
          <div className='input-container'>
            <input type='text'/>
            <input type='password'/>
          </div>
          <button onClick={this.props.login}>Login</button>
        </div>
      </div>
    );
  }
}
export default Login;
