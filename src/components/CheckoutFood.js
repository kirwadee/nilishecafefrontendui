import {  Box, Button, ButtonGroup, styled, Typography } from '@mui/material'
import React from 'react'
import { Add, Remove } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { decreaseQty, increaseQty, removeFromCart } from '../features/cartRedux/cartSlice';

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

const ButtonWrapper = styled(Box)(()=>({
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}))

const CheckoutFood = ({ food, name, image, price, qtyToBuy}) => {

  const dispatch = useDispatch()


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
           <ButtonWrapper>
           <ButtonGroup orientation='vertical' size="medium" variant="outlined" color='secondary'>
            <Button startIcon={<Add />} onClick={()=>dispatch(increaseQty(food))} />
            <Box sx={{border:"2px solid pink", width:"40px", display:"flex", justifyContent:"center", alignItems:"center"}}>
              {qtyToBuy}
            </Box>
            <Button startIcon={<Remove />} onClick={()=>dispatch(decreaseQty(food))} />
           </ButtonGroup>
           <Button variant='contained' onClick={()=>dispatch(removeFromCart(food))} sx={{ml:"20px"}}>
            Remove From Basket
           </Button>
           </ButtonWrapper> 
         </FoodInfoContainer>

    </CheckoutContainer>
  )
}

export default CheckoutFood