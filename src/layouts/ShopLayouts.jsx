import { useState } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function ShopLayouts() {
  const [active, setActive] = useState("cart");
  return (
    <div className="w-full px-5">
      <nav className="grid w-full grid-cols-2 grid-rows-1 border-grey">
        <NavLink to="/shop">
          <div
            onClick={() => setActive("cart")}
            className={`flex justify-center border-b-4  text-lg font-medium transition delay-150 ease-in ${active === "cart" ? " border-b-blue" : "border-b-tranparent"}`}
          >
            Cart
          </div>
        </NavLink>
        <NavLink to="history">
          <div
            onClick={() => setActive("history")}
            className={`flex justify-center border-b-4  text-lg font-medium transition delay-150 ease-in  ${active === "history" ? " border-b-blue" : "border-b-tranparent"}`}
          >
            History
          </div>
        </NavLink>
      </nav>
      <div className="mt-10 ">
        <Outlet />
      </div>
    </div>
  );
}
