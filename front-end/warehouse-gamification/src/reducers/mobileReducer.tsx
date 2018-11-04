const reducer = (state = true, action: {type: string, isMobile?: boolean}) => {
  switch(action.type){
    case 'SWITCH':
      return action.isMobile;
    default:
      return state;
  }
};

export const changeMobileState = (isMobile: boolean) => {
  return async (dispatch: ({}) => any) => {
    dispatch({
      isMobile,
      type: 'SWITCH'
    });
  };
};

export default reducer;
