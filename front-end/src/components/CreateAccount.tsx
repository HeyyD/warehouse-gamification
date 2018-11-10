import * as React from 'react';

import './CreateAccount.scss';

export default class CreateAccount extends React.Component {
  public render() {
    return(
      <div className='create-account-container'>
        <div className='create-account-container-panel'>
          <div className='account-input-container'>
            <p>Username</p>
            <input type='text' />
            <p>Password</p>
            <input type='password' />
            <p>Confirm password</p>
            <input type='password' />
            <button>Create an account</button>
          </div>
        </div>
      </div>
    );
  }
}
