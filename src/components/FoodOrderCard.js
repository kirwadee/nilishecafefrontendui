import {  Box, styled, Typography } from '@mui/material'
import React from 'react'


const CheckoutContainer = styled(Box)(({theme})=>({
  display:"flex",
  marginTop:"20px",
  marginBottom:"20px",
  [theme.breakpoints.down('md')]:{
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center'
  }
}));

const ImageContainer = styled(Box)(()=>({
  objectFit:"contain",
  width:"180px",
  height:"180px"
}))

const FoodInfoContainer = styled(Box)(()=>({
  paddingLeft:"20px",
}))



const FoodOrderCard = ({  name, image, price, qtyToBuy}) => {



  return (
    <CheckoutContainer>
        <ImageContainer
          component={'img'}
          src={image}
         />

         <FoodInfoContainer>
          <Typography fontWeight={800} variant='body'>
            {name}
          </Typography>
           <Box>
            <Typography variant='caption'>Ksh</Typography>
            <Typography variant='subtitle'>{price}</Typography>
           </Box> 
           <Box sx={{border:"2px solid pink", width:"40px", display:"flex", justifyContent:"center", alignItems:"center"}}>
              {qtyToBuy}
            </Box>
         </FoodInfoContainer>

    </CheckoutContainer>
  )
}

export default FoodOrderCard