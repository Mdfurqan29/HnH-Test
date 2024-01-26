import { Box, Stack } from '@mui/material'
import React from 'react'
import style from './style.module.css'
import pic1 from '../../imgs/g1.png'
import pic2 from '../../imgs/g2.png'
import pic3 from '../../imgs/g3.png'
import pic4 from '../../imgs/g4.png'
import pic5 from '../../imgs/g5.png'
import pic6 from '../../imgs/g6.png'
import pic7 from '../../imgs/g7.png'
import CenterImg from '../../imgs/Group.png'
const SectionOneCards = () => {
  return (
    <Stack className={style.main}>

<img src={CenterImg} alt=""  className={style.CenterImg}/>


      <div className={style.div1}>
        <Box >
          <img src={pic1} alt="" className={style.rightsideImgs} />
        </Box>
        <Box >
          <img src={pic2} alt="" className={style.rightsideImgs} />
        </Box>
      </div>

      <div className={style.div1}>
        <Box >
          <img src={pic3} alt="" className={style.rightsideImgs} />
        </Box>
        <Box >
          <img src={pic4} alt="" className={style.rightsideImgs} />
        </Box>
        <Box >
          <img src={pic5} alt="" className={style.rightsideImgs} />
        </Box>
      </div>

      <div className={style.div1}>
        <Box >
          <img src={pic6} alt="" className={style.rightsideImgs} />
        </Box>
        <Box >
          <img src={pic7} alt="" className={style.rightsideImgs} />
        </Box>

      </div>
    </Stack>
  )
}

export default SectionOneCards;
