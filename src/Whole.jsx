import React, { useState, useEffect } from "react";
import Footer from "./Head&Footer/Footer";
import About from "./Home/About";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import Testimonial from "./Home/Testimonial";
import Contact from "./Home/Contact";
import SlideMenu from "./Head&Footer/SlideMenu";
import { IoIosArrowDown, IoIosArrowUp } from "../node_modules/react-icons/io";

const Whole = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 0 && scrollY < window.innerHeight) {
      } else if (
        scrollY >= window.innerHeight &&
        scrollY < window.innerHeight * 2
      ) {
      } else if (
        scrollY >= window.innerHeight * 2 &&
        scrollY < window.innerHeight * 3
      ) {
      } else if (
        scrollY >= window.innerHeight * 3 &&
        scrollY < window.innerHeight * 4
      ) {
      } else if (scrollY >= window.innerHeight * 4) {
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // for mobile menu
  const [show, setShow] = useState(true);
  return (
    <>
      {/* for mobile menu  */}
      <div
        className={`flex flex-col sm:flex-row gap-2 fixed ${
          show
            ? "translate-y-[610px] sm:translate-y-[50px] sm:translate-x-[550px]"
            : "translate-y-[440px] sm:translate-y-[50px] sm:translate-x-[0px]"
        } z-50 right-5 items-center trnasition duration-300`}
      >
        <div
          className={`w-7 h-7 bg-red-600 ${
            show ? " mr-0 sm:mr-32 mb-32 sm:mb-0" : "sm:mr-0 mb-0"
          }    flex text-white items-center justify-center rounded-md`}
        >
          <IoIosArrowUp
            onClick={() => setShow(!show)}
            className={`${
              show ? " sm:-rotate-90" : "sm:rotate-90 rotate-180 "
            } text-lg transition duration-300  w-11  rounded-md`}
          />
        </div>
        <div
          onClick={() => {
            setShow(!show), scrollToSection("home"), setActiveSection("home");
          }}
          className={`${
            show ? "hidden" : ""
          } active font-bold py-2 rounded-lg flex justify-center w-20 text-[8px] text-white transition duration-300`}
        >
          Home
        </div>
        <div
          onClick={() => {
            setShow(!show),
              scrollToSection("experience"),
              setActiveSection("experience");
          }}
          className={`${
            show ? "hidden" : ""
          } active font-bold py-2 rounded-lg flex justify-center w-20 text-[8px] text-white transition duration-300`}
        >
          About
        </div>
        <div
          onClick={() => {
            setShow(!show),
              scrollToSection("projects"),
              setActiveSection("projects");
          }}
          className={`${
            show ? "hidden" : ""
          } active font-bold py-2 rounded-lg flex justify-center w-20 text-[8px] text-white transition duration-300`}
        >
          Projects
        </div>
        <div
          onClick={() => {
            setShow(!show),
              scrollToSection("knowlage"),
              setActiveSection("knowlage");
          }}
          className={`${
            show ? "hidden" : ""
          } active font-bold py-2 rounded-lg flex justify-center w-20 text-[8px] text-white transition duration-300`}
        >
          Knowledge
        </div>
        <div
          onClick={() => {
            setShow(!show),
              scrollToSection("connect"),
              setActiveSection("connect");
          }}
          className={`${
            show ? "hidden" : ""
          } active font-bold py-2 rounded-lg flex justify-center w-20 text-[8px] text-white transition duration-300`}
        >
          Contact
        </div>
      </div>

      {/* inner data  */}
      <div className="sm:w-full h-[100vh] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red-600">
        <div className="" id="home">
          <Home
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
          />
        </div>
        <div id="experience">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="knowlage">
          <Testimonial />
        </div>
        <div id="connect">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Whole;
