import * as React from 'react';
import { connect } from 'react-redux';
import IEquipment from '../models/IEquipment';
import IUser from '../models/user';
import { changeEquipment} from '../reducers/userReducer';
import './ItemList.scss';
import SpriteSheet from './SpriteSheet';

interface IProps {
  changeEquipment: (equipment: IEquipment) => any;
  id: string;
  equipment: IEquipment;
  assets: {};
}

interface IState {
  items: JSX.Element[] | null;
}

class ItemList extends React.Component<IProps, IState> {

  private canvasRefs: HTMLCanvasElement[] = [];
  private spritesheet: SpriteSheet;

  constructor(props: IProps) {
    super(props);
    this.initSpritesheets();
    this.state = {items: null};
  }

  public render() {
    return (
      <div className='inventory-container'>{ this.state.items ? this.state.items : 'Loading...' }</div> 
    );
  }

  private initSpritesheets() {
    switch (this.props.id) {
      case 'hair':
        const hair = new Image();
        hair.src = this.props.assets['hair'];
        hair.onload = () => {
          this.spritesheet = new SpriteSheet(hair, 16, 10, 4);
          this.initDraw();
        };
        break;
      case 'skin':
        const skin = new Image();
        skin.src = this.props.assets['skin'];
        skin.onload = () => {
          this.spritesheet = new SpriteSheet(skin, 13, 10, 6);
          this.initDraw();
        };
        break;
      case 'shirt':
        const shirt = new Image();
        shirt.src = this.props.assets['shirt'];
        shirt.onload = () => {
          this.spritesheet = new SpriteSheet(shirt, 4, 10, 6);
          this.initDraw();
        };
    }
  }


  private initDraw(): void {
    const items = this.spritesheet.getSprites().map((sprite, index) => {
      return (
        <div key={ index } className='item-wrapper'>
          <canvas onClick={() => this.changeEquipment(index) } ref={ (canvas) => this.canvasRefs.push(canvas!) } width='90px' height='90px'>item</canvas>
        </div>
      );
    });

    this.setState({items});
    const ss = this.spritesheet;
    this.canvasRefs.forEach((canvas, index) => {
      const ctx = canvas.getContext('2d')!;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ss.draw(ctx!, ss.getSprite(index));
    });
  }

  private changeEquipment(index: number) {
    const newState = {};

    Object.keys(this.props.equipment).forEach(key => {
      if(key === this.props.id) {
        newState[key] = index;
      } else {
        newState[key] = this.props.equipment[key];
      }
    });
    this.props.changeEquipment(newState as IEquipment);
  }
}

const mapStateToProps = (state: {user: IUser, assets: {}}) => {
  return {
    assets: state.assets,
    equipment: state.user.equipment
  };
};
export default connect(mapStateToProps, {changeEquipment}) (ItemList);