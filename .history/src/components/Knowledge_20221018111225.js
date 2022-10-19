import * as Tooltip from "@radix-ui/react-tooltip"
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCsswizardry,
  SiReact,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiStyledcomponents,
} from "react-icons/si"

export function Knowledge() {
  return (
    <section className="" id="skills">
      <div>
        <div>
          <div className="">
            <div>
              <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 px-2 py-2 md:text-3xl">
                Knowledge
              </h2>
              <h3 className="text-left text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 md:text-xl">
                Technologies Studied
              </h3>
              <div className="text-4xl flex flex-wrap justify-center gap-10 py-3 text-cyan-500 sm:py-2 lg:text-5xl">
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <SiTypescript />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiCsswizardry />
                </div>
                <div>
                  <SiSass />
                </div>
                <div>
                  <SiBootstrap />
                </div>
                <div>
                  <SiStyledcomponents />
                </div>
                <div>
                  <SiReact />
                </div>
                <div>
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger>
                        <SiTailwindcss />
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content>
                          <p className="w-20 rounded-md bg-slate-500">
                            A utility-first CSS framework packed with classes.
                          </p>
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
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
  )
}
