import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/quests';

const getAll = async () => {
  const req = await axios.get(baseUrl);
  return req.data;
};

const deleteById = async (id: string) => {
  const req = await axios.delete(`${baseUrl}/${id}`);
  return req.data;
};

export default {
  getAll,
  deleteById
};
