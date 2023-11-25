import React, { useEffect, useState } from "react";
import Cv from "../assets/img/Cv.pdf";
import { motion } from "../../node_modules/framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import CustomizeButton from "../Head&Footer/CustomizeButton";
import PolarAreaChart from "../components/Chart";
import Atropos from "atropos/react";
import profile from "../assets/img/profile.jpg";
import figma from "../assets/img/attachments/figma.svg";
import github from "../assets/img/attachments/github.svg";
import tailwind from "../assets/img/attachments/tailwind.svg";
import reactLogo from "../assets/img/attachments/reactLogo.svg";

const Home = ({ scrollToSection, setActiveSection }) => {
  const [count, setCount] = useState(false);

  // for text animation
  const textGroups = [
    "I'm trying to Full-Stack Developer",
    "Other frame-work for Front-end",
    "React , RTK , Tailwind , Bootstrap ",
    "NodeJs , MongoDB , knowlage of PHP",
  ];

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroupIndex((prevIndex) =>
        prevIndex === textGroups.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Delay between iterations in milliseconds

    return () => clearInterval(interval);
  }, [textGroups.length]);
  return (
    <>
      <div className="flex sm:flex-row items-center flex-col ">
        {/* left side  */}
        <div className="sm:w-8/12 sm:p-20 p-4 flex flex-col gap-5 sm:gap-16">
          {/* intro */}
          <div className=" flex flex-col gap-2">
            <h2 className="sm:text-4xl text-xl font-bold">
              Hi, I'm Thant Zin Min!
            </h2>
            <h1 className="sm:text-6xl text-2xl font-semibold">
              Web Developer
            </h1>
            <p className="sm:text-[25px] text-[15px]">
              I'm react based front end webveloper with
              <span className="main-text-color font-bold">
                {" "}
                over 1 year{" "}
              </span>{" "}
              of experince
            </p>
          </div>
          {/* button count up and chart  */}
          <Atropos
            activeOffset={40}
            shadow={true}
            shadowScale={1.05}
            rotate={true}
          >
            <div
              data-atropos-offset="3"
              className="flex gap-10 flex-col justify-center items-center  p-5 rounded-md"
            >
              {/* count up and chart  */}
              <div
                data-atropos-offset="3"
                className="flex w-full sm:flex-row flex-col justify-around"
              >
                <PolarAreaChart />
                {/* the count up  */}
                <ScrollTrigger
                  onEnter={() => setCount(true)}
                  onExit={() => setCount(false)}
                >
                  <div className="flex flex-col font-bold gap-5 rounded-md h-full bg-red-600 text-white justify-around px-5">
                    <div className=" w-full flex flex-col justify-center items-center text-sm p-1">
                      <h1 className="sm:text-lg text-xl">
                        {count && (
                          <CountUp start={0} end={1} duration={5} delay={0.5} />
                        )}
                        +
                      </h1>
                      <h2>YEARS OF EXPERINCES</h2>
                    </div>
                    <div className=" w-full flex flex-col justify-center items-center text-sm p-1">
                      <h1 className="sm:text-lg text-xl">
                        {count && (
                          <CountUp
                            start={0}
                            end={10}
                            duration={5}
                            delay={0.5}
                          />
                        )}
                        +
                      </h1>
                      <h2>PROJECT COMPLETED</h2>
                    </div>
                    <div className=" w-full flex flex-col justify-center items-center text-sm p-1">
                      <h1 className="sm:text-lg text-xl">
                        {count && (
                          <CountUp
                            start={0}
                            end={100}
                            duration={5}
                            delay={0.5}
                          />
                        )}
                        +
                      </h1>
                      <h2>HAPPY USERS</h2>
                    </div>
                  </div>
                </ScrollTrigger>
              </div>
              {/* button */}
              <div
                data-atropos-offset="3"
                className="flex gap-5 flex-col sm:flex-row justify-around items-center"
              >
                <a href={Cv} download="ThantZinMin_Cv">
                  <CustomizeButton> Download CV</CustomizeButton>
                </a>
                <div
                  onClick={() => {
                    scrollToSection("connect"), setActiveSection("connect");
                  }}
                >
                  <CustomizeButton>Hire Me</CustomizeButton>
                </div>
              </div>
            </div>
          </Atropos>
        </div>

        {/* right side  */}
        <div className="sm:w-4/12">
          {/* for desktop  */}
          <div className="sm:flex flex-col items-center  gap-10 hidden">
            {/* profile  */}
            <Atropos
              activeOffset={40}
              shadow={true}
              shadowScale={1.05}
              rotate={true}
            >
              <div
                data-atropos-offset="3"
                className="flex justify-center items-center w-11/12 relative"
              >
                <img
                  data-atropos-offset="3"
                  src={profile}
                  alt=""
                  className=" object-center object-cover rounded-md w-full h-[500px] shadow-lg"
                />
                <img
                  data-atropos-offset="3"
                  src={figma}
                  className="absolute -right-6 top-3 lg:right-0 xl:-top-10 xl:right-10 w-16 h-16 shadow-xl"
                />
                <img
                  data-atropos-offset="3"
                  src={tailwind}
                  className="absolute bottom-0 -right-5 w-16 h-16  lg:-bottom-3  lg:right-0 xl:bottom-8 xl:-right-5 lg:w-20 lg:h-20 shadow-xl"
                />
                <img
                  data-atropos-offset="3"
                  src={reactLogo}
                  className="absolute w-16 h-16 top-4 -left-5 xl:top-10 xl:-left-10 lg:w-20 lg:h-20 shadow-xl"
                />
                <img
                  data-atropos-offset="3"
                  src={github}
                  className="absolute -left-6 -bottom-3 lg:bottom-6 lg:left-0 xl:-bottom-5 xl:left-6 w-16 h-16  shadow-xl"
                />
              </div>
            </Atropos>

            {/* stack for desktop  */}
            <div className="sm:flex gap-5 hidden px-10">
              <div className=" rounded-lg h-[250px] bg-white/60 backdrop-blur-md w-3 border-opacity-20 border border-orange-500 relative overflow-hidden ">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 250 }}
                  className="bg-red-600 sm:h-[250px] h-[100px] w-[100%]"
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                ></motion.div>
              </div>
              <div className=" main-text-color text-sm sm:text-lg font-bold ">
                {textGroups.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={
                      index === currentGroupIndex
                        ? { opacity: 1 }
                        : { opacity: 0, y: "-20px" }
                    }
                    exit={{ opacity: 0, y: "-20px" }}
                    transition={{ duration: 0.2 }}
                  >
                    <p>{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* for phone  */}
          <div className="flex flex-col items-start gap-5 sm:hidden px-5">
            {/* profile  */}
            <Atropos
              activeOffset={40}
              shadow={true}
              shadowScale={1.05}
              rotate={true}
            >
              <div
                data-atropos-offset="3"
                className="flex justify-center items-center w-full relative"
              >
                <img
                  data-atropos-offset="3"
                  src={profile}
                  alt=""
                  className=" object-center object-cover rounded-md w-full h-[500px] shadow-lg"
                />
                <img
                  data-atropos-offset="3"
                  src={figma}
                  className="absolute -right-6 top-3 lg:right-0 xl:-top-10 xl:right-10 w-16 h-16 shadow-xl"
                />
                <img
                  data-atropos-offset="3"
                  src={tailwind}
                  className="absolute bottom-0 -right-5 w-16 h-16  lg:-bottom-3  lg:right-0 xl:bottom-8 xl:-right-5 lg:w-20 lg:h-20 shadow-xl"
                />
                <img
                  data-atropos-offset="3"
                  src={reactLogo}
                  className="absolute w-16 h-16 top-4 -left-5 xl:top-10 xl:-left-10 lg:w-20 lg:h-20 shadow-xl"
                />
                <img
                  data-atropos-offset="3"
                  src={github}
                  className="absolute -left-6 -bottom-3 lg:bottom-6 lg:left-0 xl:-bottom-5 xl:left-6 w-16 h-16  shadow-xl"
                />
              </div>
            </Atropos>
            <div className="flex gap-5">
              <div className="h-[105px] rounded-lg  sm:h-[250px] w-2 border-opacity-20 border border-white relative  overflow-hidden">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 105 }}
                  className="bg-white sm:h-[250px] h-[100px] w-[100%]"
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                ></motion.div>
              </div>
              <div className=" text-white text-[10px] font-bold ">
                {textGroups.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={
                      index === currentGroupIndex
                        ? { opacity: 1 }
                        : { opacity: 0, y: "-20px" }
                    }
                    exit={{ opacity: 0, y: "-20px" }}
                    transition={{ duration: 0.2 }}
                  >
                    <p>{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
