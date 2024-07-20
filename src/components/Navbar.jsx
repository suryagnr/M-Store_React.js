import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBagShopping, FaCompass, FaHeart } from "react-icons/fa6";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const { cartItems } = useContext(StoreContext);
  const totalItemInCart = Object.keys(cartItems).length;

  const [active, setActive] = useState("explore");
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto h-[74px] max-w-[425px] bg-white px-7">
      <ul className="flex h-full w-full items-center justify-around">
        <li>
          <NavLink to="/m-store/" onClick={() => setActive("explore")}>
            <FaCompass
              className={`text-[32px]  ${active === "explore" ? "text-blue" : "text-grey"}`}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="relative"
            to="shop"
            onClick={() => setActive("shop")}
          >
            <FaBagShopping
              className={`relative bottom-1 text-4xl ${active === "shop" ? "text-blue" : "text-grey"}`}
            />
            <div
              className={`absolute -top-2 left-8 ${totalItemInCart >= 1 ? "flex" : "hidden"} h-4 w-max items-center justify-center rounded-md bg-blue px-1 py-1 text-xs font-medium text-white`}
            >
              {totalItemInCart}
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="favorit" onClick={() => setActive("favorit")}>
            <FaHeart
              className={`text-[32px]  ${active === "favorit" ? "text-blue" : "text-grey"}`}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
