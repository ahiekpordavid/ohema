import React, { createContext, useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const {  setIsOpen } = useContext(SidebarContext);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [itemNumber, setItemNumber] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
      const total = cart.reduce((accumulator,currentItem)=>{
        return accumulator + currentItem.price * currentItem.count;
      },0)
      setTotal(total)
      if (cart.length > 0) {
        setIsOpen(true); 
      } else {
        setIsOpen(false); 
      }
  },[cart,setIsOpen])

  useEffect(()=>{
    if(cart){
      const count = cart.reduce((accumulator,currentItem)=>{
        return accumulator + currentItem.count;
      },0)
      setItemNumber(count)
    }
  },[cart])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (record, modelNumber, id) => {
    const newItem = { ...record, count: 1, id };
    const cartItem = cart.find((item) => {
      return item.modelNumber === modelNumber;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.modelNumber === modelNumber) {
          return { ...item, count: cartItem.count + 1, id: cartItem.id };
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
    setIsOpen(false); 
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
          return { ...item, count: cartItem.count - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.count < 2) {
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
