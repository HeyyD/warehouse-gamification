const reducer = (state = true, action: {type: string, isMobile?: boolean}) => {
  switch(action.type){
    case 'SWITCH':
      return action.isMobile;
    default:
      return state;
  }
};

export const changeState = (isMobile: boolean) => {
  return async (dispatch: ({}) => any) => {
    dispatch({
      isMobile,
      type: 'SWITCH'
    });
  };
};

export default reducer;
