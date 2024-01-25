import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import logo from '../../imgs/Logo.png'
import style from './style.module.css'
import icon from '../../imgs/footer.png'
const Footer = () => {
    return (
        <Container sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', position: 'relative', flexWrap: 'wrap' }}>
            <Box className={style.footerRight} sx={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: '6' }}>

                <Box>
                    <img src={logo} alt="" className={style.footerLogo} />
                </Box>

                <Box sx={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>

                    <Box className={style.footerRespon} data-aos='fade-left'>
                        <Typography variant='h5'>
                            Social
                        </Typography>
                        <img src={icon} alt="" />
                        <Typography variant='p'>
                            Tiktok
                        </Typography>
                    </Box>

                    <Box sx={{ flexDirection: 'column' }} className={style.footerRespon}>
                        <Typography variant='h5'>
                            Quick Links
                        </Typography>
                        <Typography variant='p'>
                            Home
                        </Typography>
                        <br />
                        <Typography variant='p'>
                            Review
                        </Typography>
                        <br />
                        <Typography variant='p'>
                            How Its Works
                        </Typography>
                    </Box>

                    <Box className={style.footerRespon} >
                        <Typography variant='h5'>
                            Legal
                        </Typography>
                        <Typography variant='p'>
                            Terms & Conditions
                        </Typography>
                        <br />
                        <Typography variant='p'>
                            Privacy policy
                        </Typography>
                    </Box>

                </Box>

            </Box>
            <hr className={style.hr} />
            <Typography variant='p'>
                © 2023 THENEXTPHOTO.COM All rights reserved.
            </Typography>
        </Container>
    )
}

export default Footer
