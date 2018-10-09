import * as React from 'react';

import player from '../assets/player_sprites.png';
import './Avatar.scss'

class Avatar extends React.Component {

  private image = new Image(5040, 90)
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
      <canvas ref={ canvas => (this.canvas = canvas) } >ASD</canvas>
    );
  }

  private updateCanvas() {
    if(this.canvas) {

      // const hRatio = 90 / this.image.width;
      // const vRatio = 90 / this.image.height;
      // const ratio  = Math.min (hRatio, vRatio);

      const ctx = this.canvas.getContext('2d');
      ctx!.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, 90, 90);
    }
  }
}

export default Avatar;
