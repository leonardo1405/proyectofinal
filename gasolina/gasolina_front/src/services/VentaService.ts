import { Venta } from "../models/Venta"
import api from "./interceptors";

export const VentaService = {
    create: (surtidor: Venta) => {
        return new Promise<Venta>((resolve, reject) => {
            api.post('venta/', surtidor)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    list: () => {
        return new Promise<Venta[]>((resolve, reject) => {
            api.get('venta/')
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    get: (id: number) => {
        return new Promise<Venta>((resolve, reject) => {
            api.get(`venta/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    update: (venta: Venta) => {
        return new Promise<Venta>((resolve, reject) => {
            api.put(`venta/${venta.id}/`, venta)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    delete: (id: number) => {
        return new Promise((resolve, reject) => {
            api.delete(`venta/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    }
}