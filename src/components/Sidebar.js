import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { IoMdArrowForward } from "react-icons/io";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart,total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="text-sm font-semibold uppercase">
          Selected Items (0)
        </div>
        <div
          className="curser-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-[520px] lg:h-[680px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.name} />;
        })}
      </div>
      <div>
        <div className= "flex flex-row justify-between items-center pt-8">
          <div className="flex flex-row items-center">
            <p className="uppercase mr-2 text-sm">total :</p>
            <p className="font-semibold"><small >GHS</small> {`${parseFloat(total).toFixed(2)}`}</p>
          </div>
          <button className="text-sm underline text-red-500 cursor-pointer" onClick={clearCart}>Clear Cart</button>
        </div>

        <div className="mt-10">
          <Link to={'./'} className="flex bg-primary p-5 rounded-sm text-white justify-center ">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
