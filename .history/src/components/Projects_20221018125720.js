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
                <Image width={80} height={50} alt="" />
                <h3>{project.title}</h3>
                <Link href={project.url} target="_blank" rel="noreferrer">
                  <a>
                    Project Website
                    <BsFillLaptopFill />
                  </a>
                </Link>
                <Link href={project.repo} target="_blank" rel="noreferrer">
                  <a>
                    Repository Link
                    <AiFillGithub />
                  </a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
