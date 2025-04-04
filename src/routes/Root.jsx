import { NavLink } from "react-router"
import { Outlet } from "react-router"

const Root = () => {
    return (   
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <nav className="flex space-x-4">
                    <NavLink to="/landing" className="text-blue-500 hover:underline">Landing</NavLink>
                    <NavLink to="/step1" className="text-blue-500 hover:underline">Step 1</NavLink>
                    <NavLink to="/step2" className="text-blue-500 hover:underline">Step 2</NavLink>
                    <NavLink to="/step3" className="text-blue-500 hover:underline">Step 3</NavLink>
                </nav>
                <Outlet />
            </div>
     )
}
export {Root}