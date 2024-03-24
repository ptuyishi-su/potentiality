import React from 'react'
import Hero from '../ui/Hero'
import AthleteSection from '../ui/AthleteSection'
import CoachSection from '../ui/CoachSection'
import OrganizationSection from '../ui/OrganizationSection'
import Impact from '../ui/Impact'
import Aproach from '../ui/Aproach'
import Insight from '../ui/Insight'
import ClientStory from '../ui/ClientStory'
import Map from '../ui/Map'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AthleteSection/>
      <CoachSection/>
      <OrganizationSection/>
      <Impact/>
      <Aproach/>
      <Insight/>
      <ClientStory/>
      <Map/>
    </div>
  )
}

export default Home
