import {  Box, styled, Typography } from '@mui/material'
import moment from 'moment';
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import FoodOrderCard from './FoodOrderCard';


const OrderContainer = styled(Box)(({theme})=>({
    padding:"20px",
    margin:"20px 0",
    border:"1px solid lightgray",
    backgroundColor:"white",
    position:"relative"
}));
const OrderID = styled(Typography)(({theme})=>({
    [theme.breakpoints.up('md')]:{
        position:"absolute",
        top:"40px",
        right:"20px"
    },
    [theme.breakpoints.down('md')]:{
        fontSize:"16px"
    }
}));


const OrderPage = ({ order}) => {




  return (
    <OrderContainer>
        <Typography>Order</Typography>
        <Typography>
            { moment(order?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
        </Typography>
        <OrderID>
         { order?._id}
        </OrderID>
           
        {
             order?.foods.map((food) =>(
                <FoodOrderCard
                  key={order?._id}
                  name={food.name}
                  image = {food.image}
                  price = {food.price}
                  qtyToBuy ={food.qtyToBuy}
                 />
             ))
        }

         <CurrencyFormat
            renderText = {(value) => (
                <>
                <Typography variant='h6' sx={{textAlign:"right"}} >
                    Order Total: <strong>{value}</strong>
                </Typography>
                
                </>
            )}
            decimalScale={2}
            value={order?.totalPrice}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Ksh"}
        />

    </OrderContainer>
  )
}

export default OrderPage