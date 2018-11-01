import hairImage from '../assets/spritesheet_hair.png';
import shirtImage from '../assets/spritesheet_shirts.png';
import skinImage from '../assets/spritesheet_skin.png';
import SpriteSheet from '../components/SpriteSheet';

const assetState = {
  isReady: false,
  data: {}
};

const reducer = (state = assetState, action: {type: string, dataKey: string, data: any, isReady: boolean}) => {
  switch(action.type) {
    case 'UPDATE_STATE':
      const tempData = {...state.data, [action.dataKey]: action.data};
      return {...state, data: tempData, isReady: action.isReady};
    default:
      return state;
  }
};

export const initAssets = () => {
  const images = { hair : hairImage , shirt : shirtImage, skin: skinImage };
  let loadedImages = 0;
  return async (dispatch: ({}) => {type: string}) => {
    Object.keys(images).forEach(key => {
      const img = new Image();
      img.src = images[key];
      img.onload = () => {
        let ss: SpriteSheet;
        switch (key) {
          case 'hair':
            ss = new SpriteSheet(img, 16, 10, 4); break;
          case 'shirt':
            ss = new SpriteSheet(img, 4, 10, 6); break;
          // skin
          default:
            ss = new SpriteSheet(img, 13, 10, 6); break;
        }
        loadedImages++;
        dispatch({
          isReady: loadedImages >= Object.keys(images).length,
          dataKey: key,
          data: ss,
          type: 'UPDATE_STATE'
        });
      };
    });
  };
};

export default reducer;
