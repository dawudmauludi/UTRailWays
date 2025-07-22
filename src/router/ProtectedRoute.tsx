import { Navigate } from "react-router";

interface Props {
  children: React.ReactNode;
  role: "admin" | "user";
}

const ProtectedRoute = ({ children, role }: Props) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== role) {
    return <Navigate to="/unauthorized" replace />; // atau redirect ke 403
  }

  return <>{children}</>;
};

export default ProtectedRoute;
