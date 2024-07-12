import { UsuarioParticipante } from "../models/UsuarioParticipante"
import api from "./interceptors";


export const UsuarioParticipanteService = {
    create: (usuarioparticipante: UsuarioParticipante) => {
        return new Promise<UsuarioParticipante>((resolve, reject) => {
            api.post('usuarioparticipante/', usuarioparticipante)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    list: () => {
        return new Promise<UsuarioParticipante[]>((resolve, reject) => {
            api.get('usuarioparticipante/')
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    get: (id: number) => {
        return new Promise<UsuarioParticipante>((resolve, reject) => {
            api.get(`usuarioparticipante/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    update: (usuarioparticipante: UsuarioParticipante) => {
        return new Promise<UsuarioParticipante>((resolve, reject) => {
            api.put(`usuarioparticipante/${usuarioparticipante.id}/`, usuarioparticipante)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    delete: (id: number) => {
        return new Promise((resolve, reject) => {
            api.delete(`usuarioparticipante/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    }
}