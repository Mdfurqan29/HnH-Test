import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import style from './style.module.css'
import Section6card from '../Section6card/Section6card'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Section6 = () => {
  useEffect(()=>{
    AOS.init({
      duration: 2000
    })
  },[])
  return (
    <Container sx={{mt:5,position:'relative',zIndex:10}}>
        <Typography variant='h3' sx={{textAlign:'center',color:'white',position:'relative',zIndex:'2'}}  data-aos='fade-right'>
        High-quality headshots, <br /> no premium price.
        </Typography>
        <Typography variant='p' width="100%" sx={{textAlign:'center',color:'white',alignItems:'center',display:"flex",justifyContent:'center',position:'relative',zIndex:'2'}} data-aos='fade-left'>
        Upgrade your LinkedIn presence, supercharge job applications, or elevate <br /> your company's website with our tailored headshot packages.
        </Typography>
        <div className={style.boxshadosec61}>
</div>
<Section6card/>
    </Container>
  )
}

export default Section6
