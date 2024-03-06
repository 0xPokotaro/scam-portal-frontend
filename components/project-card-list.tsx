'use client'

import { ProjectCard } from '@/components/project-card'
import type { Project } from '@/config/projects'

interface ProjectCardListProps {
  projects: Project[]
}

export const ProjectCardList = (props: ProjectCardListProps) => {
  const { projects } = props

  return (
    <>
      {[...projects].reverse().map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  )
}
