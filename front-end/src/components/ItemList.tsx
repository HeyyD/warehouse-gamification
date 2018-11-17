import * as React from 'react';
import { connect } from 'react-redux';
import IEquipment from '../models/IEquipment';
import IUser from '../models/IUser';
import { changeEquipment} from '../reducers/userReducer';
import './ItemList.scss';
import SpriteSheet from './SpriteSheet';
import lockedIcons from '../assets/spritesheet_items.png';
import IAvailableEquipment from '../models/IAvailableEquipment';
import UnlockModal from '../modals/UnlockModal';

interface IProps {
  changeEquipment: (equipment: IEquipment) => any;
  id: string;
  user: IUser;
  equipment: IEquipment;
  availableEquipment: IAvailableEquipment;
  assets: {data: {}};
  isMobile: boolean;
}

interface IState {
  showModal: boolean;
}

class ItemList extends React.Component<IProps, IState> {

  private canvasRefs: HTMLCanvasElement[] = [];
  private spritesheet: SpriteSheet;
  private items: JSX.Element[] = [];

  private selectedItemIndex: number;

  constructor(props: IProps) {
    super(props);
    this.spritesheet = this.props.assets.data[this.props.id];

    this.state = {
      showModal: false
    };

    this.items = this.spritesheet.getSprites().map((sprite, index) => {
      return (
        <canvas key={ index } onClick={() => this.changeEquipment(index) } ref={ (canvas) => this.canvasRefs.push(canvas!) } width='90px' height='90px'>item</canvas>
      );
    });
  }

  public componentDidMount() {
    this.initDraw();
  }

  public componentWillUpdate() {
    const availableEquipment = this.props.availableEquipment[this.props.id];
    if (!availableEquipment.includes(this.selectedItemIndex)) {
      availableEquipment.push(this.selectedItemIndex);
    }
    this.initDraw();
  }

  public render() {
    return (
      <React.Fragment>
        {
          this.state.showModal &&
          <UnlockModal spritesheet={this.spritesheet} index={this.selectedItemIndex} onClick={() => this.setState({showModal: false}) } />
        }
        <div className={(this.props.isMobile ? 'mobile ' : '') + 'inventory-container'}>
          { this.items.map((item, index) => {
            return (
              <div key={ index } className={'item-wrapper' + (this.props.availableEquipment[this.props.id ].includes(index) ? '-available' : '')}>
                {item}
              </div>
            );
          }) }
        </div>
      </React.Fragment>
    );
  }

  private initDraw(): void {
    const availableEquipment = this.props.availableEquipment[this.props.id];
    const img = new Image();
    img.src = lockedIcons;
    img.onload = () => {
      const lock = new SpriteSheet(img, 1, 2);
      const ss = this.spritesheet;
      this.canvasRefs.forEach((canvas, index) => {
        const ctx = canvas.getContext('2d')!;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (availableEquipment.includes(index)) {
          ss.draw(ctx!, ss.getSprite(index));
        } else if (this.props.user.lvl >= index) {
          lock.draw(ctx!, lock.getSprite(0));
        } else {
          lock.draw(ctx!, lock.getSprite(1));
        }
      });
    };
  }

  private changeEquipment(index: number) {
    const availableEquipment = this.props.availableEquipment[this.props.id];

    if (availableEquipment.includes(index)) {
      const newState = {};

      Object.keys(this.props.equipment).forEach(key => {
        if(key === this.props.id) {
          newState[key] = index;
        } else {
          newState[key] = this.props.equipment[key];
        }
      });
      this.props.changeEquipment(newState as IEquipment);
    } else if (this.props.user.lvl >= index){
      this.selectedItemIndex = index;
      this.setState({showModal: true});
    } else {
      console.log('LOCKED!!');
    }
  }
}

const mapStateToProps = (state: {user: IUser, assets: {}, isMobile: boolean}) => {
  return {
    assets: state.assets,
    user: state.user,
    equipment: state.user.equipment,
    availableEquipment: state.user.availableEquipment,
    isMobile: state.isMobile
  };
};
export default connect(mapStateToProps, {changeEquipment}) (ItemList);