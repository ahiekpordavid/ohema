import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { useParams } from "react-router-dom";
import { Table } from "antd";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const filteredProduct = products.find((product) => product.id === id);

  const columns = [
    {
      title: "Model",
      dataIndex: "name",
      key: "name",
      width: "25%",
    },
    {
      title: "Capacity/Size",
      dataIndex: "capacity",
      key: "capacity",
      width: "25%",
    },
    {
      title: "Specification",
      dataIndex: "specification",
      key: "specification",
      width: "25%",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "25%",
    },
    {
      key: "action",
      render: (record) => {
        return (
          <div className="border p-3 rounded-sm cursor-pointer hover:text-blue-700" onClick={()=>{addToCart(record,record.name,id)}}>
            <p>Add</p>
          </div>
        );
      },
    },
  ];

  return (
    <div className=" bg-slate-200 h-full pt-[80px]">
      <section className="py-16">
        <div className="container mx-auto">
          {filteredProduct ? (
            <div className="flex flex-col">
              <div className="flex">
                <img
                  className="w-ful h-[300px] object-cover hover:scale-90 transition duration-300"
                  src={filteredProduct.image}
                  alt={filteredProduct.id}
                />
                <p className="p-10 uppercase text-3xl font-medium">
                  {filteredProduct.id}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-semibold mt-[50px] underline mb-10">
                  CATEGORIES
                </p>
                <div>
                  {filteredProduct?.brands?.map((brand) => (
                    <div className="mb-[30px]" key={brand?.name}>
                      <p className=" p-5 rounded-md text-xl font-bold">
                        {brand.name}
                      </p>
                      <Table
                        columns={columns}
                        dataSource={brand.model}
                        pagination={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="flex justify-center text-lg font-semibold uppercase text-center">
              Product not found
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
