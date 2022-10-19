/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import ImageProfile from "../../public/perfil.svg"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai"

export function Hero() {
  return (
    <div className="px-2 py-10 pb-4 items-center" id="home">
      <div className="flex align-center py-10 sm:flex flex-col md:flex-row lg:flex-row">
        <div className="relative bg-gradient-to-t from-cyan-500 to-white overflow-hidden rounded-full mt-2 mx-auto lg:h-120 lg:w-120">
          <Image
            src={ImageProfile}
            width={720}
            height={720}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 px-4 py-2 rounded-md md:text-6xl">
            Guilherme Cardoso
          </h2>
          <h3 className="text-center font-bold text-2xl mb-6 py-2 dark:text-gray-100">
            Front-End Developer
          </h3>
        </div>
      </div>
      <div className="items-center p-2">
        <p className="text-justify text-md py-1 leading-2 px-1 mx-auto text-gray-800 md:text-lg lg:text-lg lg:px-20 dark:text-gray-200">
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
        <ul className="text-4xl flex justify-center gap-10 py-3sm:py-2 lg:text-5xl">
          <li>
            <a
              href="https://www.instagram.com/guicardoso93/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="hover:text-cyan-300 text-cyan-500" />
            </a>
          </li>
          <li>
            <a
              href="mailto:guilherme_cardosogui@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail className="hover:text-cyan-300 text-cyan-500" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5522999047309&text=Oi%20Esta%20falando%20com%20o%20Guilherme!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineWhatsApp className="hover:text-cyan-300 text-cyan-500" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/guilherme-cardoso-35710b103/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="hover:text-cyan-300 text-cyan-500" />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/guilhermecardoso93"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="hover:text-cyan-300 text-cyan-500" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/cardoso_gui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle className="hover:text-cyan-300 text-cyan-500" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
