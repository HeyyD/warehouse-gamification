import * as React from 'react';

import hairImage from './assets/spritesheet_hair.png';
import shirtImage from './assets/spritesheet_shirts.png';
import skinImage from './assets/spritesheet_skin.png';
import SpriteSheet from './SpriteSheet';

class Avatar extends React.Component {

  private skinSrc = new Image();
  private shirtSrc = new Image();
  private hairSrc = new Image();
  private canvas: HTMLCanvasElement | null;

  private skin?: SpriteSheet;
  private shirt?: SpriteSheet;
  private hair?: SpriteSheet;
  
  constructor(props: any) {
    super(props);
    this.skinSrc.src = skinImage;
    this.shirtSrc.src = shirtImage;
    this.hairSrc.src = hairImage;
    this.hairSrc.onload = () => {
      this.skin = new SpriteSheet(this.skinSrc, 13, 10);
      this.shirt = new SpriteSheet(this.shirtSrc, 4, 10);
      this.hair = new SpriteSheet(this.hairSrc, 16, 10);
      this.updateCanvas();
    }
  }

  public render() {
    return(
      <canvas
        width={ 105 }
        height={ 105 }
        ref={ canvas => (this.canvas = canvas) }>The avatar canvas
      </canvas>
    );
  }

  private updateCanvas() {
    if(this.canvas) {
      const ctx = this.canvas.getContext('2d');
      const skin = this.skin!;
      const shirt = this.shirt!;
      const hair = this.hair!;

      ctx!.clearRect(0, 0, this.skinSrc.width / skin.getWidth(), skin.getHeight());

      skin.draw(ctx!, 0, 0);
      shirt.draw(ctx!, 0, 0);
      hair.draw(ctx!, 0, 0);
    }
  }
}

export default Avatar;
