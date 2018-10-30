import getSpritesheets from '../services/assetsService';

const reducer = (state = [], action: {type: string, data: any}) => {
  switch(action.type) {
    case 'INIT':
      return action.data;
    default:
      return state;
  }
};

export const getSpritesheetData = () => {
  return async (dispatch: any) => {
    const ssData = await getSpritesheets();
    dispatch({
      data: ssData,
      type: 'INIT'
    });
  };
};

export default reducer;
