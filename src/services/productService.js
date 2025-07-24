// src/services/productService.js

const BASE_URL = 'http://localhost:3001';

export const productService = {
  getAll: async () => {
    try {
      const response = await fetch(`${BASE_URL}/publicaciones`);
      const data = await response.json();
      return data.posts || [];
    } catch (error) {
      console.error('Error al obtener productos:', error.message);
      return [];
    }
  },

  create: async (formData, token) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // 👈 importante: no usar JSON.stringify
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.msg || 'Error al crear producto');

      return { success: true, data };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
};
