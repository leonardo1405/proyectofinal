import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../routes/CONSTANTS";
import { BombaService } from "../../services/BombaService";
import NavMenu from "../../components/NavMenu";
import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";

const SurtidorForm = () => {
    const navigate = useNavigate();
    const [codigo, setCodigo] = useState("");
    const [surtidor, setSurtidor] = useState("");


    const { id } = useParams();
    useEffect(() => {
        if (!id) { return; }
        fetchCreadorById();
    }, [id])

    const fetchCreadorById = () => {
        if (!id) return;
        BombaService.get(parseInt(id)).then((response) => {
            console.log(response);
            setCodigo(response.codigo);
            setSurtidor(response.surtidor.toString());

        }).catch((error) => {
            console.log(error);
        });
    }
    const onRifaFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            updateRifa();
        } else {
            createRifa();
        }
    }
    const updateRifa = () => {
        if (!id) {
            return;
        }
        BombaService.update({
            id: parseInt(id),
            codigo: codigo,
            surtidor: parseInt(surtidor), // Assign the object instead of a string
        }).then((response) => {
            console.log(response);
            navigate(Routes.BOMBA.LIST);
        }).catch((error) => {
            console.log(error);
        });
    }
    const createRifa = () => {
        BombaService.create({
            codigo: codigo,
            surtidor: parseInt(surtidor),
        })
            .then(response => {
                console.log(response);
                navigate(Routes.BOMBA.LIST);
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
                                Formulario de Bomba
                            </Typography>
                        </CardHeader>
                        <form onSubmit={onRifaFormSubmit}>
                            <div className="mt-3">
                                <Input label="Codigo" value={codigo}
                                    onChange={(e) => setCodigo(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Surtidor" value={surtidor}
                                    onChange={(e) => setSurtidor(e.target.value)} />
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

export default SurtidorForm;


