import React from "react";
import Appliance from "../data/appliance.png";
import './Styles.css'

const Hero = () => {
  return (
    <div className="m-[5px] bg-blue-600 h-[800px]">
      <div className="m-[5px] bg-white  h-[795px]">
        <div className="m-[5px] bg-blue-600 magicpattern h-[790px] p-10 flex">
          <div className="ml-[60px] mt-[60px]" style={{flex:'1'}}>
            <img src="https://citinewsroom.com/wp-content/uploads/2022/11/NEW-MINES-LOGOG.jpeg" alt="logo" className="w-[200px] mb-5"/>
            <h1 className="text-2xl font-semibold text-white ">Akwaaba! Ghana Mine,</h1>
            <h1 className="text-6xl font-extralight text-white my-5">welcome</h1>
            <h1 className="text-8xl font-thin text-white ">What do you want to buy today!!</h1>
          </div>
          <div  className=' items-center' style={{flex:'1'}} >
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
