import api from "./interceptors";


interface LoginData {
    username: string
    password: string
}

interface RegisterData {
    email: string,
    username: string,
    telefono: string,
    password: string;
}

export const login = async (data: LoginData) => {
    const response = await api.post('token/', data);
    localStorage.setItem('token', response.data.access);
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
}

export const register = async (data: RegisterData) => {
    const response = await api.post('/usuarios/', data);
    return response.data;
};