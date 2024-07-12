import { Creador } from "../models/Creador"
import api from "./interceptors";


export const CreadorService = {
    create: (creador:Creador) => {
        return new Promise<Creador>((resolve, reject) => {
            api.post('creador/', creador)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    list: () => {
        return new Promise<Creador[]>((resolve, reject) => {
            api.get('creador/')
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    get: (id: number) => {
        return new Promise<Creador>((resolve, reject) => {
            api.get(`creador/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    update: (creador: Creador) => {
        return new Promise<Creador>((resolve, reject) => {
            api.put(`creador/${creador.id}/`, creador)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    delete: (id: number) => {
        return new Promise((resolve, reject) => {
            api.delete(`creador/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    }
}