
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
  return (dispatch: any) => {
    dispatch({
      type: 'TOGGLE' 
    });
  };
};

export const setTrue = () => {
  return (dispatch: any) =>  {
    dispatch({
      type: 'TRUE' 
    });
  };
};

export const setFalse = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'FALSE' 
    });
  };
};

export default reducer;
