import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import './Inventory.scss';

interface IProps extends RouteComponentProps<any> {
  lists: string[];
}

class Inventory extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div className='inventory-wrapper'>
        <ul className='inventory-menu'>
          {
            this.props.lists.map((list, index) => {
              // return <li key={ index }><Link to={ `inventory/${ list.props.id }` }>{ list.props.id.toUpperCase() }</Link></li>;
              return <li key={ index }><Link to={ `inventory/${ list }` }>{ list.toUpperCase() }</Link></li>;
            })
          }
        </ul>
      </div>
    );
  }
}
export default withRouter (Inventory);
