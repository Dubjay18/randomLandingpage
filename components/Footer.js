import React from "react";

function Footer() {
  return (
    <div className="mt-28 py-1 bg-blue-500 opacity-60 overflow-y-hidden overflow-x-hidden">
      <div className="flex items-center justify-center  font-poppins text-gray-900 opacity-100">
        Built by{" "}
        <a
          className="link ml-3 text-blue-900 font-bold"
          href="https://Jayfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev-jay🚀
        </a>
      </div>
    </div>
  );
}

export default Footer;
