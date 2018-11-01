import hairImage from '../assets/spritesheet_hair.png';
import shirtImage from '../assets/spritesheet_shirts.png';
import skinImage from '../assets/spritesheet_skin.png';

const reducer = (state = { 'hair' : hairImage, 'shirt' : shirtImage, 'skin' : skinImage }, action: {type: string}) => {
  switch(action.type) {
    default:
      return state;
  }
};
export default reducer;
