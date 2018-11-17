import usersService from '../services/userService';


const reducer = (state = [], action: {type: string, users?: []}) => {
  switch(action.type){
    case 'GETUSERS':
      return action.users;
    default:
      return state;
  }
};

export const initUsers = () => {
  return async (dispatch: ({}) => {type: string}) => {
    const users = await usersService.getAll();
    dispatch({
      users,
      type: 'GETUSERS'
    });
  };
};

export default reducer;
