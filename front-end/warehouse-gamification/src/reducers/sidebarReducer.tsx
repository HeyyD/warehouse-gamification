
const reducer = (state = true, action: {type: string}) => {
  switch(action.type){
    case 'TOGGLE':
      return !state;
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

export default reducer;
