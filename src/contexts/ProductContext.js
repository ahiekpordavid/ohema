import React,{createContext} from 'react';
import { Products } from '../data/products';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const products = Products
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
