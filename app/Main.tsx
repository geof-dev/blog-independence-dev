import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Subscribe from '@/components/Subscribe'
import Image from 'next/image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <section className="flex flex-col justify-between border-b-2 border-dotted border-gray-200 pb-5 dark:border-gray-700 lg:flex-row">
        <div className="flex flex-col justify-center sm:text-center lg:w-5/12 lg:text-left">
          <p className="mb-2 font-semibold text-primary-500 md:mb-4 md:text-lg xl:text-xl">
            Gagnez en Liberté
          </p>
          <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl md:mb-12 md:text-6xl">
            Explorez le Web3
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500 dark:text-gray-400 xl:text-lg">
            Chez Independence Dev, plongez dans le monde du développement Web3 pour renforcer votre
            indépendance financière et découvrir de nouvelles opportunités. Préparez-vous à
            maîtriser les technologies émergentes et à gagner en liberté dans l'univers en constante
            évolution du Web3.
          </p>
          <Subscribe />
        </div>
        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto lg:w-5/12">
          <Image
            src={'/static/images/hero.png'}
            alt="Hero image"
            width={2560}
            height={1440}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Les derniers articles
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Publié le</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Lire l'article &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Tous les articles"
          >
            Tous les articles &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
