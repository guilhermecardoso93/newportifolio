/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import Image from "next/image"
import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"
import { BsFillLaptopFill } from "react-icons/bs"
import { ProjectCard } from "./ProjectCard"
import { projects } from "../utils/projetos"

export function Projects() {
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className="flex items-center">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-700 px-2 py-2 md:text-3xl">
        Projects
      </h2>
      <div class="grid grid-cols-3 gap-1">
        {projects.map((project, index) => {
          return (
            <div className="flex w-full" key={index}>
              <div className="proj-txtx">
                <img src={project.img} width={100} height={60} alt="" />
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
