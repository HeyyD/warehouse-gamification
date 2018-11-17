import questsService from '../services/questsService';


const reducer = (state = [], action: {type: string, quests?: [], id?: string, quest?: any}) => {
  switch(action.type){
    case 'GETQUESTS':
      return action.quests;
    case 'DELETEQUEST':
      return state.filter((q: {id: string}) => q.id !== action.id);
    case 'ADDQUEST':
      return state.concat(action.quest);
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

export const deleteQuest = (id: string) => {
  return async (dispatch: ({}) => {type: string, id: string}) => {
    await questsService.deleteById(id);
    dispatch({
      type: 'DELETEQUEST',
      id
    });
  };
};

export const addQuest = (quest: {title: string, description: string}) => {
  return async (dispatch: ({}) => {type: string, id: string}) => {
    const q = await questsService.create(quest);
    dispatch({
      type: 'ADDQUEST',
      quest: q
    });
  };
};

export default reducer;
