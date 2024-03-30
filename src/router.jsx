import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./Views/Login";
import PasswordRecovery from "./Views/PasswordRecovery";
import MainLayout from "./layout/MainLayout";
import Index from "./Views/Index";
import Jugadores from "./Views/Jugadores";

const Router = createBrowserRouter([
    //Si es /login o /password-recovery, utiliza el layout AuthLayout 
    {
        path: "/login",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            }
        ]
    },
    {
        path: "/password-recovery",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <PasswordRecovery />,
            }
        ]
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/index",
                element: <Index />,
            },
            {
                path: "/jugadores",
                element: <Jugadores />,
            }
        ]
    }
]);

export default Router;