
const reducer = (state = false, action: {type: string}) => {
  switch(action.type){
    case 'TOGGLE':
      return !state;
    case 'FALSE':
      return false;
    case 'TRUE':
      return true;
    default:
      return state;
  }
};

export const toggle = () => {
  return async (dispatch: ({}) => {type: string}) => {
    dispatch({
      type: 'TOGGLE' 
    });
  };
};

export const setTrue = () => {
  return async (dispatch: ({}) => {type: string}) => {
    dispatch({
      type: 'TRUE' 
    });
  };
};

export const setFalse = () => {
  return async (dispatch: ({}) => {type: string}) => {
    dispatch({
      type: 'FALSE' 
    });
  };
};

export default reducer;
