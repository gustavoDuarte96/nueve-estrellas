import { Input, Button } from "@material-tailwind/react";

export default function Login() {
    return (
        <form className="space-y-6" action="#" method="POST">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Ingrese a su cuenta
            </h2>
            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                </div>
                <div>
                    <Input variant="static" placeholder="Ingresa tu email" type="email" id="email" name="email" autoComplete="email" color='blue' />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Contraseña
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-primario hover:text-indigo-500">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </div>
                <div>
                    <Input
                        variant="static" placeholder="Ingresa tu contraseña" type="password" id="password" name="password" autoComplete="current-password" color='blue'
                    />
                </div>
            </div>

            <div>
                <Button
                    fullWidth
                    color="blue"
                    type="submit"
                >
                    Iniciar Sesión
                </Button>
            </div>
        </form>
    )
}