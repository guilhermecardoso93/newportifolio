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
    <div className="h-full mb-10">
      <div>
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 px-2 py-2 md:text-3xl">
          Knowledge
        </h2>
        <h3 className="text-left text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 mb-4 md:text-xl">
          Technologies Studied
        </h3>
        <div className="text-4xl flex flex-wrap justify-center gap-10 py-3 text-cyan-500 sm:py-2 lg:text-5xl">
          <div>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <SiJavascript />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    <span className="w-20 rounded-md bg-slate-500 p-1 text-white text-center text-sm overflow-hidden">
                      Javascript is a scripting language that enables you to
                      create dynamically updating content, control multimedia,
                      animate images, and pretty much everything else.
                    </span>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <SiTypescript />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    <span className="w-20 rounded-md bg-slate-500 p-1 text-white text-center text-sm overflow-hidden">
                      TypeScript is a strongly typed programming language that
                      builds on JavaScript.
                    </span>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <SiHtml5 />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    <span className="w-20 rounded-md bg-slate-500 p-1 text-white text-center text-sm overflow-hidden">
                      HTML is the standard markup language for Web pages.
                    </span>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <SiCsswizardry />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    <span className="w-20 rounded-md bg-slate-500 p-1 text-white text-center text-sm overflow-hidden">
                      CSS is the language we use to style an HTML document.
                    </span>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <SiReact />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    <span className="w-20 rounded-md bg-slate-500 p-1 text-white text-center text-sm overflow-hidden">
                      React framework is an open-source JavaScript framework and
                      library.
                    </span>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <SiSass />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    <span className="w-20 rounded-md bg-slate-500 p-1 text-white text-center text-sm overflow-hidden">
                      SASS is CSS with superpowers.
                    </span>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <SiBootstrap />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    <span className="w-20 rounded-md bg-slate-500 p-1 text-white text-center text-sm overflow-hidden">
                      Bootstrap utilizes Sass for a modular and customizable
                      architecture.
                    </span>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <SiStyledcomponents />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    <span className="w-20 rounded-md bg-slate-500 p-1 text-white text-center text-sm overflow-hidden">
                      styled-components lets you write actual CSS in your
                      JavaScript. This means you can use all the features of
                      CSS.
                    </span>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <SiTailwindcss />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    <span className="w-20 rounded-md bg-slate-500 p-1 text-white text-center text-sm">
                      TailwindCSS utility-first CSS framework packed with
                      classes.
                    </span>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </div>
      </div>
      <div className="mt-4 dark:text-white">
        <h2 className="text-left text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 mb-4 md:text-xl">
          Courses
        </h2>
        <div>
          <ul className="flex flex-wrap w-85 px-8 gap-4 align-center justify-between">
            <li>
              <h4 className="font-bold">Rocketseat</h4>
              <p>
                2021 - Nowdays <br />
                ReactJS
              </p>
            </li>
            <li>
              <h4 className="font-bold">CursoEmVideo</h4>
              <p>
                2021 - 2022 <br /> HTML5 - CSS3 - Javascript{" "}
              </p>
            </li>
            <li>
              <h4 className="font-bold">ImagineSchool</h4>
              <p>
                2021 - 2021 <br />
                HTML5 - CSS3 - Javascript{" "}
              </p>
            </li>
            <li>
              <h4 className="font-bold">
                UNOPAR - Universidade Norte do Paraná
              </h4>
              <p>
                2018 - 2020
                <br />
                Logistics Technician
              </p>
            </li>
            <li>
              <h4 className="font-bold">CNA - Escola de Idiomas</h4>
              <p>
                2011 - 2016
                <br />
                English
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
