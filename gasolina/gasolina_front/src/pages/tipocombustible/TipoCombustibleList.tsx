import { useEffect, useState } from "react";
import { TipoCombustibleService } from "../../services/TipoCombustibleService";
import { SurtidorService } from "../../services/SurtidorService";
import { Routes } from "../../routes/CONSTANTS";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import TailwindLink from "../../components/TailwindLink";
import NavMenu from "../../components/NavMenu";
import { TipoCombustible } from "../../models/TipoCombustible";
import { Surtidor } from "../../models/Surtidor";

const TipoCombustibleList = () => {
    const [combustiblesList, setCombustiblesList] = useState<TipoCombustible[]>([]);
    const [surtidoresList, setSurtidoresList] = useState<Surtidor[]>([]);
    
    useEffect(() => {
        fetchCombustibleList();
        fetchSurtidoresList();
    }, []);

    const fetchCombustibleList = () => {
        TipoCombustibleService.list().then((response) => {
            setCombustiblesList(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    const fetchSurtidoresList = () => {
        SurtidorService.list().then((response) => {
            setSurtidoresList(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    const getSurtidorNombre = (surtidorId: number) => {
        const surtidor = surtidoresList.find(s => s.id === surtidorId);
        return surtidor ? surtidor.nombre : "Desconocido";
    }

    const deleteCombustible = (id?: number) => {
        if (!id) {
            return;
        }
        TipoCombustibleService.delete(id).then(() => {
            fetchCombustibleList();
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <NavMenu />
            <div className="flex justify-center w-screen ">
                <Card className="h-full w-[90%] overflow-scroll mt-5">
                    <CardBody>
                        <CardHeader shadow={false}>
                            <h1 className="text-3xl font-bold">Lista de Tipos de Combustible</h1>
                        </CardHeader>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Surtidor</th>
                                    <th>Bomba</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {combustiblesList.map((combustible: TipoCombustible) =>
                                    <tr className="even:bg-blue-gray-50/50" key={"combustible" + combustible.id}>
                                        <td>{combustible.id}</td>
                                        <td>{combustible.nombre}</td>
                                        <td>{getSurtidorNombre(combustible.surtidor)}</td>
                                        <td>{combustible.bomba}</td>
                                        <td>{combustible.precio}</td>
                                        <td>{combustible.stock}</td>
                                        <td>
                                            <TailwindLink text="Editar" to={Routes.TIPOCOMBUSTIBLE.EDIT_PARAM(combustible.id)} />
                                        </td>
                                        <td>
                                            <Button size="sm" color="red"
                                                onClick={() => {
                                                    deleteCombustible(combustible.id)
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

export default TipoCombustibleList;
