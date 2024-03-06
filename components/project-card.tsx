'use client'

import { useEffect, useState } from 'react'
import { Card, CardHeader } from '@nextui-org/react'
import type { Project } from '@/config/projects'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = (props: ProjectCardProps) => {
  const [project, setProject] = useState<Project>()

  useEffect(() => {
    if (props.project) {
      setProject(props.project)
    }
  }, [])

  return (
    <Card>
      <CardHeader>{project?.name || ''}</CardHeader>
    </Card>
  )
}
