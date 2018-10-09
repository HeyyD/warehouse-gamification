import * as React from 'react';

import spritesheet from './assets/player_sprites.png'

class Avatar extends React.Component {

  private image = new Image()
  private canvas: HTMLCanvasElement | null;
  
  constructor(props: any) {
    super(props);
    this.image.src = spritesheet;
  }

  public componentDidMount() {
    this.updateCanvas()
  }

  public render() {
    return(
      <canvas ref={ canvas => (this.canvas = canvas) }>ASD</canvas>
    );
  }

  private updateCanvas() {
    if(this.canvas) {
      const ctx = this.canvas.getContext('2d');
      ctx!.fillRect(0, 0, 100, 100)
    }
  }
}

export default Avatar;
