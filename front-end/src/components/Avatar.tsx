import * as React from 'react';

import './Avatar.scss';

import SpriteSheet from './SpriteSheet';
import IUser from '../models/IUser';
import { connect } from 'react-redux';
import IEquipment from '../models/IEquipment';

interface IProps {
  equipment: IEquipment;
  assets: {data: {}};
}

class Avatar extends React.Component<IProps> {

  private canvas: HTMLCanvasElement | null;

  private skin: SpriteSheet;
  private hair: SpriteSheet;
  private shirt: SpriteSheet;
  private armor: SpriteSheet;
  private accessory: SpriteSheet;
  private helmet: SpriteSheet;
  private weapon: SpriteSheet;

  constructor(props: IProps) {
    super(props);

    this.reDraw = this.reDraw.bind(this);

    const data = props.assets.data;
    this.skin = data['skin'];
    this.hair = data['hair'];
    this.shirt = data['shirt'];
    this.armor = data['armor'];
    this.accessory = data['accessory'];
    this.helmet = data['helmet'];
    this.weapon = data['weapon'];
  }

  public componentDidMount() {
    this.reDraw();
  }

  public componentDidUpdate() {
    this.reDraw();
  }

  public render() {
    return(
      <div className="avatar-container">
        <div className="canvas-container">
          <canvas ref={ canvas => (this.canvas = canvas) }>The avatar canvas</canvas>
        </div>
      </div>
    );
  }

  private reDraw() {
    if(this.canvas) {
      const ctx = this.canvas.getContext('2d');
  
      ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const equipment = this.props.equipment;
  
      this.skin.draw(ctx!, this.skin.getSprite(equipment.skin));
      this.shirt.draw(ctx!, this.shirt.getSprite(equipment.shirt));
      this.hair.draw(ctx!, this.hair.getSprite(equipment.hair));
      this.armor.draw(ctx!, this.armor.getSprite(equipment.armor));
      this.helmet.draw(ctx!, this.helmet.getSprite(equipment.helmet));
      this.accessory.draw(ctx!, this.accessory.getSprite(equipment.accessory));
      this.weapon.draw(ctx!, this.weapon.getSprite(equipment.weapon));
    }
  }
}

const mapStateToProps = (state: {user: IUser, assets: {}}) => {
  return{
    equipment: state.user.equipment,
    assets: state.assets
  };
};

export default connect(mapStateToProps, null)(Avatar);
