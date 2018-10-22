import * as React from 'react';
import Item from './Item';

import './Inventory.scss';

class Inventory extends React.Component {

  public render() {

    const items = [];
    for (let i = 0; i < 20; i++) {
      items.push(<Item/>);
    }

    return (
      <div className='inventory-wrapper'>
        <div className='inventory-container'>
          { items }
        </div>
      </div>
    );
  }
}
export default Inventory;
