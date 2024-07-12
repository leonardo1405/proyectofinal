
export interface Ruta {
    id: number;
    fecha: string; // ISO 8601 date string
    nombre: string;
    camion: number;
    litro_combustible: number;
    precio_combustible: number;
    tipo_combustible: number;
}

export enum TipoCombustible {
    Gasolina = 1,
    GasolinaPremium = 0,
    Diesel = -1
}
