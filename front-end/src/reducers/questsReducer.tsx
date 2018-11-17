import questsService from '../services/questsService';


const reducer = (state = [], action: {type: string, quests?: [], id?: string}) => {
  switch(action.type){
    case 'GETQUESTS':
      return action.quests;
    case 'DELETEQUEST':
      return state.filter((q: {id: string}) => q.id !== action.id);
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

export default reducer;
