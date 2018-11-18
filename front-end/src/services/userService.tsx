import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

const getAll = async () => {
  const req = await axios.get(baseUrl);
  return req.data;
};

const update = async (id: number, level: {level: number}) => {
  const req = await axios.put(`${baseUrl}/${id}`, level);
  return req.data;
};

export default {
  getAll,
  update
};
