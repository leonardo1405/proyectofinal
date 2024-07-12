import React, { useState } from 'react';
import { login } from '../../services/AuthService'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";
import { Input, Button } from '@material-tailwind/react';

interface LoginData {
    username: string;
    password: string;
}

const LoginForm = () => {
    const [formData, setFormData] = useState<LoginData>({ username: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await login(formData);
            console.log('Login successful:', response);
            navigate('/creador');
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Error iniciando sesión. Por favor, revisa tus credenciales.');
        }
    };

    return (
        <div className="login-form">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    color="light-blue"
                    size="md"
                    placeholder="Username"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="password"
                    color="light-blue"
                    size="md"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {error && <div className="error-message">{error}</div>}
                <Button
                    color="light-blue"
                    size="lg"
                    type="submit"
                >
                    Iniciar Sesión
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;