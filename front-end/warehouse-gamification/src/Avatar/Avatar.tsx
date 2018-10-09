import * as React from 'react';

import player from '../assets/female_sprites.png';
import './Avatar.scss';
import SpriteSheet from './SpriteSheet';

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
      const ctx = this.canvas.getContext('2d');
      ctx!.clearRect(0, 0, this.image.width / 56, 90)

      const ss = new SpriteSheet(this.image, 1, 56);
      ss.draw(ctx!, 0, 33);
    }
  }
}

export default Avatar;
