import React from "react";
import fund from "../images/undra.svg";
function Hero() {
  return (
    <div className="h-[70vh] p-5 flex lg:flex-row flex-col-reverse items-center mx-28">
      <div className="flex items-center justify-center lg:mt-0 mt-7">
        <div className="relative z-40">
          <div className="w-40 h-40 absolute rounded-full bg-primary opacity-30 -z-[1] animate-pulse animate-bounce"></div>

          <div className="w-40 h-40 absolute rounded-full bg-primary opacity-30 -z-[1] left-96 top-40 animate-spin"></div>

          <p>
            <span className="lg:text-5xl md:text-4xl text-2xl font-poppins font-bold w-full z-40">
              Decentralized Fund Me,
            </span>
            <br />
            <br />
            <br />
            <span className="my-4 md:text-2xl text-gray-400 z-40">
              A new way for requestion{" "}
              <span className="text-primary">funding</span> from friends and the
              public
            </span>
          </p>
          <p className="md:text-2xl text-gray-400">
            To get started click the button below
          </p>
          <div className="btn md:btn-lg btn-primary px-20 mt-10">Connect</div>
          <p className="text-gray-500">we rise by lifting others🚀</p>
        </div>
      </div>

      <div className="  z-40 flex items-center justify-center relative md:mb-0 mb-20">
        <div className=" animate-pulse animate-bounce w-40 h-40 absolute rounded-full bg-primary opacity-30 -z-[1] right-32 "></div>
        <img src={fund.src} alt="" height={"100%"} width={"80%"} />
      </div>
    </div>
  );
}

export default Hero;
