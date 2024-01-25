import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import style from './style.module.css'
import Section5Slider from '../Section5Slider/Section5Slider'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Section5 = () => {
  
  useEffect(()=>{
    AOS.init({
      duration: 2000
    })
  },[])

  return (
    <>
      <Container sx={{ mt: 10, color: 'white', position: 'relative' }}>
        <div className={style.boxshadosec51}>
        </div>
        <Typography variant='h3' className={style.section5media} sx={{ position: 'relative', zIndex: '2' }}  data-aos='fade-right'>
          Review and download your favorite <br /> headshots from a collection of 100+.
        </Typography>
        <Typography variant='p' sx={{ position: 'relative', zIndex: '2' }} data-aos='fade-left'>
          Explore the impact of new headshots on people's lives.
        </Typography>

        <Section5Slider />
      </Container>
    </>
  )
}

export default Section5
