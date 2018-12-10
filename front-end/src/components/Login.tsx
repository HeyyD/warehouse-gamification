import * as React from 'react';
import { connect } from 'react-redux';
import ILoginInfo from '../models/ILoginInfo';

import './Login.scss';
import { changeUser } from '../reducers/userReducer';
import * as pic from '../assets/Leanware.png';
import { Loader, Dimmer, Input } from 'semantic-ui-react';
import IUser from '../models/IUser';

interface IProps {
  dispatch: (actionCreator: any) => void
  login: (res: {isLoggedIn: boolean, user: IUser | undefined}) => void;
}

interface IState {
  isReady: boolean;
  username: string;
  password: string;
  users: ILoginInfo[];
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
    fetch('/api/users')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          isReady: true,
          users: res
        });
      })
      .catch(error => console.log(error));
  }

  public render() {
    return (
      <div className='container'>
       <div className='login-container'>
        <div className='login-panel'>
          <h1>World of Warehouse</h1>
          <h3>Sign in with your credentials</h3>
          <div className='input-container'>
            <Input width={'100%'}placeholder='username' name='username' type='text' onChange={e => this.onChange(e)}/>
            <br></br>
            <Input placeholder='password' name='password' type='password' onChange={e => this.onChange(e)}/>
          </div>
          {this.state.isReady 
            ? <a className=' button-enabled'onClick={() => this.props.login( this.login())}>Login</a>
            : <Dimmer active>
                <Loader />
              </Dimmer>
          }
        </div>
       </div>
        <div className='img-container'>
           
          <img className='lw-logo' src={pic} />
        </div>
      </div>
    );
  }

  private login(): {isLoggedIn: boolean, user: IUser | undefined} {
    let success = false;
    let foundUser = undefined;
    this.state.users.forEach(user => {
      if (user.username === this.state.username && user.password === this.state.password) {
        success = true;
        foundUser = user;
        this.props.dispatch(changeUser(user));
      }
    });
    return {isLoggedIn: success, user: foundUser};
  }

  private onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ [event.target.name]: event.target.value } as any);
  }
}




export default connect(null)(Login);
