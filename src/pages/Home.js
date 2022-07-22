import { Box, Button, styled, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import {useTheme} from '@mui/material/styles'
import {Link} from 'react-router-dom'



const HeaderContainer = styled(Box)(({theme}) =>({
    width:"auto",
    marginLeft:"50px",
    [theme.breakpoints.down('sm')]:{
        margin:"auto",
        borderRadius:"10px",
        padding:"10px",
        width:"80px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }
}))

const TextHeader = styled(Typography)(({theme})=>({
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   fontWeight:50,
   fontSize:'90px',
   color:'black',
   marginBottom:4,
   [theme.breakpoints.down('md')]:{
    fontSize:'60px',
    align:'center'
   } 
}))

const Home = () => {
    const theme = useTheme()
    const isBelowMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box
     sx={{
         backgroundImage:`url(${"/assets/meat.png"})`,
         height:'90vh',
         width:"100%",
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         flexDirection:"column",
         backgroundPosition:"center",
         backgroundRepeat:"no-repeat",
         backgroundSize:"cover"
     }}
    >
        <HeaderContainer>
            <TextHeader
             variant='h1'
            >
                GRAB THE DELICACIES
            </TextHeader>
            <Typography paragraph
              sx={{
                fontSize:{xs:'30px', md:'40px'},
                fontWeight:'lighter',
                color:'black',
                align:'center'
            
              }}
            >
                COMRADE FOOD AT A CLICK
            </Typography>
            {isBelowMd ? 
            <Link to='/menu' style={{textDecoration:'none', color:'inherit'}}>
            <Button 
             variant='contained'
             sx={{
                '&.MuiButton-root':{
                    width:'200px',
                    padding:2,
                    fontSize:18
                }
             }}
        
            >
                ORDER NOW
            </Button>
            </Link> :
            <Link to='/menu' style={{textDecoration:'none', color:'inherit'}}>
            <Button 
             variant='contained'
             size='large'
             align='center' 
             sx={{
                '&.MuiButton-root':{
                    width:'200px',
                    padding:2.5,
                    fontSize:20
                }
             }}
             
            >
                ORDER NOW
            </Button>
            </Link>
}

        </HeaderContainer>
    </Box>
  )
}

export default Home
