import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "../pages/Landing/Landing";
import Layout from "../pages/Layout/Layout";
import { Courses } from "../pages/Courses/Courses.jsx";
import { Register } from "../core/services/api/Register/RegisterPages.js";



function App() {
  const publicRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        // {
        //   path: "/step1",
        //   element: <Register />,
        // },
        // {
        //   path: "/step2",
        //   element: <Registerlvl2 />,
        // },
        // {
        //   path: "/step3",
        //   element: <Registerlvl3 />,
        // },
        {
          path: "/step1",
          element: <Register />,
        },
        {
          path: "/step2",
          element: <Registerlvl2 />,
        },
        {
          path: "/step3",
          element: <Registerlvl3 />,
        },
        {
          path: "/Courses",
          element: <Courses />,
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
