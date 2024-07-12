import { Rifa } from "../models/Rifa"
import api from "./interceptors";


export const RifasService = {
    create: (rifa:Rifa) => {
        return new Promise<Rifa>((resolve, reject) => {
            api.post('rifas/', rifa)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    list: () => {
        return new Promise<Rifa[]>((resolve, reject) => {
            api.get('rifas/')
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    get: (id: number) => {
        return new Promise<Rifa>((resolve, reject) => {
            api.get(`rifas/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    update: (rifa: Rifa) => {
        return new Promise<Rifa>((resolve, reject) => {
            api.put(`rifas/${rifa.id}/`, rifa)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    delete: (id: number) => {
        return new Promise((resolve, reject) => {
            api.delete(`rifas/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    }
}