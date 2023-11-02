import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CheckoutList from "../components/CheckoutList";
import { SidebarContext } from "../contexts/SidebarContext";
import { Breadcrumb, Col, Row, Select } from "antd";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

const Checkout = () => {
  const { cart, total, itemNumber } = useContext(CartContext);
  const { handleClose } = useContext(SidebarContext);
  const { Option } = Select;

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
        <div className="flex ">
          <div style={{ flex: "1" }} className="flex flex-col items-end ">
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

          <div style={{ flex: "1" }} className="">
            <div className="bg-white max-w-[590px] p-10">
              <Form
                name="basic"
                layout="vertical"
                onFinish={""}
                onFinishFailed={""}
                autoComplete="off"
              >
                <Row>
                  <Col span={11}>
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
                  </Col>
                  <Col span={1}></Col>

                  <Col span={11}>
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
                      style={{ marginBottom: "5px" }}
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
                      <Select >
                        <Option value="WALLETSERVICES" style={{ padding: 9 }}>
                          Cash
                        </Option>
                        <Option value="FISERVICES" style={{ padding: 9 }}>
                          Support Scheme
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-blue-200"
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
  );
};

export default Checkout;
