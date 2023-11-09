import { Divider } from "@mui/material";
import { Button, Modal } from "antd";
import React, { useContext, useRef } from "react";
import { CartContext } from "../contexts/CartContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ReceiptModal = ({ open,onCancel }) => {
  const { cart, total } = useContext(CartContext);
  const modalRef = useRef(null);

  const downloadHandler = () => {
    html2canvas(modalRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("receipt.pdf");
    });
  };

  const printHandler = () => {
    html2canvas(modalRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const windowContent = `<img src="${imgData}" style="width:100%;height:auto;">`;
      const printWindow = window.open();
      printWindow.document.open();
      printWindow.document.write(windowContent);
      printWindow.document.close();
      printWindow.print();
    });
  };

  return (
    <div>
      <Modal
        open={open}
        width={700}
        footer={
          <div className="flex justify-end">
            <Button onClick={downloadHandler}>Download</Button>
            <Button onClick={printHandler}>Print</Button>
            <Button onClick={onCancel}>Close</Button>
          </div>
        }
      >
        <section ref={modalRef} className="modal-content">
          <div className="flex flex-row justify-between items-center mt-[25px] px-3">
            <p className="uppercase  w-max text-lg font-bold border-2  border-b-black border-l-black p-2 first-letter:text-blue-400">
              Ohemaa Appliances
            </p>
            <div className="mr-5">
              <p className="text-sm font-medium">
                +233204573500 / +233249755457
              </p>
              <p className="text-sm font-medium">
                Kwashieman Christ Mission Junction
              </p>
            </div>
          </div>
          <Divider className="py-[20px]" />
          <div className="mt-[20px] px-3">
            <p className="text-md font-semibold">Bill To</p>
            <p className="text-md">David King</p>
            <p className="text-md">+233 50 5372203</p>
            <p className="text-md">Sowutuom Market Down</p>
            <p className="text-md">Accra</p>
          </div>
          <Divider className="py-[20px]" />
          <div className="flex  flex-col gap-y-2 h-[180px] w-full  overflow-y-auto overflow-x-hidden border p-3 border-gray-50  bg-white mr-5">
            {cart.map((item) => {
              return (
                <div className="flex flex-row border-b-2 justify-between h-[60px] items-center">
                  <p>{item.count}</p>
                  <p>{item.brandName}</p>
                  <p>{item.modelName}</p>
                  <p>{item.capacity}</p>
                  <p>{item.price}</p>
                </div>
              );
            })}
          </div>
          <div className="mr-5 py-10 w-full px-10 bg-white">
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
        </section>
      </Modal>
    </div>
  );
};

export default ReceiptModal;
