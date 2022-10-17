import Image from "next/image";
import ImageProfile from "../../public/perfil.svg"
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
    <>
      <div className='items-center p-10'>
        <h2 className=' text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700 text-white px-4 py-2 rounded-md'>Guilherme Cardoso</h2>
        <h3 className='text-center font-bold text-2xl mb-6 py-2'>Front-End Developer</h3>
        <p className='text-justify text-md py-5 leading-2 text-gray-800'>
          &nbsp; Hey! You can call me Gui. After 10 years in the same job I decided to
          find a new path and the Development area caught me. Since then, it is
          been more than a year since I started studying, and Front-End got me. <br/>
          &nbsp;I studied with several different paths and courses with Rocketseat and
          CursoEmVideo, Iam always participating in events like NLW and DevWeek
          by Alura and the amazing YouTube.<br/>
          &nbsp;Now I am looking for an opportunity
          to enter the market, to grow as a professional and as a person. Find a
          company or project that will make me evolve completely. My current
          focus in studies is being Javascript and ReactJS and React Native.
        </p>
      </div>
      <div>
        <ul className='text-5xl flex justify-center gap-10 py-3 text-cyan-500'>
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
      <div className='relative bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-full w-42'>
        <Image src={ImageProfile} width='200px' height='200px'/>
      </div>
    </>
  );
}
