import { Box, Button, Grid, styled, TextField, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'

const ContactContainer = styled(Box)(({theme})=>({
height:'90vh',
width:'100%',
display:'flex',
justifyContent:'center',
alignItems:'center'
}));
const ContactLeft = styled(Box)(({theme})=>({
    backgroundImage:`url(${'/assets/food.jpg'})`,
    height:'90vh',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    [theme.breakpoints.down('md')]:{
        height:'30vh'
    }
}));
const ContactRight = styled(Box)(({theme})=>({
    display:'flex',
    height:'100%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    [theme.breakpoints.down('md')]:{
        height:'60vh'
    }
}))

const Contact = () => {
    const theme = useTheme()
  return (
    <ContactContainer>
        <Grid container spacing={2}
         sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
         }} 
        >
            <Grid item xs={12} sm={6}>
              <ContactLeft>
              </ContactLeft>
            </Grid>
            <Grid item xs={12} sm={6}>
               <ContactRight>
                <Typography
                  variant='h3'
                  align='center'
                  sx={{
                      fontSize:'1rem',
                       mb:'0rem',
                       fontWeight:'bold'
                     }}
                 >
                   Contact Us
               </Typography>
               <Box
                component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1.5, width:{'xs':'30ch', md:'65ch'}},
                     display:'flex',
                     flexDirection:'column',
                     justifyContent:'center',
                     alignItems:'center'
                   }}
                    noValidate
                    autoComplete="off"
            >
                   <TextField
                    variant='standard'
                    type='text'
                    label='FullName'
                    placeholder='Please enter your name'
                    />
                   <TextField
                     variant='standard'
                      type='email'
                     label='Email'
                     placeholder='Please enter your email address'
                    />
                  <TextField
                    multiline
                    maxRows={6}
                    variant='filled'
                    defaultValue={"Am writing to ..."}
                    type='text'
                    label='Message Us'
                  />
                  <Button
                   variant='contained'
                   color='secondary'
                   fullWidth
                  >
                    Send Message
                  </Button>
            </Box>
        </ContactRight>
        </Grid> 
     </Grid>
    </ContactContainer>
  )
}

export default Contact