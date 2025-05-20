import axios from 'axios';

export const API_URL = 'http://localhost:5001/api/projects';

export const API_BASE_URL = 'http://localhost:5001';
// export const API_BASE_URL = 'https://test-7a5h.onrender.com';

// Fetch all projects
export const fetchProjects = () => axios.get(API_URL);

// Fetch a single project by ID
export const fetchProjectById = (id) => axios.get(`${API_URL}/${id}`);

// Create a new project
export const createProject = (data) => axios.post(API_URL, data);

// Update a project
export const updateProject = (id, data) => axios.put(`${API_URL}/${id}`, data);

// Delete a project
export const deleteProject = (id) => axios.delete(`${API_URL}/${id}`);
