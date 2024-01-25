import { Box } from '@mui/material'
import React from 'react'
import style from './style.module.css'
import SectionOneCards from './SectionOneCards'

const SectionOneRightSide = () => {
  return (
   <Box className={style.rightParent}>
<div className={style.rightSideMain}>
</div>
<SectionOneCards/>
   </Box>
  )
}

export default SectionOneRightSide
