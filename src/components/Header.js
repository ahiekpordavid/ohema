import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import {BsBag} from 'react-icons/bs'
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
    window.addEventListener('scroll', handleScroll);

  });

  return (
    <header className={`fixed w-full z-20 transition-all bg-white ${scrolled ? '' : ''}`}>
    <div className='flex justify-between container item-center mx-auto py-8 ' >
      <Link to={'/'} className="uppercase text-lg font-bold border-2  border-b-black border-l-blue-400 p-2 first-letter:text-blue-400" >Ohemaa Appliances</Link>
      <div onClick={() => setIsOpen(!isOpen)} className="relative flex cursor-pointer">
        <BsBag className="text-2xl font-bold text-black curser-pointer"/>
        <div className="bg-blue-500 absolute -right-2 bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemNumber}</div>
      </div>
    </div></header>
  );
};

export default Header;
