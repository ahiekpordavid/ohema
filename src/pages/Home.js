import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { BsEye } from "react-icons/bs";

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="bg-slate-200 pt-[80px]">
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
            {products.map((product) => {
              return (
                <div
                  className="w-full h-[400px] bg-white relative overflow-hidden group"
                  key={product.id}
                >
                  <h5 className="m-5 font-bold text-2xl">{product.id}</h5>
                  <img
                    className="w-ful h-[300px] object-cover hover:scale-90 transition duration-300"
                    src={product.image}
                    alt={product.id}
                  />
                  <Link
                    to={`product/${product.id}`}
                    className="m-5 hover:text-blue-600"
                  >
                    Shop Now
                  </Link>
                  <div className="absolute top-10 -right-11 group-hover:right-5  p-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    <Link
                      to={`product/${product.id}`}
                      className="text-sm uppercase h-12 w-max p-2 flex justify-center items-center drop-shadow-xl bg-gray-50 text-gray-600"
                    >
                      <span className="text-xl mr-1"><BsEye/></span>
                      View
                    </Link>
                  </div>
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
