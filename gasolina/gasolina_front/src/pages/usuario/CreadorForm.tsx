import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../routes/CONSTANTS";
import { CreadorService } from "../../services/CreadorService";
import NavMenu from "../../components/NavMenu";
import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";

const CreadorForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechanacimiento, setFechaNacimiento] = useState("");
    const { id } = useParams();
    useEffect(() => {
        if (!id) { return; }
        fetchCreadorById();
    }, [id])
    
    const fetchCreadorById = () => {
        if (!id) return;
        CreadorService.get(parseInt(id)).then((response) => {
            console.log(response);
            setUsername(response.username);
            setPassword(response.password);
            setFirstname(response.first_name);
            setLastname(response.last_name);
            setTelefono(response.telefono);
            setFechaNacimiento(response.fechanacimiento);
            
        }).catch((error) => {
            console.log(error);
        });
    }
    const onCreadorFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            updateCreador();
        } else {
            createCreador();
        }
    }
    const updateCreador = () => {
        if (!id) {
            return;
        }
        CreadorService.update({
            id: parseInt(id),
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name,
            telefono: telefono,
            fechanacimiento: fechanacimiento
            
        }).then((response) => {
            console.log(response);
            navigate(Routes.CREADOR.LIST);
        }).catch((error) => {
            console.log(error);
        });
    }

    const createCreador = () => {
        CreadorService.create({
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name,
            telefono: telefono,
            fechanacimiento: fechanacimiento
        }).then((response) => {
            console.log(response);
            navigate(Routes.CREADOR.LIST);

        }).catch((error) => {
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
                                Formulario de Usuario
                            </Typography>
                        </CardHeader>

                        <form onSubmit={onCreadorFormSubmit}>
                            <div className="mt-3">
                                <Input label="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="firstname" value={first_name}
                                    onChange={(e) => setFirstname(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="lastname" value={last_name}
                                    onChange={(e) => setLastname(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Telefono" value={telefono} type="number" onChange={(e) => setTelefono(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Fecha de Nacimiento" value={fechanacimiento} type="date" onChange={(e) => setFechaNacimiento(e.target.value)} />
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

export default CreadorForm;


