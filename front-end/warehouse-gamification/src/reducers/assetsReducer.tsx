import hairImage from '../assets/spritesheet_hair.png';
import shirtImage from '../assets/spritesheet_shirts.png';
import skinImage from '../assets/spritesheet_skin.png';

const reducer = (state = [], action: {type: string, data: any}) => {
  switch(action.type) {
    case 'INIT':
      return action.data;
    default:
      return state;
  }
};

export const getSpritesheetData = () => {
  return (dispatch: any) => {
    // const ssData = [hairImage, shirtImage, skinImage];
    const ssData = {
      'hair' : hairImage,
      'shirt' : shirtImage,
      'skin' : skinImage
    };
    dispatch({
      data: ssData,
      type: 'INIT'
    });
  };
};

export default reducer;
