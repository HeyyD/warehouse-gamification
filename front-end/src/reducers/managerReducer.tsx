const reducer = (state = false, action: {type: string, isManager?: boolean}) => {
  switch(action.type){
    case 'SWITCHMANAGER':
      return action.isManager;
    default:
      return state;
  }
};

export const changeManager = (isManager: boolean) => {
  return async (dispatch: ({}) => any) => {
    dispatch({
      isManager,
      type: 'SWITCHMANAGER'
    });
  };
};

export default reducer;
