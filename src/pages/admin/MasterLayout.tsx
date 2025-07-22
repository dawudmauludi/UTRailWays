import React, { type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/slice/auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";

type MasterLayoutProps = {
  children: ReactNode;
};

export const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="d-flex">
      <nav
        className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white vh-100 py-5 fixed-top"
        style={{ width: "200px" }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/stasiun" className="nav-link text-white">
              Stasiun
            </Link>
          </li>
          <li>
            <Link to="/admin/train" className="nav-link text-white">
              Kereta
            </Link>
          </li>
          <li>
            <Link to="/admin/schedule" className="nav-link text-white">
              Jadwal Kereta
            </Link>
          </li>

          {isAuthenticated && (
            <li>
              <button
                onClick={handleLogout}
                className="btn btn-link nav-link text-white text-start"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
        <hr />
      </nav>

      <div className="flex-grow-1 p-4" style={{
    marginTop: "30px",  
    marginLeft :"190px"
  }}
>{children}</div>
    </div>
  );
};
