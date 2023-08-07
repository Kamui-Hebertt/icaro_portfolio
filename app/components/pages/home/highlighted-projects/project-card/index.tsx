import Image from "next/image"
import frontendExampleImage from "../../../../../../public/images/front-example.png"
import { TechBadge } from "@/app/components/tech-badge"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "@/app/components/link"
import { Project } from "@/app/types/projects"

type ProjectCardProps = {
  project: Project
}
export const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <div 
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
    >
      <div className="w-full h-full">
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          width={420}
          height={304}
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt="icon"
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </h3>
        <p className="text-gray-400 my-6">
          {project.shortDescription}
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {
            project.technologies.map((tech) => (
              <TechBadge key={`${project.title}-tech-${tech.name}`} name={tech.name}/>
            ))
          }
        </div>
        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}