import { Container, Typography } from '@mui/material'
import React from 'react'
import AccordionSection8 from './AccordingSection8.jsx'

const Section8 = () => {
  return (
    <Container sx={{mt:5,width:'100%',color:'white',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Typography variant='h4' sx={{textAlign:'center'}}>
        Frequently asked questions
        </Typography>
<AccordionSection8/>
    </Container>
  )
}

export default Section8
