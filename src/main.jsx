import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Register } from './components/Register/Register.jsx'
import { Registerlvl2 } from './components/Register/Registerlvl2.jsx'
import { Registerlvl3 } from './components/Register/Registerlvl3.jsx'
import { Root } from './routes/Root.jsx'
import Landing from '../src/pages/Landing/Landing.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Root />,
    children: [
      // {
      //   index:true,
      //   path:'/App',
      //   element:<App />

      // },
      {
        path:'/landing',
        element:<Landing />,
      },
      {
        path:'/step1',
        element:<Register />
      },
      {
        path:'/step2',
        element:<Registerlvl2 />
      },
      {
        path:'/step3',
        element:<Registerlvl3 />
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
