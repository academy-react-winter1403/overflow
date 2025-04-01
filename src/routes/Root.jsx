import { Link } from "react-router"
import { Outlet } from "react-router"

const Root = () => {
    return (
        <div className="flex gap-20">
            <div className=" absolute top-[10px] left-[700px] w-[50px] h-[30px] bg-amber-200 rounded ">
                <button>
                    <Link to='/'> home </Link>
                </button>
            </div>
            <div className=" absolute top-[10px] left-[760px] w-[100px] h-[30px] bg-amber-200 rounded">
            <botton >
                <Link to='/step1'>Register page </Link>
            </botton>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export {Root}