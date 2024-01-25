import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import style from './style.module.css'
import Section4cards from '../section4Cards/Section4cards'
const Section4 = () => {
  return (
   <>
   <Container sx={{mt:10}}>
   <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',position:'relative'}}>
    <div className={style.boxShado}>
    </div>
   <Typography variant='h4' sx={{textAlign:'center',color:'white'}}>
How Its Works
   </Typography>
   <Typography variant='p' sx={{textAlign:'center',color:'white'}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta voluptate illum. Delectus nihil doloribus, <br /> consectetur a aspernatur at deleniti.  
   </Typography>
   </Box>
<Section4cards/>
</Container>
   </>
  )
}

export default Section4
