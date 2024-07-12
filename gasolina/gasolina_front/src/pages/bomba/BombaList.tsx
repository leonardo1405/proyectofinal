import { useEffect, useState } from "react";
import { BombaService } from "../../services/BombaService";
import { Routes } from "../../routes/CONSTANTS";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import TailwindLink from "../../components/TailwindLink";
import NavMenu from "../../components/NavMenu";
import { Bomba } from "../../models/Bomba";

const BombaList = () => {
    const [rifasList, setRifasList] = useState<Bomba[]>([])
    
    
    useEffect(() => {
        fetchProductList()
    }, [])

    const fetchProductList = () => {
        BombaService.list().then((response) => {
            setRifasList(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    function deleteProduct(id?: number) {
        if (!id) {
            return;
        }
        BombaService.delete(id).then(() => {
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
                            <h1 className="text-3xl font-bold">Lista de BOMBAS</h1>
                        </CardHeader>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Codigo</th>
                                    <th>Surtidor</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {rifasList.map((bomba: Bomba) =>
                                    <tr className="even:bg-blue-gray-50/50" key={"bomba" + bomba.id}>
                                        <td>{bomba.id}</td>
                                        <td>{bomba.codigo}</td>
                                        <td>{bomba.surtidor}</td>
                                        <td>
                                            <TailwindLink text="realizar accion" to={Routes.BOMBA.EDIT_PARAM(bomba.id)} />
                                        </td>
                                        <td>
                                            <TailwindLink text="Editar" to={Routes.BOMBA.EDIT_PARAM(bomba.id)} />
                                        </td>
                                        <td>
                                            <Button size="sm" color="red"
                                                onClick={() => {
                                                    deleteProduct(bomba.id)
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

export default BombaList;