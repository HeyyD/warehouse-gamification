import * as React from 'react';
import './UnlockModal.scss';
import SpriteSheet from '../components/SpriteSheet';

interface IProps {
  onClick: () => any;
  spritesheet: SpriteSheet;
  index: number;
}

const UnlockModal = (props: IProps) => {
  return (
    <div className='modal'>
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
      <div className='modal-background'></div>
    </div>
  );
};

export default UnlockModal;
