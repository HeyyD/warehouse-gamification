import axios from 'axios';

const baseUrl = '/api/users';

const getAll = async () => {
  const req = await axios.get(baseUrl);
  return req.data;
};

const update = async (id: string, level: {level: number}) => {
  const req = await axios.put(`${baseUrl}/${id}`, level);
  console.log('helloteste');
  return req.data;
};

export default {
  getAll,
  update
};
