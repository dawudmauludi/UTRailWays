import { Outlet } from "react-router";
import Navbar from "../components/molecules/Navbar";

export const AppLayouts = () => {

  return (
    <>
     <Navbar />
      <Outlet />
    </>
  );
};
