import * as React from 'react';
import './UnlockModal.scss';
import SpriteSheet from '../components/SpriteSheet';
import { Modal } from 'semantic-ui-react';

interface IProps {
  onClick: () => any;
  spritesheet: SpriteSheet;
  index: number;
}

const UnlockModal = (props: IProps) => {
  return (
    <Modal
    open={true}>
<Modal.Content>

      <div className='modal-panel'>
        <h1>CONGRATULATIONS!</h1>
        <h3>You unlocked a new item</h3>
        <canvas ref={(canvas) => {
          if (canvas) {
            const ctx = canvas!.getContext('2d');
            props.spritesheet.draw(ctx!, props.spritesheet.getSprite(props.index));
          }
        }} width='90px' height='90px'>item</canvas>
        <button onClick={ props.onClick }>OK!</button>
    </div>
        </Modal.Content>
    </Modal>
  );
};

export default UnlockModal;
