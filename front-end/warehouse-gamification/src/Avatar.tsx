import * as React from 'react';

import spritesheet from './assets/player_sprites.png'

class Avatar extends React.Component {
  public render() {
    return(
      <img src={ spritesheet }/>
    );
  }
}

export default Avatar;
