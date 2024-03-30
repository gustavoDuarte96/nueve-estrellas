import { Input, Button } from "@material-tailwind/react";

export default function PasswordRecovery() {
    return (
        <form className="space-y-6" action="#" method="POST">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Recuperar contraseña
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
            {/* Mostrar un boton de que si tienes cuenta toca aqui para iniciar sesion */}
            <div className="text-left">
                <a href="/login" className="font-semibold text-primario hover:text-indigo-500">
                    ¿Ya tienes una cuenta? Inicia sesión
                </a>
            </div>
            <div>
                <Button
                    fullWidth
                    className="bg-primario hover:bg-blue-700 text-white"
                    type="submit"
                >
                    Iniciar Sesión
                </Button>
            </div>
        </form>
    )
}