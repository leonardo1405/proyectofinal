import { Chofer } from './Chofer';

export interface Camion {
    id: number;
    modelo: string;
    placa: string;
    capacidad: number;
    saldo: number;
    chofer: Chofer | null;
    tipo_combustible: string;
}
