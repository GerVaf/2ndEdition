import React from "react";
import { ProjectsDisplay } from "../assets/ProjectData";
import { AiFillGithub } from "../../node_modules/react-icons/ai";
import { BiLink } from "../../node_modules/react-icons/bi";
const Projects = () => {
  return (
    <>
      <div className="p-5 ">
        <h2 className="sm:text-4xl text-2xl sm:mb-2 main-text-color font-bold ">
          -Projects
        </h2>
        <p className="sm:text-2xl text-lg sm:ml-10 ml-5">
          Recent Complete Projects
        </p>
      </div>
      <div className="p-5 sm:justify-around sm:flex sm:flex-row sm:flex-wrap flex flex-col items-center gap-5 ">
        {ProjectsDisplay.map((pj) => {
          return (
            <div className="shadow-lg backdrop-blur-sm bg-white/10 sm:w-[70%] sm:h-[50vh] rounded-lg flex flex-col sm:flex-row">
              <div className=" sm:w-6/12 h-6/12 sm:h-[100%] sm:relative overflow-visible flex items-center">
                <img
                  className="sm:rounded-lg rounded-t-lg object-cover object-top sm:absolute w-[100%] z-40 sm:left-[-100px] "
                  src={pj.img}
                  alt="Album"
                />
              </div>
              {/* Detail for project  */}
              <div className=" sm:w-7/12 flex flex-col justify-around sm:gap-10 p-5">
                <h2 className="card-title font-bold sm:text-2xl text-white border-b-2 w-8/12 pb-2">
                  {pj.title}
                </h2>

                {/* include */}
                <div className=" flex flex-wrap justify-around h-[50%] overflow-visible gap-2 items-center  font-bold  text-white  mb-3">
                  {pj.language.map((lang) => {
                    return <p>{lang?.title}</p>;
                  })}
                </div>
                <hr className="block sm:hidden" />
                {/* link  */}
                <div className="flex mt-3 justify-around sm:text-3xl text-2xl ">
                  <a className="flex justify-center w-1/4 bg-gradient-to-r from-gray-200 to-gray-100  rounded-md text-gray-400 hover:from-[rgb(224,36,36)] hover:to-[rgb(193,36,36)] transition duration-200 hover:text-white p-2 ">
                    <AiFillGithub />
                  </a>
                  <a
                    href={pj.link}
                    className="flex justify-center w-1/4 bg-gradient-to-r from-gray-200 to-gray-100  rounded-md text-gray-400 hover:from-[rgb(224,36,36)] hover:to-[rgb(193,36,36)] transition duration-200 hover:text-white p-2  "
                  >
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
