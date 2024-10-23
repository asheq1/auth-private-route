import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthContext from './Providers/AuthContext';
import Orders from './components/Orders';
import PrivateRoute from './Routes/PrivateRoute';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders /></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>,
)
