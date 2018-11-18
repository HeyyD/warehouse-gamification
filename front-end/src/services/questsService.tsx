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

const create = async (quest: {title: string, description: string}) =>  {
  const req = await axios.post(baseUrl, quest);
  return req.data;
};

export default {
  create,
  getAll,
  deleteById
};
