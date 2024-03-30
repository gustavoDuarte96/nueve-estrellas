import { Outlet } from "react-router-dom"

export default function AuthLayout() {
    const logo = "nueve-estrellas.png"
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-40 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
