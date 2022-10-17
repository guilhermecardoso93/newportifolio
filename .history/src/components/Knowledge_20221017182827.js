import Image from "next/image";

export function Knowledge() {
  return (
    <section className="skills" id="skills">
      <div>
        <div>
          <div className="skill-box">
            <div>
              <h2>Tecnologias</h2>
              <p>Tecnologia estudadas nos 2 anos.</p>
              <div className="skill-slider">
                <div>
                  <div>
                    <Image src="https://skills.thijs.gg/icons?i=js" layout="fill" objectFit="cover" width='10' height='10'/>
                  </div>
                  <div>
                    <Image src="https://skills.thijs.gg/icons?i=ts" layout="fill" objectFit="cover" width='10' height='10'/>
                  </div>
                  <div>
                    <Image src="https://skills.thijs.gg/icons?i=html" layout="fill" objectFit="cover" width='10' height='10'/>
                  </div>
                  <div>
                    <Image src="https://skills.thijs.gg/icons?i=css" layout="fill" objectFit="cover" width='10' height='10'/>
                  </div>
                </div>
                <div>
                  <div>
                    <Image src="https://skills.thijs.gg/icons?i=react" layout="fill" objectFit="cover" width='10' height='10'/>
                  </div>
                  <div>
                    <Image src="https://skills.thijs.gg/icons?i=tailwind" layout="fill" objectFit="cover" width='10' height='10'/>
                  </div>
                  <div>
                    <Image src="https://skills.thijs.gg/icons?i=bootstrap" layout="fill" objectFit="cover" width='10' height='10'/>
                  </div>
                  <div>
                    <Image src="https://skills.thijs.gg/icons?i=sass" layout="fill" objectFit="cover" width='10' height='10'/>
                  </div>
                  <div>
                    <Image src="https://skills.thijs.gg/icons?i=styledcomponents" layout="fill" objectFit="cover" width='10' height='10'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursos">
              <h2>Cursos</h2>
              <div>
                <ul>
                  <li>
                    <h4>Rocketseat</h4>
                    <p>
                      2021 - Atualmente <br />
                      ReactJs - Futuro ReactNative e NodeJs
                    </p>
                  </li>
                  <li>
                    <h4>Curso em Video</h4>
                    <p>
                      2021 - 2022 <br /> HTML5 - CSS3 - Javascript{" "}
                    </p>
                  </li>
                  <li>
                    <h4>ImagineSchool</h4>
                    <p>
                      2021 - 2021 <br />
                      HTML5 - CSS3 - Javascript{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <h4>UNOPAR - Universidade Norte do Paraná</h4>
                    <p>
                      2018 - 2020
                      <br />
                      Técnico em Logística
                    </p>
                  </li>
                  <li>
                    <h4>CNA - Escola de Idiomas</h4>
                    <p>
                      2011 - 2016
                      <br />
                      Inglês
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
