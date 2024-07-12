import { useEffect, useState } from "react";
import { CreadorService } from "../../services/CreadorService";
import { Creador } from "../../models/Creador";
import { Routes } from "../../routes/CONSTANTS";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import TailwindLink from "../../components/TailwindLink";
import NavMenu from "../../components/NavMenu";

const CreadorList = () => {
    const [creadorList, setCreadorList] = useState<Creador[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchCreadorList();
    }, []);

    const fetchCreadorList = async () => {
        try {
            setLoading(true);
            const response = await CreadorService.list();
            setCreadorList(response);
        } catch (error) {
            setError("Error al cargar la lista de creadores. Por favor, intenta de nuevo.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    function deleteCreador(id?: number) {
        if (!id) {
            return;
        }
        CreadorService.delete(id).then(() => {
            fetchCreadorList();
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
                            <h1 className="text-3xl font-bold">Lista de Creadores</h1>
                        </CardHeader>
                        {loading ? (
                            <p>Cargando...</p>
                        ) : error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Username</th>
                                        <th>FirstName</th>
                                        <th>LastName</th>
                                        <th>Telefono</th>
                                        <th>FechaNacimiento</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {creadorList.map((creador: Creador) => (
                                        <tr className="even:bg-blue-gray-50/50" key={"creador" + creador.id}>
                                            <td>{creador.id}</td>
                                            <td>{creador.username}</td>
                                            <td>{creador.first_name}</td>
                                            <td>{creador.last_name}</td>
                                            <td>{creador.telefono}</td>
                                            <td>{creador.fechanacimiento}</td>
                                            <td>
                                                <TailwindLink text="Editar" to={Routes.CREADOR.EDIT_PARAM(creador.id)} />
                                            </td>
                                            <td>
                                                <Button size="sm" color="red"
                                                    onClick={() => {
                                                        deleteCreador(creador.id);
                                                    }}>Eliminar</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default CreadorList;
