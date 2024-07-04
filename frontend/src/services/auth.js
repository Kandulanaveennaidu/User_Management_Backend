import api from './api';

export const register = (userData) => api.post('/auth/register', userData);
export const login = (credentials) => api.post('/auth/login', credentials);
export const getAllUsers = () => api.get('/users');
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);
export const getProfile = () => api.get('/users/profile');
export const updateProfile = (userData) => api.put('/users/profile', userData);