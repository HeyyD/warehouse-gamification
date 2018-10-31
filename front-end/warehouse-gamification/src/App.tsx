import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Inventory from './components/Inventory';
import ItemList from './components/ItemList';
import SpriteSheet from './components/SpriteSheet';
import MobileLayout from './layouts/MobileLayout'; 
import MainPage from './pages/MainPage';
import { getSpritesheetData } from './reducers/assetsReducer';

interface IPropit {
  getSpritesheetData: () => any;
  assets: {};
}

class App extends React.Component<IPropit> {

  private itemLists: JSX.Element[] = [];

  constructor(props: IPropit) {
    super(props);
    this.inventoryLayout = this.inventoryLayout.bind(this);
  }

  public componentDidMount() {
    this.initSpritesheets();
  }

  public render() {
    return (
      <React.Fragment>
      <Router>
        <div className='content-wrapper'>
          <Route exact={true} path='/' render={() =>(<MobileLayout> <MainPage /> </MobileLayout>)} />
          <Route exact={true} path='/inventory' render={ this.inventoryLayout } />
          <Route exact={true} path='/inventory/:id' render={({match}) => this.itemListLayout(match.params.id) }/>
          <Route exact={true} path='/settings' render={() =>(<MobileLayout> <div>settings</div> </MobileLayout>)} />
        </div>
      </Router>
      </React.Fragment>
    );
  }

  private async initSpritesheets() {
    await this.props.getSpritesheetData();

    const hair = new Image();
    hair.src = this.props.assets['hair'];
    hair.onload = () => {
      const ss = new SpriteSheet(hair, 16, 10, 4);
      this.itemLists.push(<ItemList id='hair' spritesheet={ ss }/>);
    };

    const skin = new Image();
    skin.src = this.props.assets['skin'];
    skin.onload = () => {
      const ss = new SpriteSheet(skin, 13, 10, 6);
      this.itemLists.push(<ItemList id='skin' spritesheet={ ss }/>);
    };

    const shirt = new Image();
    shirt.src = this.props.assets['shirt'];
    shirt.onload = () => {
      const ss = new SpriteSheet(shirt, 4, 10, 6);
      this.itemLists.push(<ItemList id='shirt' spritesheet={ ss }/>);
    };
  }

  private itemListLayout(id: string): JSX.Element | undefined {
    for(const list of this.itemLists) {
      if (list.props.id === id) {
        return (
          <MobileLayout>{ list }</MobileLayout>
        );
      }
    }
    return undefined;
  }
  private inventoryLayout(): JSX.Element {
    return (
      <MobileLayout>
        <Inventory lists={ this.itemLists }/>
      </MobileLayout>
    );
  }
}

const mapStateToProps = (state: {assets: {}}) => {
  return {
    assets: state.assets
  };
};
export default connect(mapStateToProps, {getSpritesheetData})(App);
