/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import ImageProfile from "../../public/perfil.svg";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export function Hero() {
  return (
    <div className="px-2  pb-4 items-center">
      <div className="flex align-center sm:flex flex-col md:flex-row lg:flex-row">
        <div className="relative bg-gradient-to-t from-cyan-500 to-white overflow-hidden rounded-full w-80 h-80 mt-2 mx-auto lg:h-120 lg:w-120">
          <Image src={ImageProfile} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col align-left justify-center">
          <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 px-4 py-2 rounded-md md:text-6xl">
            Guilherme Cardoso
          </h2>
          <h3 className="text-center font-bold text-2xl mb-6 py-2 dark:text-gray-100">
            Front-End Developer
          </h3>
        </div>
      </div>
      <div className="items-center p-4">
        <p className="text-justify text-md py-1 leading-2 mx-auto text-gray-800 md:text-lg px-4 lg:text-lg lg:px-20 dark:text-gray-200">
          &nbsp; Hey! You can call me Gui. After 10 years in the same job I
          decided to find a new path and the Development area caught me. Since
          then, it is been more than a year since I started studying, and
          Front-End got me. <br />
          &nbsp;I studied with several different paths and courses with
          Rocketseat and CursoEmVideo, Iam always participating in events like
          NLW and DevWeek by Alura and the amazing YouTube.
          <br />
          &nbsp;Now I am looking for an opportunity to enter the market, to grow
          as a professional and as a person. Find a company or project that will
          make me evolve completely. My current focus in studies is being
          Javascript and ReactJS and React Native.
        </p>
      </div>
      <div>
        <ul className="text-4xl flex justify-center gap-10 py-3 text-cyan-500 sm:py-2 lg:text-5xl">
          <li>
            <a
              href="https://www.instagram.com/guicardoso93/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a
              href="mailto:guilherme_cardosogui@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5522999047309&text=Oi%20Esta%20falando%20com%20o%20Guilherme!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineWhatsApp />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/guilherme-cardoso-35710b103/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/guilhermecardoso93"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/cardoso_gui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
