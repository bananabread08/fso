import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const createBlog = async (newBlog) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newBlog, config);
  return response.data;
};

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const deleteBlog = async (id) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export const updateBlog = async (update) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.put(`${baseUrl}/${update.id}`, update, config);
  return response.data;
};
