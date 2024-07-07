import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className=" bg-slate-100 fixed top-0 left-0 right-0 shadow-lg">
      <div className="w-11/12 flex justify-between items-center  max-w-6xl mx-auto">
        <div className="flex gap-x-9 items-center text-sm">
          <NavLink to="/">
            <img
              className="w-20 h-20 lg:w-[4.5rem] lg:h-[4.5rem]"
              src="/logo/garaLogo.png"
              alt="logo"
            />
          </NavLink>

          <ul className=" flex gap-x-12">
            <NavLink className=" text-lg font-semibold" to="/">
              <li>Home</li>
            </NavLink>

            <NavLink className=" text-lg font-semibold" to="/products">
              <li>Products</li>
            </NavLink>
          </ul>
        </div>
        <NavLink className="text-2xl font-semibold" to="/cart">
          <div className=" relative">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className=" absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
