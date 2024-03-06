import { title, subtitle } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'
import { projects } from '@/config/projects'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>暗号資産</h1>
          <br />
          <h1 className={title()}>
            闇プロジェクトまとめ
          </h1>
          <h4 className={subtitle({ class: 'mt-4' })}>
            暗号資産に関する案件情報を共有するサイトです。
          </h4>
        </div>

        <div className="mt-8">
          <Table>
            <TableHeader>
              <TableColumn>プロジェクト名</TableColumn>
              <TableColumn>内容</TableColumn>
              <TableColumn>詳細</TableColumn>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>{project.name}</TableCell>
                  <TableCell>ほげほげ</TableCell>
                  <TableCell>
                    <Button color="primary" size="sm">詳細</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </DefaultLayout>
  )
}
