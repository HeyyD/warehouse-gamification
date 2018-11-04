import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import './Inventory.scss';
import ItemList from './ItemList';
import { connect } from 'react-redux';

interface IProps extends RouteComponentProps<any> {
  assets: {data: {}};
  isMobile: boolean;
}

class Inventory extends React.Component<IProps> {

  private lists: string[];

  constructor(props: IProps) {
    super(props);
    this.lists = Object.keys(this.props.assets.data);
  }

  public render() {

    let element;

    if (this.props.match.params.id === 'menu') {
      element = <ul className='inventory-menu'>{this.lists.map((list, index) => <li key={ index }><Link to={ list }>{ list.toUpperCase() }</Link></li>)}</ul>;
    } else {
      element = <ItemList id={ this.props.match.params.id } />;
    }
    return (
      <div className={(this.props.isMobile ? 'mobile ' : '') + 'inventory-wrapper' }>
        {element}
      </div>
    );
  }
}

const mapStateToProps = (state: {assets: {data: {}}, isMobile: boolean}) => {
  return {
    assets: state.assets,
    isMobile: state.isMobile
  };
};

export default withRouter(connect(mapStateToProps, null) (Inventory));
