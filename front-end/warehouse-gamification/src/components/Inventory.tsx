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
      <React.Fragment>
        <div className='inventory-container'>
          { items }
        </div>
      </React.Fragment>
    );
  }
}
export default Inventory;
