import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Item from './Item';

import './Inventory.scss';

class Inventory extends React.Component {

  public items: JSX.Element[] = [];

  public render() {

    for (let i = 0; i < 20; i++) {
      this.items.push(<Item/>);
    }

    return (
      <div className='inventory-wrapper'>
        <Router>
          <React.Fragment>
            <Route exact={ true } path='/inventory' render={ () =>
              <ul className='inventory-menu'>
                <li><Link to='/inventory/asd'>Skin</Link></li>
                <li><Link to='/inventory/asd'>Hair</Link></li>
                <li><Link to='/inventory/asd'>Shirts</Link></li>
              </ul>
            }/>
            <Route exact={ true } path='/inventory/asd' render={ () => <div className='inventory-container'>{ this.items }</div> }/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
export default Inventory;
