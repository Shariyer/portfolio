/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import shariyerImg from "../../../images/shariyerbg.png";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const MainContent = () => {
  return (
    <div>
      <div
        data-theme="night"
        className="card lg:card-side bg-base-100 shadow-xl my-10"
      >
        <figure>
          <img className="w-10/12" src={shariyerImg} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2 md:w-1/2 w-full">
          <h1 className="text-4xl font-extrabold ">
            <span className="text-orange-400">S.M. Shariyer</span>{" "}
            <span className="text-white">HERE!!</span>
          </h1>
          <p className="text-xl text-white font-semibold ">
            Full Stack Web Developer. <br />
          </p>
          <p className="w-full text-justify">
            I am a full time web Developer who likes to develop both frontend
            and backend side of website. I have expertise in Reactjs,
            JavaScript, Nodejs, ExpressJs , MongoDB, Tailwind CSS , HTML-5 ,
            CSS-3 , Bootstrap. The most important thing about me is , I love to
            explore and learn . I always to put the best use of my mistakes so
            that I can push through all the way to learn something new.
          </p>

          <div className="text-white text-3xl">
            <p>Find ME ON-</p>
            <div className="flex justify-evenly my-4">
              <NavLink className="text-6xl text-blue-600 hover:bg-pink-600 p-5 hover:rounded-full">
                <FaLinkedin />
              </NavLink>
              <NavLink className="text-6xl text-white hover:bg-pink-600 p-5 hover:rounded-full">
                <FaGithub />
              </NavLink>
              <NavLink className="text-6xl text-blue-700 hover:bg-pink-600 p-5 hover:rounded-full">
                <FaFacebook />
              </NavLink>
              <NavLink className="text-6xl text-green-700 hover:bg-pink-600 p-5 hover:rounded-full">
                <FaWhatsapp />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div data-theme="night" className="bg-base-300 rounded-3xl  ">
        <h1 className="my-5 text-4xl font-bold text-white ml-2 py-5">
          My Projects{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-10 md:gap-5 lg:gap-5 w-11/12 mx-auto bg-base-300 py-5">
          <div className="card w-90 glass ">
            <figure>
              <img
                className="mt-10 rounded-2xl"
                src="https://placeimg.com/400/225/arch"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">Cars Lobby</h2>
              <p className="text-white">A second hand Car selling website</p>
              <div className="flex justify-evenly">
                <Link className="btn btn-primary font-bold">Live </Link>
                <Link className="btn btn-primary font-bold">Client </Link>
                <Link className="btn btn-primary font-bold">Server </Link>
              </div>
            </div>
          </div>
          <div className="card w-90 glass">
            <figure>
              <img
                className="mt-10 rounded-2xl"
                src="https://placeimg.com/400/225/arch"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">Cars Lobby</h2>
              <p className="text-white">A second hand Car selling website</p>
              <div className="flex justify-evenly">
                <Link className="btn btn-primary font-bold">Live </Link>
                <Link className="btn btn-primary font-bold">Client </Link>
                <Link className="btn btn-primary font-bold">Server </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-theme="night" className="rounded-3xl">
        {/* <h3 className="my-5 text-4xl font-bold text-white ml-2 py-5">
          Contact:
        </h3> */}
        <div data-theme="night">
          <form className="flex flex-col justify-center items-center glass w-96 mx-auto py-5 rounded-3xl ">
            <h3 className="my-5 text-white font-bold text-xl ">
              Drop Your Contact
            </h3>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-error w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-error w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-error w-full max-w-xs"
            />
            <input className="input mt-3" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
