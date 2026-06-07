import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Criar instância do axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Autenticação
export const authAPI = {
  registro: (dados) => api.post('/auth/registro', dados),
  login: (email, senha) => api.post('/auth/login', { email, senha }),
  logout: () => api.post('/auth/logout'),
};

// Manhwas
export const manhwaAPI = {
  listar: (params) => api.get('/manhwas', { params }),
  obter: (id) => api.get(`/manhwas/${id}`),
  buscar: (termo) => api.get('/manhwas/search', { params: { q: termo } }),
  criar: (dados) => api.post('/manhwas', dados),
  atualizar: (id, dados) => api.put(`/manhwas/${id}`, dados),
  deletar: (id) => api.delete(`/manhwas/${id}`),
};

// Usuário
export const usuarioAPI = {
  perfil: () => api.get('/usuarios/perfil'),
  atualizar: (dados) => api.put('/usuarios/perfil', dados),
  favoritos: () => api.get('/usuarios/favoritos'),
  adicionarFavorito: (manhwaId) => api.post(`/usuarios/favoritos/${manhwaId}`),
  removerFavorito: (manhwaId) => api.delete(`/usuarios/favoritos/${manhwaId}`),
};

export default api;
