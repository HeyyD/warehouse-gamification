import axios from 'axios';

const spritesheets = [
  '/assets/spritesheet_hair.png',
  '/assets/spritesheet_shirts.png',
  '/assets/spritesheet_skin.png'
];

const getSpritesheets =  () => {
  return axios.all(spritesheets.map(url => {
   return axios.get(url);
  })).then(res => res.map(r => {
   return r.data;
  }));
};

export default getSpritesheets;
