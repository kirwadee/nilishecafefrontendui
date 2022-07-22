import { Box, styled, Typography } from '@mui/material';
import React from 'react'

const AboutContainer = styled(Box)(({theme})=>({
    height:'90vh',
    width:'100%',
    display:'flex',
    flexDirection:'column'
}));
const AboutTop = styled(Box)(({theme})=>({
    backgroundImage:`url(${'/assets/githeri-768x512.jpg'})`,
    height:'60%',
    width:'100%',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
}));
const AboutBottom = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:'50px',
}))

const About = () => {
  return (
    <AboutContainer>
        <AboutTop>

        </AboutTop>
        <AboutBottom>
            <Typography 
              variant='h1'
              align='center'
              sx={{
                fontSize:'2rem',
                mb:'0rem'
              }}
              >
                About Us
            </Typography>
            <Typography
              paragraph
              sx={{
                mt:'0.5rem',
                mb:'1.5rem',
                textAlign:'justify',
                fontSize:'1.2rem',
                paddingX:'20px'
            
              }} 
             >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a 
            galley of type and scrambled it to make a type specimen bookIt has survived
             not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
               Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                 software like Aldus PageMaker including versions of Lorem Ipsum
            </Typography>
        </AboutBottom>
    </AboutContainer>
  )
}

export default About