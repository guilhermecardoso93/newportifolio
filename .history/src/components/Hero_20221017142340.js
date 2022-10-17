import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillEmail,
} from "react-icons/ai";

export function Hero() {
  return (
    <>
      <div>
        <h2>Guilherme Cardoso da Silva</h2>
        <h3>Front-End Developer</h3>
        <p>
          Hey! You can call me Gui. After 10 years in the same job I decided to
          find a new path and the Development area caught me. Since then, it is
          been more than a year since I started studying, and Front-End got me.
          I studied with several different paths and courses with Rocketseat and
          CursoEmVideo, Iam always participating in events like NLW and DevWeek
          by Alura and the amazing YouTube. Now I am looking for an opportunity
          to enter the market, to grow as a professional and as a person. Find a
          company or project that will make me evolve completely. My current
          focus in studies is being Javascript and ReactJS and React Native.
        </p>
      </div>
      <div>
        <ul>
                <li>
                  <a
                    href="https://www.instagram.com/guicardoso93/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faInst"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:guilherme_cardosogui@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faEmail"
                  >
                    <AiFillEmail />
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5522999047309&text=Oi%20Esta%20falando%20com%20o%20Guilherme!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faWthat"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="fa" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/guilherme-cardoso-35710b103/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faLink"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="fa" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/guilhermecardoso93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faGit"
                  >
                    <FontAwesomeIcon icon={faGithub} className="fa" />
                  </a>
                </li>
        </ul>
      </div>
    </>
  );
}
