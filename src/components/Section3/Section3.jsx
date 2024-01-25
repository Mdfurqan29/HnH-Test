import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import section3img from '../../imgs/section3img.png'
import style from './style.module.css'
import sec3img1 from '../../imgs/sec3one.png'
import sec3img2 from '../../imgs/sec3two.png'
import sec3img3 from '../../imgs/sec3three.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section3 = () => {
    useEffect(()=>{
        AOS.init({
          duration: 2000
        })
      },[])
    return (
        <Container sx={{ width: '100%', display: 'flex', flexWrap: 'wrap',alignItems:'center' }}>
            <div className='col-md-6' >
                <Stack width="100%" sx={{ color: 'white', position: "relative",gap:2 }}>
                    <div className={style.section3shadow}>
                    </div>
                    <Typography variant='h5' sx={{ position: "relative" }} data-aos='fade-right'>
                        Why Choose us?
                    </Typography>
                    <Typography variant='p' sx={{ position: "relative" }} data-aos='fade-right'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dicta debitis, molestias deleniti saepe ab id reiciendis laborum assumenda, deserunt sequi provident quisquam sint sapiente explicabo quasi corrupti dolore aliquam.
                    </Typography>

                    <Box className='d-flex flex-column gap-3'>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2, position: "relative", alignItems: 'center', justifyContent: 'center', display: 'flex' }} data-aos='fade-left'>
                            <img src={sec3img1} alt="" className={style.section3rleftimg1} />
                            <Box>
                                <Typography variant='h5'>No More PhotoShoots</Typography>
                                <Typography variant='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolore!</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2, position: "relative", alignItems: 'center', justifyContent: 'center' }} data-aos='fade-right'>
                            <img src={sec3img2} alt="" className={style.section3rleftimg1} />
                            <Box>
                                <Typography variant='h5'>No More PhotoShoots</Typography>
                                <Typography variant='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolore!</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2, position: "relative", alignItems: 'center', justifyContent: 'center', display: 'flex' }} data-aos='fade-left'>
                            <img src={sec3img3} alt="" className={style.section3rleftimg1} />
                            <Box>
                                <Typography variant='h5'>No More PhotoShoots</Typography>
                                <Typography variant='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolore!</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </div>
            <div className='col-md-6' data-aos='fade-left'>
                <Stack sx={{ justifyContent: 'center', alignItems: 'center', ml: 5 }}>
                    <img src={section3img} alt="" className='img-fluid d-block m-lg-0 mx-auto mt-3' />
                </Stack>
            </div>
        </Container>
    )
}

export default Section3
