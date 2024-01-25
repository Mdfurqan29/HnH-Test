import React from 'react'
import { Box, Typography } from '@mui/material'
import style from './style.module.css'
import icon from '../../imgs/icon.png'
import sliderimg1 from '../../imgs/sliderimg1.png'
import sliderimg2 from '../../imgs/sliderimg2.png'
import sliderimg3 from '../../imgs/sliderimg3.png'
import RatingSize from '../Rating/Rating'
const SliderCards = () => {
  return (
    <Box className={style.card}>
        <Box sx={{p:3}}>
            <Typography variant='p' className={style.cardsec1}>
Greate Plate Form
</Typography>
<Box className={style.cardsec2}>
    <img src={icon} alt="" className={style.cardsecimg}/>
    <Typography variant='p' sx={{p:2}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, maxime? Lorem ipsum dolor sit amet.
    </Typography>
</Box>
<hr />
<Box sx={{display:'flex', justifyContent:'center',alignItems:'center',width:'100%',gap:1}}>
<Box>
    <img src={sliderimg1} alt="" className={style.sliderimg3}/>
</Box>
<Box>
    <Typography variant='p'>
Md Furqan
    </Typography>
    <Box>
        <RatingSize/>
    </Box>
</Box>
</Box>
        </Box>

    </Box>
  )
}

export default SliderCards
