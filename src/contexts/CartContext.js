import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
      const total = cart.reduce((accumulator,currentItem)=>{
        return accumulator + currentItem.price * currentItem.amount;
      },0)
      setTotal(total)
  },[cart])

  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((accumulator,currentItem)=>{
        return accumulator + currentItem.amount;
      },0)
      setItemNumber(amount)
    }
  },[cart])

  const addToCart = (record, name, id) => {
    const newItem = { ...record, amount: 1, id };
    const cartItem = cart.find((item) => {
      return item.name === name;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.name === name) {
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

  const removeFromCart = (name) => {
    const newCart = cart.filter((item) => {
      return item.name !== name;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (name) => {
    const cartItem = cart.find((item) => item.name === name);
    addToCart(cartItem, name);
  };

  const decreaseAmount = (name) => {
    const cartItem = cart.find((item) => {
      return item.name === name;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.name === name) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(name);
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
