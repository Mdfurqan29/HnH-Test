import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import style from './style.module.css'
import imge from '../../imgs/imgs.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Section7 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <Container sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5, position: 'relative' }} >
      <div className={style.BoxShado}>
      </div>
      <Box className={style.box} data-aos='fade-right'>
        <Typography variant='h3' mt='5px'>
          Elevate your profile with 100 AI <br /> headshots for just $15
        </Typography>
        <Typography variant='p' mt='2px'>
          Level Up Your Profile with AI Magic! Reinvent Yourself and Shine with AI-Powered Headshots!
        </Typography>
        <Box>
          <button className={style.button}>Learn More</button>
        </Box>

      </Box>
    </Container>
  )
}

export default Section7
