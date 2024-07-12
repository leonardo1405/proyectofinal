import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../routes/CONSTANTS";
import { RutaService } from "../../services/RutaService";
import NavMenu from "../../components/NavMenu";
import { Button, Card, CardBody, CardHeader, Input, Typography, Select, Option } from "@material-tailwind/react";

const RutaForm = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [camion, setCamion] = useState("");
    const [litroCombustible, setLitroCombustible] = useState("");
    const [precioCombustible, setPrecioCombustible] = useState("");
    const [tipoCombustible, setTipoCombustible] = useState("1");


    const { id } = useParams();
    useEffect(() => {
        if (!id) { return; }
        fetchRutaById();
    }, [id]);

    const fetchRutaById = () => {
        if (!id) return;
        RutaService.get(parseInt(id)).then((response) => {
            console.log(response);
            setNombre(response.nombre);
            setFecha(response.fecha);
            setCamion(response.camion.toString());
            setLitroCombustible(response.litro_combustible.toString());
            setPrecioCombustible(response.precio_combustible.toString());
            setTipoCombustible(response.tipo_combustible.toString());
        }).catch((error) => {
            console.log(error);
        });
    }

    const onRutaFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            updateRuta();
        } else {
            createRuta();
        }
    }

    const updateRuta = () => {
        if (!id) {
            return;
        }
        RutaService.update({
            id: parseInt(id),
            nombre: nombre,
            fecha: fecha,
            camion: parseInt(camion),
            litro_combustible: parseFloat(litroCombustible),
            precio_combustible: parseFloat(precioCombustible),
            tipo_combustible: parseInt(tipoCombustible),
        }).then((response) => {
            console.log(response);
            navigate(Routes.RUTA.LIST);
        }).catch((error) => {
            console.log(error);
        });
    }
    const createRuta = () => {
        RutaService.create({
            nombre: nombre,
            fecha: fecha,
            camion: parseInt(camion),
            litro_combustible: parseFloat(litroCombustible),
            precio_combustible: parseFloat(precioCombustible),
            tipo_combustible: parseInt(tipoCombustible),
        })
            .then(response => {
                console.log(response);
                navigate(Routes.RUTA.LIST);
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
                                Formulario de Ruta
                            </Typography>
                        </CardHeader>
                        <form onSubmit={onRutaFormSubmit}>
                            <div className="mt-3">
                                <Input label="Nombre" value={nombre}
                                    onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input type="date" label="Fecha" value={fecha}
                                    onChange={(e) => setFecha(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input type="Camion" label="Camion" value={fecha}
                                    onChange={(e) => setCamion(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Litro Combustible" value={litroCombustible}
                                    onChange={(e) => setLitroCombustible(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Precio Combustible" value={precioCombustible}
                                    onChange={(e) => setPrecioCombustible(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Select label="Tipo de Combustible" value={tipoCombustible}
                                    onChange={(e) => setTipoCombustible(e.target.value)}>
                                    <Option value="1">Gasolina</Option>
                                    <Option value="0">Gasolina Premium</Option>
                                    <Option value="-1">Diesel</Option>
                                </Select>
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

export default RutaForm;
