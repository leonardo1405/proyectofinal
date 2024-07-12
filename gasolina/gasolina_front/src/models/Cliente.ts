export interface Cliente {
    id?:               number;
    user:             User;
    edad:             string;
    fecha_nacimiento: string;
    ciudad:           string;
    telefono:         string;
    genero:           string;
}

export interface User {
    id:         number;
    username:   string;
    first_name: string;
    last_name:  string;
}
