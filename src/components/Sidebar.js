import React, { useContext } from "react";
import {Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { IoMdArrowForward } from "react-icons/io";
import { toast } from 'react-toastify';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart,total, itemNumber} = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if(cart.length > 0){
      localStorage.setItem("cartItems", JSON.stringify(cart));
      navigate('/checkout');
      handleClose()
    }else{
      toast.info("Add Item to Cart")
    }

  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="text-sm font-semibold uppercase">
          Selected Items ({itemNumber})
        </div>
        <div
          className="curser-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-[520px] lg:h-[620px] overflow-y-auto overflow-x-hidden border-b">
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

        <div className="mt-10 flex flex-col gap-3">
          <Link to={'/'} className="flex bg-gray-500 p-5 w-full rounded-sm text-white justify-center" onClick={handleClose}>Continue Shopping</Link>
          <button onClick={handleCheckout} className="flex bg-primary p-5 w-full rounded-sm text-white justify-center ">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
