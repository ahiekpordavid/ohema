import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CheckoutList from "../components/CheckoutList";
import { SidebarContext } from "../contexts/SidebarContext";
import { Breadcrumb, Select } from "antd";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);
  const { handleClose } = useContext(SidebarContext);
  const { Option } = Select;
  const [form] = Form.useForm();

  const [paymentMethod, setPaymentMethod] = useState(null);
  const [showMonthsDropdown, setShowMonthsDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
    setShowMonthsDropdown(value === "SUPPORT SCHEME");
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    const {
      fullname,
      phoneNumber,
      membership,
      address1,
      address2,
      paymentMethod,
      reference,
      months,
    } = values;
    const cartItems = cart.map((item) => {
      const { brandName, modelName, modelNumber, price, count } = item;

      return {
        brandName,
        modelName,
        modelNumber,
        price,
        count,
      };
    });

    const formData = {
      fullname,
      phoneNumber,
      membership,
      address1,
      address2,
      paymentMethod,
      reference,
      months,
      cartItems: JSON.stringify(cartItems),
      totalAmount: total,
      discount: 0,
      grandTotal: total - 0,
    };

    try {
      const serviceId = "service_2oiudbi";
      const templateId = "template_t847smw";
      const userId = "q7yhxn1Uq5WTrbcYf";
      await emailjs.send(serviceId, templateId, formData, userId);

      toast.success("Email sent successfully!");

      setLoading(false);
      form.resetFields(); 
    } catch (error) {
      toast.error("Error sending email");
    }
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
            <div className="flex flex-col border-r-2 border-dashed">
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
                  onFinish={handleSubmit}
                  form={form}
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
                        message: "Please input your full address!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item name="address2" label="Street Name">
                    <Input placeholder="Optional" />
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
                      <Option value="CASH" style={{ padding: 9 }}>
                        Cash
                      </Option>
                      <Option value="SUPPORT SCHEME" style={{ padding: 9 }}>
                        Support Scheme
                      </Option>
                    </Select>
                  </Form.Item>

                  {paymentMethod === "CASH" && (
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
                    <Form.Item
                      label="Select Months"
                      name="months"
                      rules={[
                        {
                          required: true,
                          message: "Please select the number of months",
                        },
                      ]}
                    >
                      <Select>
                        {[...Array(5).keys()].map((month) => {
                          const value = month * 3;
                          if (value === 0) {
                            return null;
                          }
                          return (
                            <Option key={value} value={String(value)}>
                              {value} month{month !== 0 ? "s" : ""}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  )}

                  {loading ? (
                    "Sending Request"
                  ) : (
                    <Form.Item className="mt-5">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="flex float-right bg-green-600 font-semibold text-md text-white"
                      >
                        Submit
                      </Button>
                    </Form.Item>
                  )}
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
