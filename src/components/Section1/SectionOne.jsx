import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import style from './style.module.css'
import Button from '../Button/Button'
import SectionOneRightSide from './SectionOneRightSide'

const SectionOne = () => {
    return (
        <Container className={style.SectionOneMain} sx={{ width: '100%', display: 'flex', color: 'white', flexWrap: 'wrap',justifyContent:'space-between'}}>
            <Box >
                <div className={style.One}>
                </div>
                <Box>
                    <Typography variant='p' sx={{ fontWeight: 500, fontSize: '40px' }} className={style.content}>
                        THE BEST
                        <br />
                        AI-POWERED
                        <br />
                        HEADSHOT FOR
                        <br />
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

            <Box >
                <SectionOneRightSide />
            </Box>

        </Container>
    )
}

export default SectionOne
