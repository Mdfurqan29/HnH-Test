import { Box, Typography } from '@mui/material'
import React from 'react'
import img1 from '../../imgs/section4cardsimg1.png'
import img2 from '../../imgs/section4cardsimg2.png'
import img3 from '../../imgs/section4cardsimg3.png'
import style from './style.module.css'
import icon1 from '../../imgs/sec4icon.png'
const Section4cards = () => {
    return (
        <Box width='100%' sx={{display:'flex',flexWrap:'wrap' ,gap:2,justifyContent:'center',color:'white',mt:'10px',position:'relative'}}>
            <Box sx={{ width: '280px',height:'300px', border: '1px solid orange', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:'center', position: "relative" }}>
                <img src={img3} alt="" width='270px' height="200px" className={style.cardsimg} />
                <Box>
                <img src={icon1} alt="" width='90px' height="90px" className={style.icon} />
                </Box>
                <Typography variant='h5' mt='30px' textAlign='center'>
                    Upload your selfies
                </Typography>
                <Typography variant='p'>
                    Upload at least 20 images of your face.
                </Typography>
            </Box>
            <Box sx={{ width: '280px',height:'300px', border: '1px solid orange', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:'center', position: "relative" }}>
                <img src={img2} alt="" width='270px' height="200px" className={style.cardsimg} />
                <img src={icon1} alt="" width='90px' height="90px" className={style.icon} />
                <Typography variant='h5' mt='30px' textAlign='center'>
                    Upload your selfies
                </Typography>
                <Typography variant='p'>
                    Upload at least 20 images of your face.
                </Typography>
            </Box>
            <Box sx={{ width: '280px',height:'300px', border: '1px solid orange', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:'center', position: "relative" }}>
                <img src={img1} alt="" width='270px' height="200px" className={style.cardsimg} />
                <img src={icon1} alt="" width='90px' height="90px" className={style.icon} />
                <Typography variant='h5' mt='30px' textAlign='center'>
                    Upload your selfies
                </Typography>
                <Typography variant='p'>
                    Upload at least 20 images of your face.
                </Typography>
            </Box>
        </Box>
    )
}

export default Section4cards
