import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import style from './style.module.css'
import icon from '../../imgs/sec6icon.png'
import icon2 from '../../imgs/close.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Section6card = () => {
    useEffect(()=>{
        AOS.init({
          duration: 2000
        })
      },[])
  return (
    <Container  sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:2,mt:5}}>


<Box className={style.box}  data-aos='fade-right'>
    <Box sx={{p:2}}>
    <Typography variant='h6'>
STARTER
    </Typography>
    <Typography variant='h4'>
$15
    </Typography>
    <Typography variant='p' sx={{fontSize:'16px',fontWeight:'500'}}>
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
    </Typography>
  
    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        100 ultra-realistic headshots
    </Typography>
    </Box>


    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        Unlimited styles
    </Typography>
    </Box>

    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        512x640 px
    </Typography>
    </Box>

    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        3 sec. turnaround time
    </Typography>
    </Box>

    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        Non-refundable
    </Typography>
    </Box>

    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon2} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        No human edits
    </Typography>
    </Box>
    </Box>
    <Box width="100%" sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<button className={style.button}>Create Yours Now</button>
    </Box>
</Box>






<Box className={style.box} data-aos='fade-left'>
    <Box sx={{p:2}}>
    <Typography variant='h6'>
STARTER
    </Typography>
    <Typography variant='h4'>
$20
    </Typography>
    <Typography variant='p' sx={{fontSize:'16px',fontWeight:'500'}}>
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
    </Typography>
  
    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        200 ultra-realistic headshots
    </Typography>
    </Box>


    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        Unlimited styles
    </Typography>
    </Box>

    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        640x640 px
    </Typography>
    </Box>

    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        3 sec. turnaround time
    </Typography>
    </Box>

    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        Non-refundable
    </Typography>
    </Box>

    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon2} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        No human edits
    </Typography>
    </Box>
    </Box>
    <Box width="100%" sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<button className={style.button}>Create Yours Now</button>
    </Box>
</Box>




<Box className={style.box}  data-aos='fade-right'>
    <Box sx={{p:2}}>
    <Typography variant='h6'>
STARTER
    </Typography>
    <Typography variant='h4'>
$30
    </Typography>
    <Typography variant='p' sx={{fontSize:'16px',fontWeight:'500'}}>
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
    </Typography>
    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        300 ultra-realistic headshots
    </Typography>
    </Box>
    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        Unlimited styles
    </Typography>
    </Box>
    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        640x640 px
    </Typography>
    </Box>
    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        3 sec. turnaround time
    </Typography>
    </Box>
    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        Non-refundable
    </Typography>
    </Box>
    <Box sx={{display:'flex',alignItems:'center',mt:1,gap:1}}>
        <img src={icon} alt="" className={style.iconImg}/>
        <Typography variant='p' sx={{fontSize:'12px'}}>
        No human edits
    </Typography>
    </Box>
    </Box>
    <Box width="100%" sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<button className={style.button}>Create Yours Now</button>
    </Box>
</Box>

    </Container>
    
  )
}

export default Section6card
