'use client'

import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Button, Chip, Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react'
import type { Project } from '@/config/projects'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = (props: ProjectCardProps) => {
  const [project, setProject] = useState<Project>()
  const [updatedAt, setUpdatedAt] = useState<string>()

  useEffect(() => {
    if (props.project) {
      setProject(props.project)
    }
  }, [])

  useEffect(() => {
    if (project?.updatedAt) {
      setUpdatedAt(dayjs(project.updatedAt).format('YYYY年MM月DD日'))
    }
  }, [project])

  return (
    <Card className="mt-4 w-full">
      <CardHeader className="flex justify-between items-center">
        <h4 className="mr-2 font-bold text-xl">{project?.name || ''}</h4>
        {project?.categories.map((category, index) => (
          <Chip key={index} color="primary" size="sm" variant="flat">
            {category}
          </Chip>
        ))}
      </CardHeader>
      <CardBody>
        <p className="text-base text-gray-700 font-semibold">
          対象チェーン: <span className="font-normal">{project?.chains.join(', ')}</span>
        </p>
        <p className="text-base text-gray-700 font-semibold mt-2">
          更新日時: <span className="font-normal">{updatedAt}</span>
        </p>
      </CardBody>
      <CardFooter>
        <Button color="primary" radius="full" fullWidth>詳細</Button>
      </CardFooter>
    </Card>
  )
}
