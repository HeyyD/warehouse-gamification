import * as React from 'react';

import './Avatar.scss';

import hairImage from '../assets/spritesheet_hair.png';
import shirtImage from '../assets/spritesheet_shirts.png';
import skinImage from '../assets/spritesheet_skin.png';
// import store from '../store';
import SpriteSheet from './SpriteSheet';

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

    this.skinSrc.src = skinImage;
    this.shirtSrc.src = shirtImage;
    this.hairSrc.src = hairImage;
  }

  public render() {
    return(
      <div className="avatar-container">
        <div className="canvas-container">
          <canvas ref={ canvas => (this.canvas = canvas) }>The avatar canvas</canvas>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    let loadedImages = 0;
    this.images.forEach(img => {
      img.onload = () => {
        loadedImages++;
        if(loadedImages === this.images.length) {
          this.skinSpritesheet = new SpriteSheet(this.skinSrc, 13, 10, 6);
          this.shirtSpritesheet = new SpriteSheet(this.shirtSrc, 4, 10, 6);
          this.hairSpritesheet = new SpriteSheet(this.hairSrc, 16, 10, 4);

          if(this.canvas) {
            const ctx = this.canvas.getContext('2d');
            const skin = this.skinSpritesheet!;
            const shirt = this.shirtSpritesheet!;
            const hair = this.hairSpritesheet!;
      
            ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height);
            // const equipment = store.getState().user.equipment;

            skin.draw(ctx!, skin.getSprite(0));
            shirt.draw(ctx!, shirt.getSprite(0));
            hair.draw(ctx!, hair.getSprite(0));
          }
        }
      };
    });
  }
}

export default Avatar;
