import * as React from 'react';

import './Avatar.scss'
import player from './assets/player_sprites.png';

class Avatar extends React.Component {

  private image = new Image()
  private canvas: HTMLCanvasElement | null;
  
  constructor(props: any) {
    super(props);
    this.image.src = player;
    this.image.onload = () => {
      this.updateCanvas();
    }
  }

  public render() {
    return(
      <canvas className='avatar-canvas' ref={ canvas => (this.canvas = canvas) } >ASD</canvas>
    );
  }

  private updateCanvas() {
    if(this.canvas) {
      const ctx = this.canvas.getContext('2d');
      ctx!.drawImage(this.image, 0, 0, 500, 500);
    }
  }
}

export default Avatar;
