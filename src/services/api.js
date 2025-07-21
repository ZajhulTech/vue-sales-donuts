// src/services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000, // (opcional)
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

// 🔐 Interceptor para agregar token a cada request
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['x-token'] = token
  }
  return config
})

// 🚨 Interceptor para manejar errores globales
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // El token expiró o es inválido
      localStorage.removeItem('token')
      window.location.href = '/login' // Redirección automática
    }

    if (error.response?.status === 403) {
      alert('No tienes permisos para acceder a este recurso.')
    }

    if (error.response?.status >= 500) {
      console.error('Error de servidor:', error.response)
    }

    return Promise.reject(error)
  }
)

export default api
