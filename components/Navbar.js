import React from "react";
import dlogo from "../images/dlogo.png";
function Navbar() {
  return (
    <div className="h-[10vh] flex items-center justify-between p-5">
      <div>
        <img src={dlogo.src} alt="" className="w-32" />
      </div>
      <div>
        <span className="btn bg-blue-900 text-white border-none px-5">
          Connect
        </span>
      </div>
    </div>
  );
}

export default Navbar;
