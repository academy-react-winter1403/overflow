import { Link } from "react-router"
import { Outlet } from "react-router"

const Root = () => {
    return (
        <div className="flex gap-20">

            <div className=" absolute top-[10px] left-[600px] w-[50px] h-[30px]  ">
                <button>
                    <Link to='/'> home </Link>
                </button>
            </div>

            <div className=" absolute top-[10px] left-[700px] w-[150px] h-[30px]">
            <button >
                <Link to='/step1'>Register page </Link>
            </button>
            </div>

            <div className="absolute top-[10px] left-[870px] w-[100px] h-[30px]">

                <button><Link to='/Courses'>CoursesPage</Link></button>
            </div>

            <main>
                <Outlet />
            </main>
        </div>
    )
}
export {Root}