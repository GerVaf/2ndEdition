import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "../../node_modules/react-icons/fa";
const Footer = () => {
  return (
    <>
      {/* <div className="sm:text-2xl  text-[16px] flex gap-10 ">
        <a
          href="https://www.facebook.com/thantzin.min.9400984"
          className=" w-12 h-7 flex justify-center items-center rounded-full border border-slate-700 hover:border-red-600 hover:text-red-600  duration-500 text-slate-700 transition cursor-pointer"
        >
          <FaFacebook />
        </a>
        <a
          href=""
          className=" w-12 h-7 flex justify-center items-center rounded-full border border-slate-700 hover:border-red-600 hover:text-red-600  duration-500 text-slate-700 transition cursor-pointer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/GerVaf"
          className=" w-12 h-7 flex justify-center items-center rounded-full border border-slate-700 hover:border-red-600 hover:text-red-600  duration-500 text-slate-700 transition cursor-pointer"
        >
          <FaGithub />
        </a>
      </div> */}
      <div className=" sm:justify-center h-[5vh] sm:pt-0 rounded-t-sm flex flex-col sm:flex-row items-center gap-5 bg-slate-200">
        <div>
          <p className="sm:text-[15px] text-[10px] font-bold text-center main-text-color ">
            Copyright © {new Date().getFullYear()} - All right reserved by
            ThantZinMin
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
