import React, { useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import style from './style.module.css'
import Button from '../Button/Button'
import SectionOneRightSide from './SectionOneRightSide'
import AOS from 'aos'
import 'aos/dist/aos.css'

const SectionOne = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000
        })
      }, [])
    return (
        // data-aos='zoom-in'
        <Container className={style.SectionOneMain} sx={{ width: '100%', display: 'flex', color: 'white', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Box className='col-lg-5 col-12'  data-aos='fade-right'>
                <div className={style.One}>
                </div>
                <Box>
                    <Typography variant='p' sx={{ fontWeight: 500, fontSize: '40px' }} className={style.content}>
                        THE BEST
                        AI-POWERED
                        HEADSHOT FOR
                        EVERYONE
                    </Typography>
                    <p>
                        <Typography variant='p' className={style.contentP}>
                            Click ,create and delight in the magic
                        </Typography>
                    </p>
                    <Button className={style.button} lable='CREATE YOURS NOW' />
                </Box>
            </Box>

            <Box className='col-lg-7 col-12'>
                <SectionOneRightSide />
            </Box>

        </Container>
    )
}

export default SectionOne
