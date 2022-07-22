import { Box, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled(Box)(({theme}) =>({
    width:'100%',
    height:'150px',
    display:'flex',
    backgroundColor:theme.palette.secondary.main,
    bottom:0
}))

const Footer = () => {
  return (
    <FooterContainer>
        <Grid container
          sx={{display:'flex', justifyContent:'center', alignItems:'center'}} 
        >
            <Typography
              sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                fontWeight:'bold',
                fontSize:'22px'
              }}
              variant='h6'
            >
             Follow Us On    
            </Typography>
            <Grid item xs={12} md={12} sm={12} lg={12}
             sx={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:'column'}}
            >
                <Stack>
                   <FacebookIcon sx={{fontSize:'40px'}} />
                   <WhatsAppIcon sx={{fontSize:'40px'}}  />
                   <TwitterIcon sx={{fontSize:'40px'}}  />
                </Stack>  
                <Typography variant='caption'>
                    &copy; 2022 africandishes.com
                   </Typography>
                      
            </Grid>
        </Grid>
    </FooterContainer>
  )
}

export default Footer