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
  spritesheet: SpriteSheet;
  equipment: IEquipment;
}

class ItemList extends React.Component<IProps> {

  private canvasRefs: HTMLCanvasElement[] = [];
  private items: JSX.Element[];


  constructor(props: IProps) {
    super(props);

    this.items = this.props.spritesheet.getSprites().map((sprite, index) => {
      return (
        <div key={ index } className='item-wrapper'>
          <canvas onClick={() => this.changeEquipment(index) } ref={ (canvas) => this.canvasRefs.push(canvas!) } width='90px' height='90px'>item</canvas>
        </div>
      );
    });
  }

  public componentDidMount() {
    this.initDraw();
  }

  public render() {
    return (
      <div className='inventory-container'>{ this.items }</div> 
    );
  }

  private initDraw(): void {
    const ss = this.props.spritesheet;
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

const mapStateToProps = (state: {user: IUser}) => {
  return {
    equipment: state.user.equipment
  };
};
export default connect(mapStateToProps, {changeEquipment}) (ItemList);