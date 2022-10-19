import Image from "next/image"
import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"
import { BsFillLaptopFill } from "react-icons/bs"
import { ProjectCard } from "./ProjectCard"
import { projects } from "../utils/projetos"

export function Projects() {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 px-2 py-2 md:text-3xl">
        Projects
      </h2>
      <div>
        {projects.map((project, index) => {
          return (
            <div className="" key={index}>
              <div className="proj-txtx">
                <h3>{project.title}</h3>
                <Link ref={project.url} target="_blank">
                  <a>Project Website</a>
                  <BsFillLaptopFill />
                </Link>
                <Link ref={project.repo} target="_blank">
                  <a>Repository Link</a>
                  <AiFillGithub />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}