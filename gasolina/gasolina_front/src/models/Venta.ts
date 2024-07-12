export interface Venta {
    id?: number;
    nombre_factura: string;
    nit: string;
    cliente: number;
    correo: string;
    monto: string;
    precio_actual: string;
    cantidad_litros: string;
    bomba: number;
    fecha_hora: string;
    tipo_producto : number;
}
