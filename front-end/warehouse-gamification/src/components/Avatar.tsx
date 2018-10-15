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

  private images = [
    this.skinSrc,
    this.shirtSrc,
    this.hairSrc
  ];

  private canvas: HTMLCanvasElement | null;

  private skinSpritesheet?: SpriteSheet;
  private shirtSpritesheet?: SpriteSheet;
  private hairSpritesheet?: SpriteSheet;
  
  constructor(props: any) {
    super(props);

    this.updateCanvas = this.updateCanvas.bind(this);

    this.skinSrc.src = skinImage;
    this.shirtSrc.src = shirtImage;
    this.hairSrc.src = hairImage;

    // Makes sure all the images are loaded before drawing
    let loadedImages = 0;
    this.images.forEach(img => {
      img.onload = () => {
        loadedImages++;
        if(loadedImages === this.images.length) {
          this.skinSpritesheet = new SpriteSheet(this.skinSrc, 13, 10, 6);
          this.shirtSpritesheet = new SpriteSheet(this.shirtSrc, 4, 10, 6);
          this.hairSpritesheet = new SpriteSheet(this.hairSrc, 16, 10, 4);
          this.updateCanvas();
        }
      };
    });
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
      const skin = this.skinSpritesheet!;
      const shirt = this.shirtSpritesheet!;
      const hair = this.hairSpritesheet!;

      ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height);

      skin.draw(ctx!, skin.getSprite(getRandomInt(0, skin.getSprites().length - 1)));
      shirt.draw(ctx!, shirt.getSprite(getRandomInt(0, shirt.getSprites().length - 1)));
      hair.draw(ctx!, hair.getSprite(getRandomInt(0, hair.getSprites().length - 1)));
    }
  }
}

export default Avatar;
