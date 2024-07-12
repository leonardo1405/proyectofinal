import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../routes/CONSTANTS";
import { TipoCombustibleService } from "../../services/TipoCombustibleService";
import NavMenu from "../../components/NavMenu";
import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";

const TipoCombustibleForm = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [surtidor, setSurtidor] = useState("");
    const [bomba, setBomba] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");

    const { id } = useParams();
    useEffect(() => {
        if (!id) { return; }
        fetchTipoCombustibleById();
    }, [id]);

    const fetchTipoCombustibleById = () => {
        if (!id) return;
        TipoCombustibleService.get(parseInt(id)).then((response) => {
            console.log(response);
            setNombre(response.nombre);
            setSurtidor(response.surtidor.toString());
            setBomba(response.bomba.toString());
            setPrecio(response.precio.toString());
            setStock(response.stock.toString());
        }).catch((error) => {
            console.log(error);
        });
    }

    const onTipoCombustibleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            updateTipoCombustible();
        } else {
            createTipoCombustible();
        }
    }

    const updateTipoCombustible = () => {
        if (!id) {
            return;
        }
        TipoCombustibleService.update({
            id: parseInt(id),
            nombre: nombre,
            surtidor: parseInt(surtidor),
            bomba: parseInt(bomba),
            precio: parseFloat(precio),
            stock: parseFloat(stock),
        }).then((response) => {
            console.log(response);
            navigate(Routes.TIPOCOMBUSTIBLE.LIST);
        }).catch((error) => {
            console.log(error);
        });
    }

    const createTipoCombustible = () => {
        TipoCombustibleService.create({
            nombre: nombre,
            surtidor: parseInt(surtidor),
            bomba: parseInt(bomba),
            precio: parseFloat(precio),
            stock: parseFloat(stock),
        })
            .then(response => {
                console.log(response);
                navigate(Routes.TIPOCOMBUSTIBLE.LIST);
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
                                Formulario de Tipo de Combustible
                            </Typography>
                        </CardHeader>
                        <form onSubmit={onTipoCombustibleFormSubmit}>
                            <div className="mt-3">
                                <Input label="Nombre" value={nombre}
                                    onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Surtidor" value={surtidor}
                                    onChange={(e) => setSurtidor(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Bomba" value={bomba}
                                    onChange={(e) => setBomba(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Precio" value={precio}
                                    onChange={(e) => setPrecio(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Stock" value={stock}
                                    onChange={(e) => setStock(e.target.value)} />
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

export default TipoCombustibleForm;

