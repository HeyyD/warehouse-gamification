import * as React from 'react';
import {Modal, Button, Form} from 'semantic-ui-react';
import { addQuest } from '../reducers/questsReducer';
import { connect } from 'react-redux';
import './QuestForm.scss';

interface IProps {
  addQuest: (quest: {}) => any;
}
interface IState {
  title: string;
  description: string;
  isOpen: boolean;
}
class QuestForm extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
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
    const quest = {
      title: this.state.title,
      description: this.state.description
    };
    return(
      <Modal 
      style={{marginTop: '-250px', height: '5em'}} 
      open={this.state.isOpen} 
      onClose={this.handleClose}
      onOpen={this.handleOpen}
      trigger={<Button onClick={this.handleOpen} color='green'>Add Quest</Button>
      }>
        <Modal.Header>Add quest</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Title</label>
                <input onChange={(e) => this.onChangeHandler(e)} name='title' placeholder='Title' />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <input onChange={this.onChangeHandler} name='description' placeholder='Description' />
              </Form.Field>
              <Button onClick={() => {
                this.handleClose();
                this.props.addQuest(quest);
              }} color='green'>Add Quest</Button>
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
}

export default connect(null, {addQuest})(QuestForm as any);
