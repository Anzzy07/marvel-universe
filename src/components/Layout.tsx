import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};
