import { useEffect, useState } from "react";
import { VentaService } from "../../services/VentaService";
import { Routes } from "../../routes/CONSTANTS";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import TailwindLink from "../../components/TailwindLink";
import NavMenu from "../../components/NavMenu";
import { Venta } from "../../models/Venta";

const VentaList = () => {
    const [ventasList, setVentasList] = useState<Venta[]>([]);
    
    useEffect(() => {
        fetchVentasList();
    }, []);

    const fetchVentasList = () => {
        VentaService.list().then((response) => {
            setVentasList(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    const deleteVenta = (id?: number) => {
        if (!id) {
            return;
        }
        VentaService.delete(id).then(() => {
            fetchVentasList();
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <>
            <NavMenu />
            <div className="flex justify-center w-screen">
                <Card className="h-full w-[90%] overflow-scroll mt-5">
                    <CardBody>
                        <CardHeader shadow={false}>
                            <h1 className="text-3xl font-bold">Lista de Ventas</h1>
                        </CardHeader>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre Factura</th>
                                    <th>NIT</th>
                                    <th>Cliente</th>
                                    <th>Correo</th>
                                    <th>Monto</th>
                                    <th>Precio Actual</th>
                                    <th>Cantidad Litros</th>
                                    <th>Bomba</th>
                                    <th>Fecha y Hora</th>
                                    <th>Tipo Producto</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {ventasList.map((venta: Venta) =>
                                    <tr className="even:bg-blue-gray-50/50" key={"venta" + venta.id}>
                                        <td>{venta.id}</td>
                                        <td>{venta.nombre_factura}</td>
                                        <td>{venta.nit}</td>
                                        <td>{venta.cliente}</td>
                                        <td>{venta.correo}</td>
                                        <td>{venta.monto}</td>
                                        <td>{venta.precio_actual}</td>
                                        <td>{venta.cantidad_litros}</td>
                                        <td>{venta.bomba}</td>
                                        <td>{venta.fecha_hora}</td>
                                        <td>{venta.tipo_producto}</td>
                                        <td>
                                            <TailwindLink text="Editar" to={Routes.VENTA.EDIT_PARAM(venta.id)} />
                                        </td>
                                        <td>
                                            <Button size="sm" color="red"
                                                onClick={() => {
                                                    deleteVenta(venta.id)
                                                }}>Eliminar</Button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default VentaList;
