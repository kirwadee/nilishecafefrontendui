import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const SubContainer = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    width:'300px',
    height:'150px',
    padding:'20px',
    backgroundColor:'#f3f3f3',
    border:'1px solid #dddddd',
    borderRadius:'3px',
    [theme.breakpoints.down('md')]:{
        justifyContent:'center',
        alignItems:'center'
    }
}));

const SubTotal = () => {

    const navigate = useNavigate()

    const { cartItems } = useSelector(state => state.cart)
    const basketTotal = cartItems?.reduce((acc, item) => acc + item.qtyToBuy * item.price, 10)
  return (
    <SubContainer>
        <CurrencyFormat
            renderText = {(value) => (
                <>
                <Typography variant='h6' sx={{color:"red"}} >
                    SubTotal ({cartItems?.length} items): <strong>{value}</strong>
                </Typography>
                <Typography variant='caption2' sx={{display:"flex", alignItems:"center"}}>
            
                    Discount Offers on Orders Above Ksh 100
                </Typography>
                <small>This order is inclusive of transportation charges</small>
                </>
            )}
            decimalScale={2}
            value={basketTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Ksh"}
        />
        <Button variant='contained' onClick={()=>navigate('/payment')} color='secondary'>
            Proceed To Checkout
        </Button>
    </SubContainer>
  )
}

export default SubTotal