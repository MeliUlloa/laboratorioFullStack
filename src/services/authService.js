export const authService = {
  login: async (username, password) => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Error de autenticación');
      }

      // Guardamos token en localStorage
      localStorage.setItem('token', data.token);

      return { success: true, user: { username }, token: data.token };
    } catch (error) {
      console.error('Error en login:', error.message);
      return { success: false, message: error.message };
    }
  },

  register: async (username, email, password, role) => {
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, rol: role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Error en el registro');
      }

      return { success: true, message: 'Usuario creado' };
    } catch (error) {
      console.error('Error en registro:', error.message);
      return { success: false, message: error.message };
    }
  },
};
