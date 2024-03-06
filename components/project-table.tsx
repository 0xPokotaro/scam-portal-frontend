'use client'

import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {
  Button,
  Chip,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react'
import type { Project } from '@/config/projects'

interface ProjectTableProps {
  projects: Project[]
}

export const ProjectTable = (props: ProjectTableProps) => {
  const router = useRouter()

  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    if (props.projects) {
      setProjects(props.projects)
    }
  }, [props.projects])

  return (
    <Table isStriped>
      <TableHeader>
        <TableColumn className="text-center">プロジェクト名</TableColumn>
        <TableColumn className="text-center">カテゴリー</TableColumn>
        <TableColumn className="text-center">チェーン</TableColumn>
        <TableColumn className="text-center">更新日時</TableColumn>
        <TableColumn className="text-center">詳細</TableColumn>
      </TableHeader>
      <TableBody>
        {projects.reverse().map((project) => (
          <TableRow key={project.id}>
            <TableCell>
              <span className="font-bold">{project.name}</span>
            </TableCell>
            <TableCell>
              {project.categories.map((category) => (
                <Chip key={category} variant="bordered" className="mr-1">
                  {category}
                </Chip>
              ))}
            </TableCell>
            <TableCell>
              {project.chains.map((chain) => (
                <Chip key={chain} variant="bordered" className="mr-1">
                  {chain}
                </Chip>
              ))}
            </TableCell>
            <TableCell>
              {dayjs(project.updatedAt).format('YYYY年MM月DD日')}
            </TableCell>
            <TableCell>
              <Button
                color="primary"
                size="sm"
                onClick={() => router.push(project.notion)}
              >
                詳細
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
