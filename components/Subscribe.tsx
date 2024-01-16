'use client'
import React, { useState } from 'react'
import {toast} from "react-toastify"

const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ seller_id: '4612423157976', email: email })
    }
    try {
      const response = await fetch(
        'https://app.gumroad.com/follow_from_embed_form',
        options
      )
      if (response.ok) {
        const data = await response.json();
        toast.success("Vérifiez votre boîte email :)")
      } else {
        toast.error("Échec de l'abonnement")
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center pt-4">
        <div>
          <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
            Abonne-toi
          </div>
            <form
              className="flex flex-col sm:flex-row"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="email-input">
                  <span className="sr-only">Adresse e-mail</span>
                  <input
                    autoComplete="email"
                    className="focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black"
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
              <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
                <button
                  className="bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 hover:bg-primary-700 dark:hover:bg-primary-400 focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"
                  type="submit"
                >
                  S'inscrire
                </button>
              </div>
          </form>
        </div>
      </div>
      <p className="text-sm text-center text-gray-500 mt-1">
        Pour finaliser votre inscription,<br/>veuillez confirmer l'e-mail que vous avez reçu de <a href="https://formations.independencedev-dev.com/subscribe" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Grumroad</a>.
      </p>
    </>
  )
}

export default Subscribe
