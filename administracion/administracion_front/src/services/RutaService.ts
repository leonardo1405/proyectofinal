import { Ruta } from "../models/Ruta";
import api from "./interceptors";

export const RutaService = {
    create: (ruta: Ruta) => {
        return new Promise<Ruta>((resolve, reject) => {
            api.post('ruta/', ruta)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    list: () => {
        return new Promise<Ruta[]>((resolve, reject) => {
            api.get('ruta/')
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    get: (id: number) => {
        return new Promise<Ruta>((resolve, reject) => {
            api.get(`ruta/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    update: (ruta: Ruta) => {
        return new Promise<Ruta>((resolve, reject) => {
            api.put(`ruta/${ruta.id}/`, ruta)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    delete: (id: number) => {
        return new Promise<void>((resolve, reject) => {
            api.delete(`ruta/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }
}
