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
                <h3>{title}</h3>
                <Link href={url} target="_blank">
                  <span>Project Website</span>
                  <BsFillLaptopFill />
                </Link>
                <Link href={repo} target="_blank">
                  <span>Repository Link</span>
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
