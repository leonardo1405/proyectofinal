import { Bomba } from "../models/Bomba"
import api from "./interceptors";


export const BombaService = {
    create: (bomba:Bomba) => {
        return new Promise<Bomba>((resolve, reject) => {
            api.post('bomba/', bomba)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    list: () => {
        return new Promise<Bomba[]>((resolve, reject) => {
            api.get('bomba/')
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    get: (id: number) => {
        return new Promise<Bomba>((resolve, reject) => {
            api.get(`bomba/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    update: (bomba: Bomba) => {
        return new Promise<Bomba>((resolve, reject) => {
            api.put(`bomba/${bomba.id}/`, bomba)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    delete: (id: number) => {
        return new Promise((resolve, reject) => {
            api.delete(`bomba/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    }
}