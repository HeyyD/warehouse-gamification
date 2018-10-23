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
          {
            this.props.lists.map((list, index) => {
              return <li key={ index }><Link to={ `inventory/${ list.props.id }` }>{ list.props.id.toUpperCase() }</Link></li>;
            })
          }
        </ul>
      </div>
    );
  }
}
export default Inventory;
