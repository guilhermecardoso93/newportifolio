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
            <ProjectCard
              key={index}
              {...projects}
              repo={project.repo}
              img={project.img}
              title={project.title}
              url={project.url}
            />
          )
        })}
      </div>
    </div>
  )
}
