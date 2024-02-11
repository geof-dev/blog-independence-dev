import { genPageMetadata } from '../../(main)/seo'
import WistiaVideo from '@/components/WistiaVideo'

export const metadata = genPageMetadata({ title: 'Masterclass Robot de Trading' })

export default function MasterclassBotPage() {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.9)), url("/static/images/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <section className="mx-auto max-w-3xl px-4 pb-4 pt-10 font-sans sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex h-screen flex-col font-sans">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Masterclass Robot de Trading 🚀
          </h1>
          <div className="mt-20 ">
            <WistiaVideo hashedId="0ywzfei2fh" />
          </div>
          <div className="mt-6 flex justify-end rounded-md shadow-sm">
            <a
              href="https://go.independence.dev/dev3-academy"
              className="rounded-md bg-green-500 px-4 py-2 text-3xl font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 "
            >
              Récupère le code sur Dev3 Academy →
            </a>
          </div>
          <p className="text-md mt-24 text-center">
            Copyright {`© ${new Date().getFullYear()}`}. Independence DEV. Tous droits réservés.
          </p>
        </div>
      </section>
    </div>
  )
}
