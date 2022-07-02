import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-5">
      <h2 className="backdrop-blur-md bg-transparent   shadow-lime-500  shadow-xl text-2xl  z-40 ">
        <span className="text-gray-400">dee</span>
        <span className="text-primary">FundMe</span>
      </h2>
      <div>
        <span className="btn btn-primary px-5">Connect</span>
      </div>
    </div>
  );
}

export default Navbar;
