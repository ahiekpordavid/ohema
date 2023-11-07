import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemNumber } = useContext(CartContext);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed w-full z-20 transition-all bg-white ${
        scrolled ? "bg-white" : "bg-blue-600"
      }`}
    >
      <div className="flex justify-between container item-center mx-auto py-6 ">
        <Link
          to={"/"}
          className={`uppercase text-lg font-bold border-2  border-b-black border-l-black ${
            scrolled ? "" : "text-white"
          } p-2 first-letter:text-blue-400`}
        >
          Ohemaa Appliances
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex cursor-pointer"
        >
          <div
            className={`text-md border rounded-md p-2  font-bold text-white curser-pointer ${
              scrolled ? "text-black bg-slate-100" : ""
            }`}
          >View Cart</div>
          <div className="bg-blue-500 absolute -right-2 bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemNumber}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
