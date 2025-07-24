// src/components/LoginForm.js
import React, { useState } from 'react';
import { authService } from '../services/authService';
import '../assets/styles/styles.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');  // Estado para la contraseña
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navegate = useNavigate()

    // Función que se ejecuta cuando el usuario envía el formulario
    const handleSubmit = (e) => {
        e.preventDefault();  // Evita que el formulario recargue la página al enviar
        setLoading(true);    // Pone el estado de loading en true para mostrar spinner o deshabilitar botón
        setErrorMessage(''); // Limpia cualquier error anterior

        // Llama al servicio authService.login con los datos ingresados
        authService.login(username, password)
            .then(response => {

                localStorage.setItem('user', JSON.stringify(response))
                setLoading(false);
                if (response.success) {
                    navegate('/dash');
                } else {
                    setErrorMessage(response.message);
                }
            })
            .catch(error => {
                setLoading(false);
                setErrorMessage(error.message);
            });
    };

    return (
        <form className="form-login" onSubmit={handleSubmit}>
            <div class="input-group">
                <label> Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Cargando...' : 'Ingresar'}
            </button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
}

export default LoginForm;
