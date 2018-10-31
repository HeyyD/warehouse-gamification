import * as React from 'react';

import './ItemList.scss';
import SpriteSheet from './SpriteSheet';

class ItemList extends React.Component<{ id: string, spritesheet: SpriteSheet }> {

  private canvasRefs: HTMLCanvasElement[] = [];
  private items: JSX.Element[];


  constructor(props: { id: string, spritesheet: SpriteSheet }) {
    super(props);

    this.items = this.props.spritesheet.getSprites().map((sprite, index) => {
      return (
        <div key={ index } className='item-wrapper'>
          <canvas ref={ (canvas) => this.canvasRefs.push(canvas!) } width='90px' height='90px'>item</canvas>
        </div>
      );
    });
  }

  public componentDidMount() {
    this.initDraw();
  }

  public render() {
    return (
      <div className='inventory-container'>{ this.items }</div> 
    );
  }

  private initDraw(): void {
    const ss = this.props.spritesheet;
    console.log(ss);
    this.canvasRefs.forEach((canvas, index) => {
      const ctx = canvas.getContext('2d')!;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ss.draw(ctx!, ss.getSprite(index));
    });
  }
}
export default ItemList;
