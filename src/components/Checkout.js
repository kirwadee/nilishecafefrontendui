import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import SubTotal from './SubTotal';
import { useDispatch, useSelector } from "react-redux"
import CheckoutFood from './CheckoutFood';
import { clearCart } from '../features/cartRedux/cartSlice';

const CheckoutContainer = styled(Box)(({theme})=>({
    display:"flex",
    height:"max-content",
    backgroundColor:"white",
    padding:"20px",
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
        padding:'10px',
        justifyContent:'center',
        alignItems:'center'
    }
}));
const CheckoutLeftContainer = styled(Box)(({theme})=>({

}));
const CheckoutRightContainer = styled(Box)(({theme})=>({

}));

const Checkout = () => {
  const { cartItems } = useSelector(state => state.cart)

  const dispatch = useDispatch()
  return (
    <CheckoutContainer>
        <CheckoutLeftContainer>
            <Box 
              component={"img"}
              src="/assets/meat.png"
              sx={{
                 width:"100%",
                 marginBottom:"10px",
                 height:"100px"
              }}
             />
             <Box>
                <Typography 
                  variant='h4'
                  component={'h1'}
                  sx={{
                    marginRight:"10px",
                    padding:"10px",
                    borderBottom:"2px solid lightgray"
                  }}
                  >
                    Your Food Basket
                </Typography>
                <Button onClick={()=> dispatch(clearCart())} variant='contained' color='secondary'>
                  Clear Food Basket
                </Button>

                {
                  cartItems?.map((food) => (
                    <CheckoutFood 
                      key={food?._id}
                      name={food?.name}
                      image={food?.image}
                      qtyToBuy={food?.qtyToBuy}
                      price={food?.price}
                      food={food}
                     />
                  ))
                }
               
             </Box>
        </CheckoutLeftContainer>
        <CheckoutRightContainer>
            <SubTotal />
        </CheckoutRightContainer>
    </CheckoutContainer>
  )
}

export default Checkout