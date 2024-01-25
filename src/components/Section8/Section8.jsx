import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AccordionSection8 from './AccordingSection8.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Section8 = () => {

  useEffect(()=>{
    AOS.init({
      duration: 2000
    })
  },[])

  return (
    <Container sx={{mt:5,width:'100%',color:'white',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Typography variant='h4' sx={{textAlign:'center'}} data-aos='fade-left'>
        Frequently asked questions
        </Typography>
<AccordionSection8/>
    </Container>
  )
}

export default Section8
