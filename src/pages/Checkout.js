import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CheckoutList from "../components/CheckoutList";
import { SidebarContext } from "../contexts/SidebarContext";
import { Breadcrumb, Select } from "antd";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);
  const { handleClose } = useContext(SidebarContext);
  const { Option } = Select;

  const [paymentMethod, setPaymentMethod] = useState(null);
  const [showMonthsDropdown, setShowMonthsDropdown] = useState(false);

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
    setShowMonthsDropdown(value === "FISERVICES");
  };

  return (
    <div className="bg-slate-200 h-full pt-[80px]" onClick={handleClose}>
      <div className="container mx-auto  py-16">
        <Breadcrumb
          className="mb-5"
          items={[
            {
              title: <Link to={"/"}>Home</Link>,
            },
            {
              title: "Checkout",
            },
          ]}
        />
        <div className="flex justify-center">
          <div className="flex flex-row bg-white">
            <div className="flex flex-col border-r-2">
              <div className="flex  flex-col gap-y-2 h-[520px] w-[450px]  overflow-y-auto overflow-x-hidden border p-3 border-gray-50  bg-white mr-5">
                {cart.map((item) => {
                  return <CheckoutList item={item} key={item.name} />;
                })}
              </div>
              <div className="mr-5 py-10 w-[450px] px-10 bg-white">
                <div className="flex justify-center">
                  <p className="text-md uppercase  font-medium underline">
                    Summary
                  </p>
                </div>
                <div className="flex justify-between mb-2">
                  <h2>Amount</h2>
                  <p className="font-medium">
                    <small>GHS</small> {total}
                  </p>
                </div>
                <div className="flex justify-between mb-4">
                  <h2>Discount</h2>
                  <p className="font-medium">
                    <small>GHS</small> 0
                  </p>
                </div>
                <div className="flex justify-between mb-4">
                  <h2 className="font-bold text-xl">Total</h2>
                  <p className="font-semibold text-xl text-green-600">
                    <small>GHS</small> {total - 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-white w-[500px] p-10 ">
                <Form
                  name="basic"
                  layout="vertical"
                  onFinish={""}
                  onFinishFailed={""}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Full Name"
                    name="fullname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item label="Membership ID" name="membership">
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Delivery Address"
                    name="address1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item name="address2" label="Street Name">
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Payment Method"
                    name="paymentMethod"
                    rules={[
                      {
                        required: true,
                        message: "Please select a integration type",
                      },
                      {
                        type: "string",
                      },
                    ]}
                  >
                    <Select onChange={handlePaymentMethodChange}>
                      <Option value="WALLETSERVICES" style={{ padding: 9 }}>
                        Cash
                      </Option>
                      <Option value="FISERVICES" style={{ padding: 9 }}>
                        Support Scheme
                      </Option>
                    </Select>
                  </Form.Item>

                  {paymentMethod === "WALLETSERVICES" && (
                    <div className="flex flex-row gap-1">
                      <Form.Item label="Cash URL" className=" w-full">
                        <Input placeholder="URL to Kowri" />
                      </Form.Item>
                      <Form.Item
                        label="Reference"
                        className=" w-full"
                        name="reference"
                        rules={[
                          {
                            required: true,
                            message: "Please enter reference",
                          },
                          {
                            type: "string",
                          },
                        ]}
                      >
                        <Input placeholder="Please enter reference" />
                      </Form.Item>
                    </div>
                  )}

                  {showMonthsDropdown && (
                    <Form.Item label="Select Months" name="months">
                      <Select>
                        {[...Array(12).keys()].map((month) => (
                          <Option key={month + 1} value={String(month + 1)}>
                            {month + 1} month{month !== 0 ? "s" : ""}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  )}

                  <Form.Item className="mt-5">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="flex float-right bg-green-600 font-semibold text-xl"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
