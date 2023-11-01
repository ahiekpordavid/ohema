import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-gray-50">
      <div className="container mx-auto py-8">
        <div className="border-b border-gray-700 pb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" flex items-center mb-6 md:mb-0">
              <i className="fas fa-map-marker-alt text-orange-500 text-3xl"></i>
              <div className="cta-text ">
                <h4 className="text-lg font-semibold">Find us</h4>
                <span>Kwashieman Traffic Light</span>
              </div>
            </div>
            <div className=" flex items-center mb-6 md:mb-0">
              <i className="fas fa-phone text-orange-500 text-3xl"></i>
              <div className="cta-text ">
                <h4 className="text-lg font-semibold">Call us</h4>
                <span>+233 20 0000 000</span>
              </div>
            </div>
            <div className=" flex items-center">
              <i className="far fa-envelope-open text-orange-500 text-3xl"></i>
              <div className="cta-text ">
                <h4 className="text-lg font-semibold">Mail us</h4>
                <span>mail@info.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="footer-social-icon mb-6">
                <span className="text-lg font-semibold block mb-2">
                  Follow us
                </span>
                <p
                  className="text-3xl text-white mr-4 bg-blue-800 rounded-full p-2"
                >
                </p>
                <p
                  className="text-3xl text-white mr-4 bg-blue-400 rounded-full p-2"
                >
                  <i className="fab fa-twitter"></i>
                </p>
                <p
                  className="text-3xl text-white bg-red-600 rounded-full p-2"
                >
                  <i className="fab fa-google-plus-g"></i>
                </p>
              </div>
            </div>
            <div className="footer-widget">
              <div className="footer-widget-heading mb-6">
                <h3 className="text-xl font-semibold">Useful Links</h3>
              </div>
              <Link to={'./'}>Home</Link>
            </div>
            <div className="footer-widget">
              <div className="footer-widget-heading mb-6">
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
          <p className="text-sm">Copyright &copy; 2018, All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
