import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="pt-9 pb-20">
      <Navbar />
      <Outlet />
    </div>
  );
}
