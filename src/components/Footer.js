import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter,BsInstagram,BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-gray-500 text-gray-50">
      <div className="container mx-auto py-8">
        <div className="border-b border-gray-700 pb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" flex items-center mb-6 md:mb-0">
              <div className="text-white mr-3 text-5xl">
                <IoLocationOutline/>
              </div>
              <div className="cta-text ">
                <h4 className="text-lg font-semibold">Find us</h4>
                <span>Kwashieman Christ Mission Junction</span>
              </div>
            </div>
            <div className=" flex items-center mb-6 md:mb-0">
              <div className="fas fa-phone text-white mr-3 text-5xl">
             < BsTelephone/>
              </div>
              <div className="cta-text ">
                <h4 className="text-lg font-semibold">Call us</h4>
                <span>+233204573500 / +233249755457</span>
              </div>
            </div>
            <div className=" flex items-center">
            <div className="fas fa-phone text-white mr-3 text-5xl">
             < MdOutlineMailOutline/>
              </div>
              <div className="cta-text ">
                <h4 className="text-lg font-semibold">Mail us</h4>
                <span>imperialdankaygroup@gmail.com </span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="footer-social-icon mb-4 flex">
              <span className="text-lg font-semibold block mb-2 mr-4">
                Follow us
              </span>
              <p className="text-3xl text-white h-fit mr-4 bg-blue-400 rounded-full p-2">
                <BsTwitter/>
              </p>
              <p className="text-3xl text-white h-fit bg-red-600 rounded-full p-2">
                <BsInstagram />
              </p>
            </div>

            <div className="footer-widget">
              <div className="footer-widget-heading mb-4">
                <h3 className="text-xl font-semibold">Useful Links</h3>
              </div>
              <Link to={"./"}>Home</Link>
            </div>
            <div className="footer-widget">
              <div className="footer-widget-heading mb-4">
                <h3 className="text-xl font-semibold">About Us</h3>
              </div>
              <div className="footer-text mb-6">
                <p className="mb-3">All Appliances</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-700 py-6">
        <div className="text-center ">
          <p className="text-sm">Copyright &copy; 2023, All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
