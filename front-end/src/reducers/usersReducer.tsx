import usersService from '../services/userService';


const reducer = (state = [], action: {type: string, users?: [], user: {id: number}}) => {
  switch(action.type){
    case 'GETUSERS':
      return action.users;
    case 'UPDATEUSER':
      const old = state.filter((u: {id: number})=> u.id !== action.user.id); 
      return [...old, action.user];
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

export const updateUser = (id: string, level: {level: number}) => {
  return async (dispatch: ({}) => {type: string}) => {
    const user = await usersService.update(id, level); 
    dispatch({
      type: 'UPDATEUSER',
      user
    });
  };
};

export default reducer;
