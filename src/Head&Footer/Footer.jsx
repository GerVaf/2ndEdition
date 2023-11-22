import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "../../node_modules/react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="sm:justify-between pt-5 sm:pt-0 rounded-t-sm flex flex-col items-center gap-5 bg-slate-100">
        <div className="sm:text-2xl text-2xl flex gap-10">
          <a
            href="https://www.facebook.com/thantzin.min.9400984"
            className=" w-16 h-10 flex justify-center items-center rounded-full border border-slate-700 hover:border-[#FD940A] hover:text-[#FD940A] duration-500 text-slate-700 transition cursor-pointer"
          >
            <FaFacebook />
          </a>
          <a
            href=""
            className=" w-16 h-10 flex justify-center items-center rounded-full border border-slate-700 hover:border-[#FD940A] hover:text-[#FD940A] duration-500 text-slate-700 transition cursor-pointer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/GerVaf"
            className=" w-16 h-10 flex justify-center items-center rounded-full border border-slate-700 hover:border-[#FD940A] hover:text-[#FD940A] duration-500 text-slate-700 transition cursor-pointer"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <p className=" font-bold text-center main-text-color">
            Copyright © {new Date().getFullYear()} - All right reserved by
            ThantZinMin
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
