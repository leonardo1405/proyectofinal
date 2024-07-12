import { Surtidor } from "../models/Surtidor"
import api from "./interceptors";

export const SurtidorService = {
    create: (surtidor: Surtidor) => {
        return new Promise<Surtidor>((resolve, reject) => {
            api.post('surtidor/', surtidor)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    list: () => {
        return new Promise<Surtidor[]>((resolve, reject) => {
            api.get('surtidor/')
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    get: (id: number) => {
        return new Promise<Surtidor>((resolve, reject) => {
            api.get(`surtidor/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    update: (surtidor: Surtidor) => {
        return new Promise<Surtidor>((resolve, reject) => {
            api.put(`surtidor/${surtidor.id}/`, surtidor)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    delete: (id: number) => {
        return new Promise((resolve, reject) => {
            api.delete(`surtidor/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    }
}