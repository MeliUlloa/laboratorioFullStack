import React, { useState } from 'react';
import { authService } from '../services/authService';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');  
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await authService.register(username, email, password, role);

            if (response.success) {
                setSuccessMessage('Usuario registrado correctamente, ya puedes iniciar sesión.');
                setUsername('');
                setEmail('');
                setPassword('');
                setRole('user');
            } else {
                setErrorMessage(response.message);
            }
        } catch (error) {
            setErrorMessage('Error al registrar usuario');
        }

        setLoading(false);
    };

    return (
        <form className="form-register" onSubmit={handleSubmit}>
            <div>
                <label>Usuario:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Rol:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuario</option>
                    <option value="admin">Administrador</option>
                    {/* Otros roles si hay */}
                </select>
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Registrando...' : 'Registrarse'}
            </button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </form>
    );
}

export default RegisterForm;
