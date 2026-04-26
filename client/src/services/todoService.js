import { api } from './apiService';

export const todoService = {
  getAll: () => api.get('/todos'),
  create: (title) => api.post('/todos', { title }),
  update: (id, updates) => api.put(`/todos/${id}`, updates),
  remove: (id) => api.del(`/todos/${id}`),
};
