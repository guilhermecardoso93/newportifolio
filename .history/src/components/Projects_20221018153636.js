/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import Image from "next/image"
import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"
import { BsFillLaptopFill } from "react-icons/bs"
import { projects } from "../utils/projetos"

export function Projects() {
  return (
    <div className="flex flex-col gap-2 items-center text-white rounded">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 px-2 py-2 md:text-3xl">
        Projects
      </h2>
      <div class="grid grid-rows-5 grid-flow-col gap-4 overflow-hidden">
        {projects.map((project, index) => {
          return (
            <div
              className="proj-imgbx shadow-lg w-56 max-h-36 rounded-xl my-3 mx-4 flex-1 justify-center"
              key={index}
            >
              <img
                src={project.img}
                layout="fill"
                alt=""
                className="proj-imgbx-back rounded"
              />
              <div className="proj-txtx flex flex-col">
                <h3>{project.title}</h3>
                <Link href={project.url} target="_blank" rel="noreferrer">
                  <a>Project Website</a>
                </Link>
                <Link href={project.repo} target="_blank" rel="noreferrer">
                  <a>Repository Link</a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
