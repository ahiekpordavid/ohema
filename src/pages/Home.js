import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import Appliance from "../data/Appliance .jpeg"

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="bg-slate-200 pt-[80px]">
      <img src={Appliance} alt="hero" className="w-full md:h-[800px] bg-white  md:object-fit"/>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[400px] bg-white "
                  key={product.id}
                >
                  <h5 className="m-5 font-bold text-2xl">{product.id}</h5>
                   <img className='w-ful h-[300px] object-cover hover:scale-90 transition duration-300' src={product.image} alt={product.id}/>
                   <Link to={`product/${product.id}`} className="m-5 hover:text-blue-600">Shop Now</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
