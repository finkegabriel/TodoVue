import client from '../lib/client';
const { apiFetch } = client;

const user ={
    logout: async () => apiFetch('/users/logout'),
}

export default user;