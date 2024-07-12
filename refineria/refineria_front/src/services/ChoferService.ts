import { Chofer } from "../models/Chofer";
import api from "./interceptors";

export const ChoferService = {
    create: (chofer: Chofer) => {
        return new Promise<Chofer>((resolve, reject) => {
            api.post('chofer/', chofer)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    list: () => {
        return new Promise<Chofer[]>((resolve, reject) => {
            api.get('chofer/')
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    get: (id: number) => {
        return new Promise<Chofer>((resolve, reject) => {
            api.get(`chofer/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    update: (chofer: Chofer) => {
        return new Promise<Chofer>((resolve, reject) => {
            api.put(`chofer/${chofer.id}/`, chofer)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    delete: (id: number) => {
        return new Promise<void>((resolve, reject) => {
            api.delete(`chofer/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }
}
