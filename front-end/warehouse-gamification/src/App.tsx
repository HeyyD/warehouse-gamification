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
  assets: any[];
}

class App extends React.Component<IPropit> {

  /*
  private itemLists: ItemList[] = [
    // <ItemList id='skins' /> as unknown as ItemList,
    <ItemList id='hair' /> as unknown as ItemList,
    // <ItemList id='shirts'/> as unknown as ItemList
  ];
  */

  private itemLists: ItemList[] = [];

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
    const image = new Image();
    image.src = this.props.assets[0];
    image.onload = () => {
      const hairSS = new SpriteSheet(image, 16, 10, 4);
      this.itemLists.push(<ItemList id='hair' spritesheet={ hairSS }/> as unknown as ItemList);
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

const mapStateToProps = (state: {assets: any[]}) => {
  return {
    assets: state.assets
  };
};
export default connect(mapStateToProps, {getSpritesheetData})(App);
