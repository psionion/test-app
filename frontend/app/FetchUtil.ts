import axios from 'axios';

export async function getAPI() {
  const res = await axios.get(`/api`);
  return res;
}
