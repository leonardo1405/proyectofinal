import { Camion } from "../models/Camion";
import api from "./interceptors";

export const CamionService = {
    create: (camion: Camion) => {
        return new Promise<Camion>((resolve, reject) => {
            api.post('camion/', camion)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    list: () => {
        return new Promise<Camion[]>((resolve, reject) => {
            api.get('camion/')
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    get: (id: number) => {
        return new Promise<Camion>((resolve, reject) => {
            api.get(`camion/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    update: (camion: Camion) => {
        return new Promise<Camion>((resolve, reject) => {
            api.put(`camion/${camion.id}/`, camion)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    },
    delete: (id: number) => {
        return new Promise<void>((resolve, reject) => {
            api.delete(`camion/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }
}
