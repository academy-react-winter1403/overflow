import "./App.css";
import { Register } from "../components/Register/Register";
import { Registerlvl2 } from "../components/Register/Registerlvl2";
import { Registerlvl3 } from "../components/Register/Registerlvl3";
import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "../pages/Landing/Landing";
import Layout from "../pages/Layout/Layout";
import { Courses } from "../pages/Courses/Courses.jsx";

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
