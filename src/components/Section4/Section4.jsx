import { Box, Container, Typography, duration } from '@mui/material'
import React, { useEffect } from 'react'
import style from './style.module.css'
import Section4cards from '../section4Cards/Section4cards'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section4 = () => {
useEffect(()=>{
   AOS.init({
      duration:2000
   })
},[])
   return (
      <>
         <Container sx={{ mt: 10 }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
               <div className={style.boxShado}>
               </div>
               <Typography variant='h4' sx={{ textAlign: 'center', color: 'white' }}  data-aos='fade-right'>
                  How Its Works
               </Typography>
               <Typography variant='p' sx={{ textAlign: 'center', color: 'white' }}  data-aos='fade-right'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta voluptate illum. Delectus nihil doloribus, <br /> consectetur a aspernatur at deleniti.
               </Typography>
            </Box>
            <Section4cards />
         </Container>
      </>
   )
}

export default Section4
