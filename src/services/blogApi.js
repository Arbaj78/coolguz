import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export const BlogAPI = {
  getPosts: () => API.get('/posts'),
  createPost: (post) => API.post('/posts', post),
  updatePost: (id, post) => API.put(`/posts/${id}`, post)
};