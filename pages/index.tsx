import { title, subtitle } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import { projects } from '@/config/projects'
import { siteConfig } from '@/config/site'
import { ProjectCardList } from '@/components/project-card-list'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>暗号資産</h1>
          <br />
          <h1 className={title()}>闇プロジェクトまとめ</h1>
          <h4 className={subtitle({ class: 'mt-4' })}>
            {siteConfig.description}
          </h4>
        </div>

        <div>
          <ProjectCardList projects={projects} />
        </div>
      </section>
    </DefaultLayout>
  )
}
