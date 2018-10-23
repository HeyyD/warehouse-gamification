import * as React from 'react';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';

import './Inventory.scss';

class Inventory extends React.Component<{ lists: ItemList[] }> {

  constructor(props: { lists: ItemList[] }) {
    super(props);
  }

  public render() {
    return (
      <div className='inventory-wrapper'>
        <ul className='inventory-menu'>
          <li><Link to='/inventory/asd'>Skin</Link></li>
          <li><Link to='/inventory/asd'>Hair</Link></li>
          <li><Link to='/inventory/asd'>Shirts</Link></li>
        </ul>
      </div>
    );
  }
}
export default Inventory;
