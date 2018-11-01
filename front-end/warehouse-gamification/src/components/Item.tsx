import * as React from 'react';
import image from '../assets/broad_shirt_blue.png';

import './Item.scss';

class Item extends React.Component {
  public render() {
    return (
      <div className='item-wrapper'>
        <img src={image} />
      </div>
    );
  }
}
export default Item;
