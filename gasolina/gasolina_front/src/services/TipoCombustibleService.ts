import { TipoCombustible } from "../models/TipoCombustible"
import api from "./interceptors";

export const TipoCombustibleService = {
    create: (tipo:TipoCombustible) => {
        return new Promise<TipoCombustible>((resolve, reject) => {
            api.post('tipo_combustible/', tipo)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    list: () => {
        return new Promise<TipoCombustible[]>((resolve, reject) => {
            api.get('tipo_combustible/')
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    get: (id: number) => {
        return new Promise<TipoCombustible>((resolve, reject) => {
            api.get(`tipo_combustible/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    update: (tipo: TipoCombustible) => {
        return new Promise<TipoCombustible>((resolve, reject) => {
            api.put(`tipo_combustible/${tipo.id}/`, tipo)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    delete: (id: number) => {
        return new Promise((resolve, reject) => {
            api.delete(`tipo_combustible/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    }
}