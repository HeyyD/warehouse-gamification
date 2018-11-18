import * as React from 'react';
import {Modal, Button, Form} from 'semantic-ui-react';
import { updateUser } from '../reducers/usersReducer';
import { connect } from 'react-redux';
import './QuestForm.scss';

interface IProps {
  updateUser: (id: string, level: {}) => any;
  level: number;
  username: string;
  id: string;
}
interface IState {
  newLevel: number;
  isOpen: boolean;
}
class UserForm extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      newLevel: 0,
      isOpen: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  public onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      [e.target.name]: e.target.value
    } as any);
  }

  public render() {
    const user = {
      level: this.state.newLevel 
    };
    return(
      <Modal 
      style={{marginTop: '-250px', height: '5em'}} 
      open={this.state.isOpen} 
      onClose={this.handleClose}
      onOpen={this.handleOpen}
      trigger={<Button onClick={this.handleOpen} color='red'>PUNISH</Button>
      }>
        <Modal.Header>PUNISH PLAYER BY SETTING HIS/HER NEW LEVEL!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                {this.props.username} <br/> current level: {this.props.level} 
              </Form.Field>
              <Form.Field>
                <label>Players new level</label>
                <input onChange={(e) => this.onChangeHandler(e)} name='newLevel' type='number' placeholder='Players new level' />
              </Form.Field>
              <Button onClick={() => {
                this.updateLevel(this.props.id, user);
                this.handleClose();
              }} color='red'>Change level</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    ); 
  }

  public handleOpen() {
    this.setState({
      isOpen: true
    });
  }
  public handleClose() {
    this.setState({
      isOpen: false
    });
  }
  private updateLevel(id: string, user: {level: number}) {
    if(user.level > 0){
      this.props.updateUser(this.props.id, user);
    }
  }
}

export default connect(null, {updateUser})(UserForm);
