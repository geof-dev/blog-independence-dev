'use client'

import React from 'react'
import { WistiaPlayer, WistiaProvider } from '@wistia/react-embeds'

const WistiaComponent = ({ hashedId }) => {
  return (
    <WistiaProvider>
      <WistiaPlayer hashedId={hashedId} />
    </WistiaProvider>
  )
}

export default WistiaComponent
