import IEquipment from '../models/IEquipment';
import ILoginInfo from '../models/ILoginInfo';

const mockUser = {
  name: 'Tom',
  title: 'Gladiator',
  xp: 213222,
  lvl: 6,
  boxesPicked: 129,
  quests: [],
  questsCompleted: 32,
  equipment : {
    hair: 0,
    skin: 0,
    shirt: 0,
    armor: 0,
    helmet: 0,
    accessory: 0,
    weapon: 0
  },
  availableEquipment: {
    hair: [0, 1, 2, 3],
    skin: [0, 1, 2, 3],
    shirt: [0, 1, 2, 3],
    armor: [0, 1, 2, 3],
    helmet: [0, 1, 2, 3],
    accessory: [0, 1, 2, 3],
    weapon: [0, 1, 2, 3]
  }
};

const reducer = (state = mockUser, action: {type: string, equipment: IEquipment, user: ILoginInfo}) => {
  switch(action.type){
    case 'CHANGE_EQUIPMENT':
      return {...state, equipment: action.equipment};
    case 'CHANGE_USER':

    let completedQuests: number = 0;
    action.user.quests.forEach(quest => {
      if (quest.isComplete) {
        completedQuests += 1;
      }
    });
      return {
        ...state,
        name: action.user.username,
        lvl: action.user.level,
        xp: action.user.xp,
        quests: action.user.quests,
        questsCompleted: completedQuests
      };
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

export const changeUser = (loginInfo: ILoginInfo) => {
  return async (dispatch: ({}) => {type: string}) => {
    dispatch({
      type: 'CHANGE_USER',
      user: loginInfo
    });
  };
};

export default reducer;
