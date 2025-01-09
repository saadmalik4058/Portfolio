import React from "react";
import Portfolio from "../assets/Portfoliopic.jpeg";
// import SaadCV from "../../public/SaadLatif-Cv.pdf";
import saadCv from "../assets/SaadLatif-Cv.pdf";

const Hero = () => {
  const handleDownload = () => {
    window.open(saadCv, "_blank");
  };

  return (
    <div className="bg-black text-white text-center py-16">
      <img
        className="mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 "
        src={Portfolio}
        alt=""
      />
      <h1 className="text-4xl font-bold">
        Hey I am{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">
          Saad Malik
        </span>
        , Front-End Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 ">
        Building clean, responsive websites that look great on any device
      </p>
      <div className="mt-8 space-x-4 ">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-md ">
          Contact With Me
        </button>
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-red-500 to-purple-500 text-white hidden md:inline  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-md "
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
