import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFileMinus, BsFilePlus } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart,increaseAmount,decreaseAmount } = useContext(CartContext);
  const { name, capacity, specification, price, amount, id } = item;
  return (
    <div className="border-b py-2 mt-2 flex flex-row items-center">
      <Link to={`/product/${id}`}>
        <img
          src="https://www.electrolandgh.com/wp-content/uploads/2021/10/tvs-300x300.jpg"
          className="max-w-[80px] border"
          alt="icon"
        />
      </Link>
      <div className="flex flex-col w-full justify-between ml-10">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h4 className="uppercase font-bold mr-1">TCL </h4>
              <p>{capacity}</p>
            </div>
            <p className="text-xs text-gray-500">FHD SATELLITE</p>
            <p className="text-xs text-gray-500">{name}</p>
            <p className="text-xs text-gray-500 ">{specification}</p>
          </div>
          <div onClick={() => removeFromCart(name)}>
            <MdClose className="text-xl  cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex flex-row items-center">
            <small className="font-extrabold">QTY:</small>
            <div className="cursor-pointer"onClick={()=>{decreaseAmount(name)}}>
              <BsFileMinus className="text-xl ml-2" />
            </div>
            <p className="text-lg mx-2 underline">{amount}</p>
            <div className="cursor-pointer" onClick={()=>{increaseAmount(name)}}>
              <BsFilePlus className="text-xl" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="flex items-center">
              <small>GHS</small>{" "}
              <p className="text-sm text-gray-500 ml-1">{price}</p>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="flex items-center">
              <small>GHS</small>{" "}
              <p className="font-semibold ml-1">{`${parseFloat(
                price * amount
              ).toFixed(2)}`}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
