const mockUser = {
  name: 'Tom',
  title: 'gladiator',
  xp: 213222,
  lvl: 22,
  boxesPicked: 129,
  questsCompleted: 32
};

const reducer = (state = mockUser, action: {type: string}) => {
  switch(action.type){
    default:
      return state;
  }
};

export default reducer;
