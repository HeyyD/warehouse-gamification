import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Inventory from './components/Inventory';
import ItemList from './components/ItemList';
import MobileLayout from './layouts/MobileLayout'; 
import MainPage from './pages/MainPage';

class App extends React.Component {


  private itemLists: ItemList[] = [
    <ItemList id='skins' /> as unknown as ItemList,
    <ItemList id='hair' /> as unknown as ItemList,
    <ItemList id='shirts'/> as unknown as ItemList
  ];

  constructor(props: any) {
    super(props);
    this.inventoryLayout = this.inventoryLayout.bind(this);
  }

  public render() {
    return (
      <React.Fragment>
      <Router>
        <div className='content-wrapper'>
        <Route exact={true} path='/'
          render={() =>(<MobileLayout> <MainPage /> </MobileLayout>)} />
        <Route exact={true} path='/inventory' render={ this.inventoryLayout } />
        <Route exact={true} path='/inventory/:id' render={({match}) => this.itemListLayout(match.params.id) }/>
        <Route exact={true} path='/settings'
          render={() =>(<MobileLayout> <div>settings</div> </MobileLayout>)} />
        </div>
      </Router>
      </React.Fragment>
    );
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

export default App;
