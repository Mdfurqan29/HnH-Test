import React from 'react'
import { Box, Stack, Typography,Container } from '@mui/material'
import insta from '../../imgs/insta.png'
import tiktok from '../../imgs/tiktok.png'
import linkdin from '../../imgs/linkdin.png'
import tinder from '../../imgs/tinder.png'
import style from './style.module.css'
import imge from '../../imgs/section2.png'
import Button from '../Button/Button'

const section2 = () => {
  return (
    <>
      <Stack width='100%' sx={{ mt: 2, display: 'flex', justifyContent: 'center',  alignItems: 'center',flexWrap:'wrap' }}>
        <Typography variant='p' sx={{ fontWeight: '500', textAlign: 'center', color: 'white' }}>
          As Seen On
        </Typography>
        <Box sx={{ color: 'white' }}>
          <img src={insta} className={style.imgs} />
          <img src={tiktok} className={style.imgs} />
          <img src={linkdin} className={style.imgs} />
          <img src={tinder} className={style.imgs} />
        </Box>
        <Box sx={{ mt: 3, width: '90%', display: 'flex', p: 5,flexWrap:'wrap' }}>
          <Box>
            <img src={imge} alt="" className={style.section2imge} />
          </Box>
          <Box>
            <div className={style.section2shado}>
            </div>
            <Box>
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
      </Stack>

    </>
  )
}

export default section2
