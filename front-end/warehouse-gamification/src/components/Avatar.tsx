import * as React from 'react';

import './Avatar.scss';

import hairImage from '../assets/spritesheet_hair.png';
import shirtImage from '../assets/spritesheet_shirts.png';
import skinImage from '../assets/spritesheet_skin.png';
import SpriteSheet from './SpriteSheet';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

    this.updateCanvas = this.updateCanvas.bind(this);

    this.skinSrc.src = skinImage;
    this.shirtSrc.src = shirtImage;
    this.hairSrc.src = hairImage;
    this.hairSrc.onload = () => {
      this.skin = new SpriteSheet(this.skinSrc, 13, 10);
      this.shirt = new SpriteSheet(this.shirtSrc, 4, 10);
      this.hair = new SpriteSheet(this.hairSrc, 16, 10);
      this.updateCanvas();
    };
  }

  public render() {
    return(
      <div className="avatar-container">
        <div className="canvas-container">
          <canvas ref={ canvas => (this.canvas = canvas) }>The avatar canvas</canvas>
        </div>
        <button onClick={ this.updateCanvas }>Create random avatar</button>
      </div>
    );
  }

  private updateCanvas() {
    if(this.canvas) {
      const ctx = this.canvas.getContext('2d');
      const skin = this.skin!;
      const shirt = this.shirt!;
      const hair = this.hair!;

      ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height);

      skin.draw(ctx!, skin.getSprite(getRandomInt(0, skin.getSprites().length - 1)));
      shirt.draw(ctx!, shirt.getSprite(getRandomInt(0, shirt.getSprites().length - 1)));
      hair.draw(ctx!, hair.getSprite(getRandomInt(0, hair.getSprites().length - 1)));
    }
  }
}

export default Avatar;
