import Subscribe2 from '@/components/Subscribe2'
import { genPageMetadata } from 'app/(main)/seo'
import WistiaVideo from '@/components/WistiaVideo'
import React from 'react'
export const metadata = genPageMetadata({ title: 'Subscribe' })

export default function SubscribePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.9)), url("/static/images/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex-grow flex-col items-center justify-center pt-4">
        <div className="mt-6 flex items-center justify-center pb-1 text-3xl font-semibold text-gray-100">
          Rejoins la Révolution Web3 !
        </div>
        <div className="text-md flex items-center justify-center pb-1 text-gray-300">
          Masterclass Crypto-Trading Inédite 🤖
        </div>
        <div className="mx-auto my-6 max-w-fit rounded-lg border border-gray-950 bg-gray-950 bg-opacity-50 p-16">
          <div className="mb-4">
            <WistiaVideo hashedId="8ei7wg08fi" />
          </div>
          <Subscribe2 />
          <p className="text-md mt-4 flex items-center justify-center text-gray-900 dark:text-gray-100">
            🎁 En bonus mon projet starter kit Web3.
          </p>
        </div>
        <p className="text-md mt-6 pb-2 text-center">
          Copyright {`© ${new Date().getFullYear()}`}. Independence DEV. Tous droits réservés.
        </p>
      </div>
    </div>
  )
}
