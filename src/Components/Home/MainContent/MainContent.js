/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import shariyerImg from "../../../images/shariyerbg.png";
import carsLobby from "../../../projectPicture/carsLobby.png";
import solid from "../../../projectPicture/solid.png";
import Quizer from "../../../projectPicture/Quizer'sPro.png";
import photography from "../../../projectPicture/smsPotography.png";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const MainContent = () => {
  return (
    <div data-theme="coffee">
      <div
        data-theme="coffee"
        className="card lg:card-side bg-base-100 shadow-xl "
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
          <p className="w-full text-white text-justify">
            I am a full time web Developer who likes to develop both frontend
            and backend side of website. I have expertise in Reactjs,
            JavaScript, Nodejs, ExpressJs , MongoDB, Tailwind CSS , HTML-5 ,
            CSS-3 , Bootstrap. The most important thing about me is , I love to
            explore and learn . I always to put the best use of my mistakes so
            that I can push through all the way to learn something new.
          </p>

          <div className="text-white glass rounded-l-2xl">
            <p
              data-theme="coffee"
              className="text-2xl font-bold  ml-24 mt-5 pl-2 py-4 glass "
            >
              Find Me
            </p>
            <div className="flex  my-4 ">
              <NavLink className="text-4xl text-blue-600 hover:bg-pink-600 p-5 hover:rounded-full">
                <FaLinkedin />
              </NavLink>
              <NavLink className="text-4xl text-white hover:bg-pink-600 p-5 hover:rounded-full">
                <FaGithub />
              </NavLink>
              <NavLink className="text-4xl text-blue-700 hover:bg-pink-600 p-5 hover:rounded-full">
                <FaFacebook />
              </NavLink>
              <NavLink className="text-4xl text-green-700 hover:bg-pink-600 p-5 hover:rounded-full">
                <FaWhatsapp />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div data-theme="coffee" className="bg-base-300 rounded-3xl  ">
        <h1 className="my-5 text-4xl font-bold text-white pl-10 py-5 glass rounded-3xl">
          My Projects{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-10 md:gap-5 lg:gap-5 w-11/12 mx-auto bg-base-300 py-5">
          <div className="card w-90 glass ">
            <figure>
              <img className="mt-10 rounded-2xl" src={carsLobby} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">Cars Lobby</h2>
              <p className="text-white">A second hand Car selling website</p>
              <div className="flex justify-evenly">
                <a
                  href="https://cars-lobby.web.app"
                  className="btn btn-primary font-bold"
                >
                  Live{" "}
                </a>
                <a
                  href="https://github.com/Shariyer/Cars-Lobby-client"
                  className="btn btn-primary font-bold"
                >
                  Client{" "}
                </a>
                <a
                  href="https://github.com/Shariyer/-Cars-Lobby-server"
                  className="btn btn-primary font-bold"
                >
                  Server{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="card w-90 glass">
            <figure>
              <img className="mt-10 rounded-2xl" src={photography} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">
                SM's Photography
              </h2>
              <p className="text-white">A personal Service website</p>
              <div className="flex justify-evenly">
                <a
                  href="https://sm-s-snap.web.app"
                  className="btn btn-primary font-bold"
                >
                  Live{" "}
                </a>
                <a
                  href="https://github.com/Shariyer/sm-s-photography-client"
                  className="btn btn-primary font-bold"
                >
                  Client{" "}
                </a>
                <a
                  href="https://github.com/Shariyer/sm-s-photography-server"
                  className="btn btn-primary font-bold"
                >
                  Server{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="card w-90 glass">
            <figure>
              <img className="mt-10 rounded-2xl" src={solid} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">Solid Basic</h2>
              <p className="text-white">A Course based website.</p>
              <div className="flex justify-evenly">
                <a
                  href="https://solid-basic.web.app/"
                  className="btn btn-primary font-bold"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Shariyer/solid-basic-client"
                  className="btn btn-primary font-bold"
                >
                  Client
                </a>
                <a
                  href="https://github.com/Shariyer/solid-basic-server"
                  className="btn btn-primary font-bold"
                >
                  Server{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="card w-90 glass">
            <figure>
              <img className="mt-10 rounded-2xl" src={Quizer} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">Quizer's Pro</h2>
              <p className="text-white">A Quiz based website.</p>
              <div className="flex justify-evenly">
                <a
                  href="https://b6-quiz-crackerz-shariyer.netlify.app/"
                  className="btn btn-primary font-bold"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Shariyer/Quizer-s-Pro"
                  className="btn btn-primary font-bold"
                >
                  Git Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-theme="coffee" className="glass mt-5 rounded-3xl mb-5">
        <div className="relative">
          <h3 className="p-10 text-black font-bold text-3xl">
            DownLoad My Resume
          </h3>
          <button className="btn btn-outline btn-primary font-extrabold absolute bottom-2 right-10">
            DownLoad
          </button>
        </div>
      </div>
      <div data-theme="coffee" className="rounded-3xl">
        {/* <h3 className="my-5 text-4xl font-bold text-white ml-2 py-5">
          Contact:
        </h3> */}
        <div data-theme="coffee">
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
