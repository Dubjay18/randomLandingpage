import Image from "next/image";
import React from "react";
import spinner from "../images/loader.gif";
function Loader() {
  return (
    <div className="h-screen w-full flex justify-center items-center relative bg-gray-900">
      <img src={spinner.src} className="object-contain h-11 w-11" />
    </div>
  );
}

export default Loader;
