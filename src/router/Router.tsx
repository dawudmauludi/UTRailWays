import { createBrowserRouter } from "react-router";
import { AppLayouts } from "../pages/root";
import ProtectedRoute from "./ProtectedRoute";
import { Dashboard } from "../pages/admin/Dashboard";
import { Pengguna } from "../pages/Pengguna";
import Login from "../pages/LoginForms";
import { HomePage } from "../pages/HomePage";
import { IndexStasiun} from "../pages/admin/Stasiun/Index";
import { IndexTrain } from "../pages/admin/Train/Index";
import { IndexSchedule } from "../pages/admin/Schedule/Index";
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
    path: "/admin/stasiun",
    element: (
      <ProtectedRoute role="admin">
        <IndexStasiun />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/train",
    element: (
      <ProtectedRoute role="admin">
        <IndexTrain />
      </ProtectedRoute>
    ),
  },
   {
    path: "/admin/schedule",
    element: (
      <ProtectedRoute role="admin">
        <IndexSchedule />
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
  path: "/unauthorized",
  element: <div>Unauthorized Access</div>
}
        ]
    }
]);

export default Router