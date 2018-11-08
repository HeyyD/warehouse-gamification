import * as React from 'react';

class Login extends React.Component {
  public render() {
    return (
      <div>
        <div>
          <h1>Welcome</h1>
          <p>Sign in with your crendentials</p>
          <input type='text'/>
          <input type='password'/>
          <button>Login</button>
        </div>
      </div>
    );
  }
}
export default Login;
