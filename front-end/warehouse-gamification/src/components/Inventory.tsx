import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import './Inventory.scss';
import ItemList from './ItemList';

class Inventory extends React.Component<RouteComponentProps<any>> {

  private lists = ['hair', 'skin', 'shirt'];

  constructor(props: RouteComponentProps<any>) {
    super(props);
  }

  public render() {
    if (this.props.match.params.id === 'menu') {
      return (
        <div className='inventory-wrapper'>
        <ul className='inventory-menu'>
          {
            this.lists.map((list, index) => {
              return <li key={ index }><Link to={ list }>{ list.toUpperCase() }</Link></li>;
            })
          }
        </ul>
      </div>
      );
    } else {
      return <ItemList id={ this.props.match.params.id } />;
    }
  }
}

export default withRouter (Inventory);
