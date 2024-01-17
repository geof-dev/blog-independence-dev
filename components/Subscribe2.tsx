'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Subscribe2 = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }
    try {
      const response = await fetch('/api/subscribe', options)
      if (response.ok) {
        const data = await response.json()
        console.log('bien recu')
        console.log(data)
        toast.success('Vérifiez votre boîte email :)')
      } else {
        console.log(response)
        toast.error("Échec de l'abonnement")
      }
    } catch (error) {
      toast.error("Échec de l'abonnement")
      console.error('Error:', error.message)
    }
  }

  return (
    <>
      <div className="flex items-center justify-center pt-4">
        <div>
          <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
            Abonne-toi
          </div>
          <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email-input">
                <span className="sr-only">Adresse e-mail</span>
                <input
                  autoComplete="email"
                  className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                  id="email-input"
                  placeholder="Votre Email"
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="mt-2 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0">
              <button
                className="w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400 sm:py-0"
                type="submit"
              >
                Recevoir le Kit&nbsp;🎁
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="mt-1 text-center text-sm text-gray-500">
        Pour finaliser votre inscription,
        <br />
        veuillez confirmer l'e-mail que vous avez reçu de&nbsp;
        <a
          href="https://formations.independencedev-dev.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:underline"
        >
          Gumroad
        </a>
        .
      </p>
    </>
  )
}

export default Subscribe2
