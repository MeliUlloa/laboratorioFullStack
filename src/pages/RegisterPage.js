import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Link } from 'react-router-dom';

function RegisterPage() {
 return (
        <div className='form-register'>
            <div className="login-box">
            <h2>Crear cuenta</h2>
            <RegisterForm />
            <p>¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link></p>
        </div></div>
    );
}

export default RegisterPage;
