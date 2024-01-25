import { Box } from '@mui/material'
import React from 'react'
import NavScrollExample from '../components/navbar/Navbar'
import SectionOne from '../components/Section1/SectionOne'
import Section2 from '../components/Section2/Section2'
import Section3 from '../components/Section3/Section3'
import Section4 from '../components/Section4/Section4'
import Section5 from '../components/Section5/Section5'
import Section6 from '../components/Section6/Section6'
import Section7 from '../components/Section7/Section7'
import Section8 from '../components/Section8/Section8'
import Section9 from '../components/Section9/Section9'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'black' }}>
      <NavScrollExample />
      <SectionOne />
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Footer/>
    </Box>
  )
}

export default Home
