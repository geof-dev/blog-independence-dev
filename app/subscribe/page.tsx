import Subscribe2 from '@/components/Subscribe2'
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'Subscribe' })

export default function SubscribePage() {
  return (
    <>
      <div className="flex-col items-center justify-center pt-4">
        <div className="flex items-center justify-center pb-1 text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Explorez l'Univers Web3 avec notre Kit Exclusif !
        </div>
        <div className="mb-4 mt-6 flex-col items-center justify-center">
          <p className="flex items-center justify-center text-lg text-gray-900 dark:text-gray-100">
            🚀 Kit de Démarrage Smart Contract
          </p>
          <p className="flex items-center justify-center text-base text-gray-500 dark:text-gray-400">
            Plongez dans le développement de contrats intelligents.
          </p>
          <p className="mt-4 flex items-center justify-center text-lg text-gray-900 dark:text-gray-100">
            💡 Idées de Projets Web3
          </p>
          <p className="flex items-center justify-center text-base text-gray-500 dark:text-gray-400">
            Stimulez votre créativité avec 15 idées innovantes de projets Web3.
          </p>
          <p className="mt-4 flex items-center justify-center text-lg text-gray-900 dark:text-gray-100">
            📚 Accès Exclusif à mon canal Telegram
          </p>
          <p className="flex items-center justify-center text-base text-gray-500 dark:text-gray-400">
            Je partage les dernières tendances et des conseils pertinents du monde Web3.
          </p>
          <p className="mt-4 flex items-center justify-center text-lg text-gray-900 dark:text-gray-100">
            📧 Mes e-mails Privés
          </p>
          <p className="flex items-center justify-center text-base text-gray-500 dark:text-gray-400">
            Profite des avantages exclusifs et des promotions réservées à ma liste e-mail.
          </p>
        </div>
      </div>
      <Subscribe2 />
    </>
  )
}
