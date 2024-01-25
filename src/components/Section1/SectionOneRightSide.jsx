import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import style from './style.module.css'
import SectionOneCards from './SectionOneCards'
import AOS from 'aos'
import 'aos/dist/aos.css'
const SectionOneRightSide = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
   <Box className={style.rightParent} data-aos='fade-left'>
<div className={style.rightSideMain}>
</div>
<SectionOneCards/>
   </Box>
  )
}

export default SectionOneRightSide
