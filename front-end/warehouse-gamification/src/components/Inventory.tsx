import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import './Inventory.scss';
import ItemList from './ItemList';
import { connect } from 'react-redux';

interface IProps extends RouteComponentProps<any> {
  assets: {data: {}};
}

class Inventory extends React.Component<IProps> {

  private lists: string[];

  constructor(props: IProps) {
    super(props);
    this.lists = Object.keys(this.props.assets.data);
  }

  public render() {
    const { id } = this.props.match.params;
    const atMenu = !(this.lists.indexOf(id) > -1);
    if (atMenu) {
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
      return <ItemList id={ id } />;
    }
  }
}

const mapStateToProps = (state: {assets: {data: {}}}) => {
  return {
    assets: state.assets
  };
};

export default withRouter(connect(mapStateToProps, null) (Inventory));
