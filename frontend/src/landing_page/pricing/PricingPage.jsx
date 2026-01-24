import React from 'react'
import Hero from './Hero'
import ECC from './ECC'
import ChargesExplained from './ChargesExplained'
import ChargesForAccOpening from './ChargesForAccOpening'
import DematAMC from './DematAMC'
import ChargesForOptionalValueAddedServices from './ChargesForOptionalValueAddedServices'

const PricingPage = () => {
  return (
    <>
    <Hero/>
    <ECC/>
    <ChargesForAccOpening/>
    <DematAMC/>
    <ChargesForOptionalValueAddedServices/>
    <ChargesExplained/>
    </>
  )
}

export default PricingPage
