import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../routes/CONSTANTS";
import { VentaService } from "../../services/VentaService";
import NavMenu from "../../components/NavMenu";
import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";

const VentaForm = () => {
    const navigate = useNavigate();
    const [nombreFactura, setNombreFactura] = useState("");
    const [nit, setNit] = useState("");
    const [cliente, setCliente] = useState("");
    const [correo, setCorreo] = useState("");
    const [monto, setMonto] = useState("");
    const [precioActual, setPrecioActual] = useState("");
    const [cantidadLitros, setCantidadLitros] = useState("");
    const [bomba, setBomba] = useState("");
    const [fechaHora, setFechaHora] = useState("");
    const [tipoProducto, setTipoProducto] = useState("");

    const { id } = useParams();
    useEffect(() => {
        if (!id) { return; }
        fetchVentaById();
    }, [id]);

    const fetchVentaById = () => {
        if (!id) return;
        VentaService.get(parseInt(id)).then((response) => {
            console.log(response);
            setNombreFactura(response.nombre_factura);
            setNit(response.nit);
            setCliente(response.cliente.toString());
            setCorreo(response.correo);
            setMonto(response.monto);
            setPrecioActual(response.precio_actual);
            setCantidadLitros(response.cantidad_litros);
            setBomba(response.bomba.toString());
            setFechaHora(response.fecha_hora);
            setTipoProducto(response.tipo_producto.toString());
        }).catch((error) => {
            console.log(error);
        });
    }

    const onVentaFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            updateVenta();
        } else {
            createVenta();
        }
    }

    const updateVenta = () => {
        if (!id) {
            return;
        }
        VentaService.update({
            id: parseInt(id),
            nombre_factura: nombreFactura,
            nit: nit,
            cliente: parseInt(cliente),
            correo: correo,
            monto: monto,
            precio_actual: precioActual,
            cantidad_litros: cantidadLitros,
            bomba: parseInt(bomba),
            fecha_hora: fechaHora,
            tipo_producto: parseInt(tipoProducto),
        }).then((response) => {
            console.log(response);
            navigate(Routes.VENTAS.LIST);
        }).catch((error) => {
            console.log(error);
        });
    }

    const createVenta = () => {
        VentaService.create({
            nombre_factura: nombreFactura,
            nit: nit,
            cliente: parseInt(cliente),
            correo: correo,
            monto: monto,
            precio_actual: precioActual,
            cantidad_litros: cantidadLitros,
            bomba: parseInt(bomba),
            fecha_hora: fechaHora,
            tipo_producto: parseInt(tipoProducto),
        })
            .then(response => {
                console.log(response);
                navigate(Routes.VENTAS.LIST);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <NavMenu />
            <div className="flex justify-center w-screen">
                <Card className="w-[80%] mt-5">
                    <CardBody>
                        <CardHeader color="transparent" shadow={false} >
                            <Typography variant="h4" color="blue-gray">
                                Formulario de Venta
                            </Typography>
                        </CardHeader>
                        <form onSubmit={onVentaFormSubmit}>
                            <div className="mt-3">
                                <Input label="Nombre Factura" value={nombreFactura}
                                    onChange={(e) => setNombreFactura(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="NIT" value={nit}
                                    onChange={(e) => setNit(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Cliente" value={cliente}
                                    onChange={(e) => setCliente(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Correo" value={correo}
                                    onChange={(e) => setCorreo(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Monto" value={monto}
                                    onChange={(e) => setMonto(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Precio Actual" value={precioActual}
                                    onChange={(e) => setPrecioActual(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Cantidad Litros" value={cantidadLitros}
                                    onChange={(e) => setCantidadLitros(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Bomba" value={bomba}
                                    onChange={(e) => setBomba(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Fecha y Hora" value={fechaHora}
                                    onChange={(e) => setFechaHora(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Tipo Producto" value={tipoProducto}
                                    onChange={(e) => setTipoProducto(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Button type="submit">Guardar</Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default VentaForm;
