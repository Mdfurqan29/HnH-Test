import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import style from './style.module.css'
import imge from '../../imgs/imgs.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Section9 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <Container sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5, position: 'relative' }}>
      <div className={style.BoxShado}>
      </div>
      <Box className={style.box} data-aos='fade-right'>
        <Typography variant='h3' mt='5px'>
          Get your headshots today!
        </Typography>
        <Typography variant='p' mt='2px'>
          Your professional corporate business headshots are just a few clicks away. Don't miss out on the opportunity to showcase your team's best image - get your AI generated headshots now!
        </Typography>
        <Box>
          <button className={style.button}>Learn More</button>
        </Box>

      </Box>
      <div className={style.BoxShado2}>
      </div>
    </Container>
  )
}

export default Section9
