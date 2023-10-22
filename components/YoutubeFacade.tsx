'use client'

import { useState } from 'react'
import Image from 'next/image'

const YoutubeFacade = ({ videoId, title }) => {
  const [showVideo, setShowVideo] = useState(false)

  const handleClick = () => {
    setShowVideo(true)
  }

  return (
    <div className="relative">
      {!showVideo && (
        <button
          className="relative cursor-pointer"
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              handleClick()
            }
          }}
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            width={1280}
            height={720}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <Image
              src={'/static/images/youtube-logo.png'}
              alt={'YouTube Logo'}
              width={100}
              height={100}
            />
          </div>
        </button>
      )}
      {showVideo && (
        <div className="aspect-ratio-16/9">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            title={title}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default YoutubeFacade
