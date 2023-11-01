import React from "react";
import Appliance from "../data/appliance.png";

const Hero = () => {
  return (
    <div className="m-[5px] bg-blue-600 h-[800px]">
      <div className="m-[5px] bg-white  h-[795px]">
        <div className="m-[5px] bg-blue-300 h-[790px] p-10 flex items-center">
          <div className="" style={{flex:'1'}}>
            <h1 className="text-4xl font-semibold text-white">Something</h1>
            <h1 className="text-7xl font-thin text-white my-5">Something</h1>
            <h1 className="text-9xl font-extrabold text-white">Something</h1>
          </div>
          <div style={{flex:'1'}} >
            <img
              src={Appliance}
              alt="hero"
              className="w-full float-right "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
