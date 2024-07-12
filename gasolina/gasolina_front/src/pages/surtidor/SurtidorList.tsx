import { useEffect, useState } from "react";
import { SurtidorService } from "../../services/SurtidorService";
import { Routes } from "../../routes/CONSTANTS";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import TailwindLink from "../../components/TailwindLink";
import NavMenu from "../../components/NavMenu";
import { Surtidor } from "../../models/Surtidor";

const RifasList = () => {
    const [rifasList, setRifasList] = useState<Surtidor[]>([])
    
    
    useEffect(() => {
        fetchProductList()
    }, [])

    const fetchProductList = () => {
        SurtidorService.list().then((response) => {
            setRifasList(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    function deleteProduct(id?: number) {
        if (!id) {
            return;
        }
        SurtidorService.delete(id).then(() => {
            fetchProductList();
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
                            <h1 className="text-3xl font-bold">Lista de Surtidor</h1>

                        </CardHeader>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Latitud</th>
                                    <th>Longitud</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {rifasList.map((surtidor: Surtidor) =>
                                    <tr className="even:bg-blue-gray-50/50" key={"rifas" + surtidor.id}>
                                        <td>{surtidor.id}</td>
                                        <td>{surtidor.nombre}</td>
                                        <td>{surtidor.latitud}</td>
                                        <td>{surtidor.longitud}</td>
                                        <td>
                                            <TailwindLink text="realizar accion" to={Routes.SURTIDOR.EDIT_PARAM(surtidor.id)} />
                                        </td>
                                        <td>
                                            <TailwindLink text="Editar" to={Routes.SURTIDOR.EDIT_PARAM(surtidor.id)} />
                                        </td>
                                        <td>
                                            <Button size="sm" color="red"
                                                onClick={() => {
                                                    deleteProduct(surtidor.id)
                                                }}>Eliminar</Button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
        </>);
}

export default RifasList;