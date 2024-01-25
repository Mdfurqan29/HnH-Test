import React, { useEffect } from 'react'
import { Box, Stack, Typography, Container } from '@mui/material'
import insta from '../../imgs/insta.png'
import tiktok from '../../imgs/tiktok.png'
import linkdin from '../../imgs/linkdin.png'
import tinder from '../../imgs/tinder.png'
import style from './style.module.css'
import imge from '../../imgs/section2.png'
import Button from '../Button/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
  useEffect(()=>{
    AOS.init({
      duration: 2000
    })
  },[])
  return (
    <>
      <Container className={style.sec3} width='100%' sx={{ mt: 2, display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography variant='p' sx={{ fontWeight: '500', textAlign: 'center', color: 'white' ,display:'block'}} data-aos='zoom-in'>
          As Seen On
        </Typography>
        <Box sx={{ color: 'white', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} data-aos='zoom-in'>
          <img src={insta} className={style.imgs} />
          <img src={tiktok} className={style.imgs} />
          <img src={linkdin} className={style.imgs} />
          <img src={tinder} className={style.imgs} />
        </Box>
        <Box sx={{ mt: 3, width: '100%', display: 'flex', alignItems:'center',  flexWrap: 'wrap' }} >
          <Box className='col-lg-6 col-12' data-aos='fade-right'>
            <img src={imge} alt="" className={style.section2imge} />
          </Box>
          <Box className='col-lg-6 col-12' data-aos='fade-left'>
            <div className={style.section2shado}>
            </div>
            <Box >
              <Typography variant='p' sx={{ fontWeight: 500, fontSize: '30px', color: 'white', position: 'relative' }}>
                Upgrade Your Profile with <br /> 100 AI headShots for $15
              </Typography>
              <p className={style.dis}>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Tenetur facilis delectus <br /> ut provident, vitae, dolorem praesentium <br /> aut molestiae odit, ex dicta <br /> necessitatibus officia? Similique sapiente,
              </p>
              <Button className={style.button} lable='CREATE YOURS NOW' />

            </Box>
          </Box>
        </Box>
      </Container>

    </>
  )
}

export default Section2
