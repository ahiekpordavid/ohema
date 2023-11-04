import React, { createContext, useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [cart, setCart] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
      const total = cart.reduce((accumulator,currentItem)=>{
        return accumulator + currentItem.price * currentItem.amount;
      },0)
      setTotal(total)
      if (cart.length > 0) {
        setIsOpen(true); 
      } else {
        setIsOpen(false); 
      }
  },[cart])

  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((accumulator,currentItem)=>{
        return accumulator + currentItem.amount;
      },0)
      setItemNumber(amount)
    }
  },[cart])

  const addToCart = (record, modelNumber, id) => {
    const newItem = { ...record, amount: 1, id };
    const cartItem = cart.find((item) => {
      return item.modelNumber === modelNumber;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.modelNumber === modelNumber) {
          return { ...item, amount: cartItem.amount + 1, id: cartItem.id };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (modelNumber) => {
    const newCart = cart.filter((item) => {
      return item.modelNumber !== modelNumber;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (modelNumber) => {
    const cartItem = cart.find((item) => item.modelNumber === modelNumber);
    addToCart(cartItem, modelNumber);
  };

  const decreaseAmount = (modelNumber) => {
    const cartItem = cart.find((item) => {
      return item.modelNumber === modelNumber;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.modelNumber === modelNumber) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(modelNumber);
    }
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemNumber,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
