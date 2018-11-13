import * as React from 'react';
import { connect } from 'react-redux';
import IEquipment from '../models/IEquipment';
import IUser from '../models/IUser';
import { changeEquipment} from '../reducers/userReducer';
import './ItemList.scss';
import SpriteSheet from './SpriteSheet';
import lockedIcon from '../assets/locked-item.png';
import IAvailableEquipment from '../models/IAvailableEquipment';

interface IProps {
  changeEquipment: (equipment: IEquipment) => any;
  id: string;
  equipment: IEquipment;
  availableEquipment: IAvailableEquipment;
  assets: {data: {}};
  isMobile: boolean;
}

class ItemList extends React.Component<IProps> {

  private canvasRefs: HTMLCanvasElement[] = [];
  private spritesheet: SpriteSheet;
  private items: JSX.Element[] = [];

  constructor(props: IProps) {
    super(props);
    this.spritesheet = this.props.assets.data[this.props.id];
    this.items = this.spritesheet.getSprites().map((sprite, index) => {
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
      <div className={(this.props.isMobile ? 'mobile ' : '') + 'inventory-container'}>{ this.items }</div> 
    );
  }

  private initDraw(): void {
    const availableEquipment = this.props.availableEquipment[this.props.id];
    const img = new Image();
    img.src = lockedIcon;
    img.onload = () => {
      const lock = new SpriteSheet(img, 1, 1);
      const ss = this.spritesheet;
      this.canvasRefs.forEach((canvas, index) => {
        const ctx = canvas.getContext('2d')!;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (availableEquipment.includes(index)) {
          ss.draw(ctx!, ss.getSprite(index));
        } else {
          lock.draw(ctx!, lock.getSprite(0));
        }
      });
    };
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

const mapStateToProps = (state: {user: IUser, assets: {}, isMobile: boolean}) => {
  return {
    assets: state.assets,
    equipment: state.user.equipment,
    availableEquipment: state.user.availableEquipment,
    isMobile: state.isMobile
  };
};
export default connect(mapStateToProps, {changeEquipment}) (ItemList);