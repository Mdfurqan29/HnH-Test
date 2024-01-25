import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import style from './style.module.css'
import Section5Slider from '../Section5Slider/Section5Slider'

const Section5 = () => {
  return (
    <>
      <Container sx={{ mt: 10, color: 'white', position: 'relative' }}>
        <div className={style.boxshadosec51}>
        </div>
        <Typography variant='h3' className={style.section5media} sx={{ position: 'relative', zIndex: '2' }}>
          Review and download your favorite <br /> headshots from a collection of 100+.
        </Typography>
        <Typography variant='p' sx={{ position: 'relative', zIndex: '2' }}>
          Explore the impact of new headshots on people's lives.
        </Typography>

        <Section5Slider />
      </Container>
    </>
  )
}

export default Section5
