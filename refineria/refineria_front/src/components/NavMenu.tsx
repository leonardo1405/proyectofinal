import { Button, Menu, MenuHandler, MenuItem, MenuList, Navbar, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from '../routes/CONSTANTS';
import { logout as authServiceLogout } from "../services/AuthService";

const NavMenu = () => {
    const navigate = useNavigate();
    const { firstName, lastName }  = JSON.parse(localStorage.getItem('username') || '{}');

    const doLogout = () => {
        authServiceLogout();
        navigate(Routes.AUTH.LOGIN);
    }
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal"
            >
                <Menu>
                    <MenuHandler>
                        <Typography className="cursor-pointer">Venta</Typography>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem><Link to={Routes.VENTA.LIST}>Lista de Ventas</Link></MenuItem>
                        <MenuItem><Link to={Routes.VENTA.CREATE}>Crear Ventas</Link></MenuItem>
                    </MenuList>
                </Menu>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal"
            >
                <Menu>
                    <MenuHandler>
                        <Typography className="cursor-pointer">Bomba</Typography>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem><Link to={Routes.BOMBA.LIST}>Lista de Bombas</Link></MenuItem>
                        <MenuItem><Link to={Routes.BOMBA.CREATE}>Crear Bombas</Link></MenuItem>
                    </MenuList>
                </Menu>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal"
            >
                <Menu>
                    <MenuHandler>
                        <Typography className="cursor-pointer">Surtidor</Typography>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem><Link to={Routes.SURTIDOR.LIST}>Lista de Surtidor</Link></MenuItem>
                        <MenuItem><Link to={Routes.SURTIDOR.CREATE}>Crear Surtidor</Link></MenuItem>
                    </MenuList>
                </Menu>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal"
            >
                <Menu>
                    <MenuHandler>
                        <Typography className="cursor-pointer">TipoCombustible</Typography>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem><Link to={Routes.TIPOCOMBUSTIBLE.LIST}>Lista de TipoCombustible</Link></MenuItem>
                        <MenuItem><Link to={Routes.TIPOCOMBUSTIBLE.CREATE}>Crear TipoCombustible</Link></MenuItem>
                    </MenuList>
                </Menu>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal"
            >
                {firstName} {lastName}
            </Typography>
        </ul>
    );
    return (<Navbar variant="gradient" color="blue-gray" className="from-blue-gray-900 to-blue-gray-800  sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-white ">
            <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5 font-medium"
            >
                GASOLINERIA
            </Typography>
            <div className="flex items-center gap-4">
                <div className="mr-4 hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">

                    <Button
                        variant="gradient"
                        size="sm"
                        onClick={doLogout}
                        className="hidden lg:inline-block"
                    >
                        <span>Cerrar sesión</span>
                    </Button>
                </div>
            </div>
        </div>
    </Navbar>);
}

export default NavMenu;