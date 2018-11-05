const mockQuest = {
  current: 20,
  max: 100,
  name: 'Defeat the box dragon!',
};

const reducer = (state = mockQuest, action: {type: string}) => {
  switch(action.type){
    default:
      return state;
  }
};

export default reducer;
