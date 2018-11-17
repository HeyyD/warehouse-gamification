import questsService from '../services/questsService';


const reducer = (state = [], action: {type: string, quests?: []}) => {
  switch(action.type){
    case 'GETQUESTS':
      return action.quests;
    default:
      return state;
  }
};

export const initQuests = () => {
  return async (dispatch: ({}) => {type: string}) => {
    const quests = await questsService.getAll();
    dispatch({
      quests,
      type: 'GETQUESTS'
    });
  };
};

export default reducer;
