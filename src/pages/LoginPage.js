import React from 'react'
import LoginForm from '../components/LoginForm'
import { authService } from '../services/authService'
import { Link } from 'react-router-dom';

function LoginPage() {

    const handleLogin = (email, password) => {
        console.log(email, password)

    }

    return (
        
        <div className='form-login'>
            <div className="login-box">
                <div className="login-icon">
                    {/* Icono persona simple */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="var(--primary)" height="50" viewBox="0 0 24 24" width="50">
                        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                    </svg>
                </div>
                <h2>Iniciar sesion</h2>
                <LoginForm onSubmit={handleLogin} />
                <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
            </div></div>
    )
}

export default LoginPage