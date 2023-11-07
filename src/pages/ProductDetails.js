import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { Link, useParams } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";
import { Breadcrumb, Table, Tabs } from "antd";

const ProductDetails = () => {
  const { handleClose } = useContext(SidebarContext);
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const filteredProduct = products.find((product) => product.id === id);

  const columns = [
    {
      title: "Model",
      key: "name",
      width: "25%",
      render: (record) => record?.modelNumber,
    },
    {
      title: "Capacity/Size",
      key: "capacity",
      width: "25%",
      render: (record) => record?.capacity,
    },
    {
      title: "Specification",
      key: "specification",
      width: "25%",
      render: (record) => record?.specification,
    },
    {
      title: "Price",
      key: "price",
      width: "25%",
      render: (record) => record?.price,
    },
    {
      key: "action",
      render: (record) => {
        return (
          <div
            className="border p-3 rounded-sm cursor-pointer hover:text-blue-700"
            onClick={() => {
              addToCart(record, record?.modelNumber, id);
            }}
          >
            <p>Add</p>
          </div>
        );
      },
    },
  ];

  return (
    <div className=" bg-slate-200 h-full pt-[80px]" onClick={handleClose}>
      <section className="py-16">
        <div className="container mx-auto">
          <Breadcrumb
            className="mb-5"
            items={[
              {
                title: <Link to={"/"}>Home</Link>,
              },
              {
                title: filteredProduct.id,
              },
            ]}
          />
          {filteredProduct ? (
            <div className="flex flex-row h-screen">
              <div className="flex flex-1 flex-col mr-5">
                <p className="py-10 uppercase text-3xl font-medium">
                  {filteredProduct.id}
                </p>
                <img
                  className=" w-[300px] object-contain hover:scale-90 transition duration-300"
                  src={filteredProduct.image}
                  alt={filteredProduct.id}
                />
                <div className="mr-20 mt-10 gap-5 flex flex-col">
                  <p className="text-lg font-semibold underline">
                    Description
                  </p>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 overflow-scroll">
                <p className="text-3xl font-medium mt-[50px] underline mb-5 uppercase">
                  Brands
                </p>
                <div>
                  <Tabs type="card" animated={false} defaultActiveKey="1">
                    {filteredProduct?.brands?.map((brand, index) => (
                      <Tabs.TabPane tab={brand.brandName} key={brand.brandName}>
                        {brand?.models?.map((brand) => (
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
                      </Tabs.TabPane>
                    ))}
                  </Tabs>
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
