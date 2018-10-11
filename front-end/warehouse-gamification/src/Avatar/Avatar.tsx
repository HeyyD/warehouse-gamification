import * as React from 'react';

import player from '../assets/player_sprites105x.png';
import SpriteSheet from './SpriteSheet';

class Avatar extends React.Component {

  private image = new Image()
  private canvas: HTMLCanvasElement | null;
  private spritesheet?: SpriteSheet;
  
  constructor(props: any) {
    super(props);
    this.image.src = player;
    this.image.onload = () => {
      this.spritesheet = new SpriteSheet(this.image, 8, 10);
      this.updateCanvas();
    }
  }

  public render() {
    return(
      <canvas
        width={ this.spritesheet ? this.spritesheet.width : 0 }
        height={ this.spritesheet ? this.spritesheet.height : 0 }
        ref={ canvas => (this.canvas = canvas) }>The avatar canvas
      </canvas>
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
