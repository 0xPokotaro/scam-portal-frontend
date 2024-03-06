import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'
import DefaultLayout from '@/layouts/default'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>暗号資産</h1>
          <br />
          <h1 className={title()}>
            詐欺情報サイト
          </h1>
          <h4 className={subtitle({ class: 'mt-4' })}>
            暗号資産に関する案件情報を共有するサイトです。
          </h4>
        </div>

        <div className="mt-8">
          <p>作成中</p> 
        </div>
      </section>
    </DefaultLayout>
  )
}
