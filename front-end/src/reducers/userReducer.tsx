import IEquipment from '../models/IEquipment';

const mockUser = {
  name: 'Tom',
  title: 'Gladiator',
  xp: 213222,
  lvl: 22,
  boxesPicked: 129,
  questsCompleted: 32,
  equipment : {
    hair: 0,
    skin: 0,
    shirt: 0
  }
};

const reducer = (state = mockUser, action: {type: string, equipment: IEquipment}) => {
  switch(action.type){
    case 'CHANGE_EQUIPMENT':
      return {...state, equipment: action.equipment};
    default:
      return state;
  }
};

export const changeEquipment = (eq: IEquipment) => {
  return async (dispatch: ({}) => {type: string}) => {
    dispatch({
      equipment: eq,
      type: 'CHANGE_EQUIPMENT'
    });
  };
};

export default reducer;
