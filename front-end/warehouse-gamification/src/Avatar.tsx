import * as React from 'react';

import player from './assets/player_sprites105x.png';
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
      this.forceUpdate()
      const ctx = this.canvas.getContext('2d');
      const ss = this.spritesheet!;

      ctx!.clearRect(0, 0, this.image.width / ss.width, ss.height);

      ss.draw(ctx!, 0, 0);
      ss.draw(ctx!, 1, 0);
      ss.draw(ctx!, 3, 1);
      ss.draw(ctx!, 4, 1);
      ss.draw(ctx!, 6, 1);
      ss.draw(ctx!, 7, 1);
    }
  }
}

export default Avatar;
