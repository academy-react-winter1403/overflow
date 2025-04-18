import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "../pages/Landing/Landing";
import Layout from "../pages/Layout/Layout";
import { Courses } from "../pages/Courses/Courses.jsx";
import { Register } from "../components/Register/Register.jsx";
import { Registerlvl3 } from "../components/Register/Registerlvl3.jsx";
import { Registerlvl2 } from "../components/Register/Registerlvl2.jsx";
import { Panel } from "../components/Panel/Panel.jsx";
import { AllCourse } from "../pages/Courses/AllCourses.jsx";
import NewsPage from "../pages/News/NewsPage.jsx";
import NewsDetails from "../pages/News/NewsDetails.jsx";
import { AllTeacers } from "../pages/teachers/AllTeachers.jsx";
import { Loginlevel1 } from "../pages/Auth/Login.jsx";
import { Resetpasswordlevel1 } from "../pages/Auth/ForgetPassStep1.jsx";
import { Resetpasswordlevel2 } from "../pages/Auth/ForgetPassStep2.jsx";

function App() {
  const publicRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/Register-1",
          element: <Register />,
        },
        {
          path: "/Register-2",
          element: <Registerlvl2 />,
        },
        {
          path: "/Register-3",
          element: <Registerlvl3 />,
        },
        {
          path: "/Courses/:id",
          element: <Courses />,
        },
        {
          path: "/News",
          element: <NewsPage />,
        },
        {
          path: "/NewsDetails",
          element: <NewsDetails />,
        },
        {
          path: "/Panel",
          element: <Panel />,
        },{
          path: "/allcourses",
          element : <AllCourse/>,
        },{
          path:"/login",
          element:<Loginlevel1/>
        },{
          path:"teachers",
          element:<AllTeacers/>
        },{
          path : "/rest1",
          element:<Resetpasswordlevel1/>
        },{
          path : "/rest2",
          element : <Resetpasswordlevel2/>
        }
      ],
    },
  ];
  const router = createBrowserRouter(publicRoutes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
