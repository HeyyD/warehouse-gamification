const mockQuest = {
  name: 'Defeat the box dragon!',
  current: 20,
  max: 100,
};

const reducer = (state = mockQuest, action: {type: string}) => {
  switch(action.type){
    default:
      return state;
  }
};

export default reducer;
