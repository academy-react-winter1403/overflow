import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "../pages/Landing/Landing";
import Layout from "../pages/Layout/Layout";
import { Courses } from "../pages/Courses/Courses.jsx";
import { Register } from "../components/Register/Register.jsx";
import { Registerlvl3 } from "../components/Register/Registerlvl3.jsx";
import { Registerlvl2 } from "../components/Register/Registerlvl2.jsx";
import { AllCourse } from "../pages/Courses/AllCourses.jsx";
import NewsPage from "../pages/News/NewsPage.jsx";
import NewsDetails from "../pages/News/NewsDetails.jsx";
import { AllTeacers } from "../pages/teachers/AllTeachers.jsx";
import { Loginlevel1 } from "../pages/Auth/Login.jsx";
import { Resetpasswordlevel1 } from "../pages/Auth/ForgetPassStep1.jsx";
import { Resetpasswordlevel2 } from "../pages/Auth/ForgetPassStep2.jsx";
import { Idk } from "../components/Ep/Idk.jsx";
import { GetMyCoursesReserve } from "../components/Panel/GetMyCoursesReserve.jsx";
import { Dashboard } from "../components/Panel/Dashboard.jsx";
import { Personalinfo } from "../components/Panel/personalinfo.jsx";
import { Personalinfoedit } from "../components/Panel/personalinfoedit.jsx";
import { Panel2 } from "../components/Panel/Panel2.jsx";
import { Panel3 } from "../components/Panel/Panel3.jsx";
import { Fave } from "../components/Panel/fave.jsx";
import { Favenews } from "../components/Panel/Favenews.jsx";
import PanelLayout from "../pages/Panel/PanelLayout.jsx";
import { Security } from "../components/Panel/Security.jsx";
import { Mycomment } from "../core/services/api/userpanelapi/panelapis.js";
import { Mysetcomment } from "../components/Panel/Mycomment.jsx";
import { Mynewssetcomment } from "../components/Panel/Mynewscomment.jsx";
import { Updatesecurity } from "../components/Panel/editsecurity.jsx";
import { Loginlevel2 } from "../pages/Auth/twosteplogin.jsx";

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
          path: "/News",
          element: <NewsPage />,
        },
        {
          path: "News/NewsDetails/:id",
          element: <NewsDetails />,
        },
        {
          path: "/Panel",
          element: <PanelLayout />,
          children: [
            {
            
              path: "/Panel",
              element: <Dashboard />,
              index: true,
            },
            {
            
              path: "coursereserve",
              element: <Panel2 />,
            },
            {
              path: "mycourse",
              element: <Panel3 />,
            },
            {
              path: "favecourse",
              element: <Fave />,
            },
            {
              path: "favenews",
              element: <Favenews />,
            },
            {
              path: "panelpersoninfo",
              element: <Personalinfo />,
            },
            {
              path: "panelpersoninfoedit",
              element: <Personalinfoedit />,
            },
            {
              path:'security',
              element:<Security />
            }, 
            {
              path:'Mycomment',
              element:<Mysetcomment />
            },
             {
              path:'Mynewscomment',
              element:<Mynewssetcomment />
            },{
              path:"upadatesecurity"
              ,element:<Updatesecurity/>
            }
          ],
        },
        {
          path: "/allcourses",
          element: <AllCourse />,
        },
        {
          path: "/allcourses/Courses/:id",
          element: <Courses />,
        },

        {
          path: "/login",
          element: <Loginlevel1 />,
        },,

        {
          path: "/twostep",
          element: <Loginlevel2 />,
        },
        {
          path: "teachers",
          element: <AllTeacers />,
        },
        {
          path: "/rest1",
          element: <Resetpasswordlevel1 />,
        },
        {
          path: "/rest2/:code",
          element: <Resetpasswordlevel2 />,
        },
        {
          path: "/sendyourthing",
          element: <Idk />,
        },
    
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
