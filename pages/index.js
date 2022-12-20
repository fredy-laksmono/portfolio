import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Inter } from "@next/font/google";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillMail
} from "react-icons/ai";
import Image from "next/image";
import tictactoe from "../public/FireIceTicTacToe.png";
import bootcampBuddy from "../public/bootcamp-buddy-logo.png";
import battleship from "../public/BattleshipChaos.jpg";
import flPic from "../public/FL-profile-2022.png";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title className=" dark:text-white">Fredy Laksmono Portfolio</title>
        <meta name="description" content="Fredy Laksmono Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800 dark:text-white">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-titleFont">DEVELOPEDBYFL</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1GuplIPZNudu73d9QWLsqCbdSUyUMBxV_/view?usp=share_link"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-200">
              Fredy Laksmono
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Software Developer with a decade of experience as consultant in
              Identity Management and Enterprise Resource Planning. I have a
              passion for learning new technologies and building applications
              that solve real world problems.
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a
              href="https://www.linkedin.com/in/fredy-laksmono/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/fredy-laksmono"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="mailto:fredy.laksmono@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillMail />
            </a>
          </div>
          <div className="relative mx-auto w-52 mt-20">
            <Image className=" rounded-full " src={flPic} />
          </div>
        </section>
        <section className=" mt-4">
          <div>
            <h3 className="text-3xl py-1 mb-5"> Skills </h3>
            <p className="text-md leading-8 text-gray-800 dark:text-white">
              Programming Language: JavaScript, HTML/CSS, C#, PowerShell,
              Python3
            </p>
            <p className="text-md leading-8 text-gray-800 dark:text-white">
              Frameworks and Libraries: React, Express, Mongoose, Sequelize,
              Vue.js, Socket.io, framer-motion, Next.js, Tailwind-CSS
            </p>
            <p className="text-md leading-8 text-gray-800 dark:text-white">
              Database: SQL, MongoDB/Atlas, PostgresSQL
            </p>
            <p className="text-md leading-8 text-gray-800 dark:text-white">
              Tools/Environment: NodeJS, NPM, Git, GitHub, Visual Studio Code
            </p>
            <p className="text-md leading-8 text-gray-800 dark:text-white">
              Office tools: Microsoft Word/Excel/PowerPoint/Visio, Windows, Mac
            </p>
          </div>
        </section>
        <section className=" mt-4">
          <div>
            <h3 className="text-3xl py-1"> Portfolio </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              These projects are from Software Engineer Immersive course that I
              took on Sept-Dec 2022. All of these projects have met the MVP
              requirement and some of the bonus part from the course. (Last
              update: 12/20/2022)
            </p>
          </div>
          <div className="lg:grid grid-cols-3 gap-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 ">
              <a
                href="https://s3.us-west-1.amazonaws.com/tour.enistoria.com/u1_hw_tic_tac_toe/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className=" mx-auto  "
                  src={tictactoe}
                  width={200}
                  height={200}
                />
              </a>
              <h3 className=" text-lg font-medium pt-8 pb-2 ">
                Fire & Ice Tic Tac Toe
              </h3>
              <p className=" py-2">
                {" "}
                Tic Tac Toe Game with Fire and Ice Theme. There is single player
                with basic ai and multiplayer option.{" "}
              </p>
              <h4 className=" py-4 text-teal-600 dark:text-teal-200">
                Technology used:
              </h4>
              <p className=" text-teal-800 py-1 dark:text-teal-300 ">HTML</p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">CSS</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 ">
              <a
                href="https://bootcamp-buddy-fl.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className=" mx-auto"
                  src={bootcampBuddy}
                  width={200}
                  height={200}
                />
              </a>
              <h3 className=" text-lg font-medium pt-8 pb-2 ">
                Bootcamp Buddy
              </h3>
              <p className=" py-2">
                {" "}
                A review site for Bootcamp. This project is a team project
                collaborate with other software engineer which we never work
                together before.{" "}
              </p>
              <h4 className=" py-4 text-teal-600 dark:text-teal-200">
                Technology used:
              </h4>
              <p className=" text-teal-800 py-1 dark:text-teal-300">HTML</p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">CSS</p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">
                PostgreSQL
              </p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">
                Sequelize
              </p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">Express</p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">React</p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">Node js</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 ">
              <a
                href="https://battleship-chaos.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className=" mx-auto rounded-full"
                  src={battleship}
                  width={200}
                  height={200}
                />
              </a>
              <h3 className=" text-lg font-medium pt-8 pb-2 ">
                Battleship Chaos
              </h3>
              <p className=" py-2">
                {" "}
                This is a capstone project where building a full stack app with
                CRUD operation on both backend and frontend as the MVP
                requirement. The game aspect is part of post MVP which currently
                under development.{" "}
              </p>
              <p className=" py-2">
                {" "}
                A battleship game with a twist. Multiplayer game built using
                socket.io. All the players sharing the same board and they all
                attack at the same turn.{" "}
              </p>
              <h4 className=" py-4 text-teal-600 dark:text-teal-200">
                Technology used:
              </h4>
              <p className=" text-teal-800 py-1 dark:text-teal-300">HTML</p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">CSS</p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">
                PostgreSQL
              </p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">
                Sequelize
              </p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">Express</p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">React</p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">Node js</p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">
                Socket.io
              </p>
              <p className=" text-teal-800 py-1 dark:text-teal-300">
                Framer-motion
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3></h3>
          </div>
        </section>
      </main>
    </div>
  );
}
