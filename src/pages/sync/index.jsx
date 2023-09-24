import React from 'react'
import Buttons from '@/components/Buttons'
import CountDisplay from '@/components/CountDisplay'

const SyncPage = () => {
  return (
    <div>
      <h2>Estamos en el contador con un estado síncrono</h2>
      <CountDisplay />
      <Buttons />
    </div>
  )
}

export default SyncPage