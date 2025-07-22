import { createBrowserRouter } from "react-router";
import { AppLayouts } from "../pages/root";
import ProtectedRoute from "./ProtectedRoute";
import { Dashboard } from "../pages/admin/Dashboard";
import { Pengguna } from "../pages/Pengguna";
import Login from "../pages/LoginForms";
import CartPage from "../pages/CartPages";
import HomePage from "../pages/HomePage";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayouts/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/login',
                element: <Login/>
            },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute role="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
  },
   {
    path: "/pengguna",
    element: (
      <ProtectedRoute role="user">
        <Pengguna />
      </ProtectedRoute>
    ),
  },
   {
    path: "/cart",
    element: (
      <ProtectedRoute role="user">
        <CartPage />
      </ProtectedRoute>
    ),
  },
  {
  path: "/unauthorized",
  element: <div>Unauthorized Access</div>
}
        ]
    }
]);

export default Router