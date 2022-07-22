import { Alert, Box, LinearProgress, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import OrderPage from '../components/OrderPage'
import { getOrdersAction, reset } from '../features/ordersCheckoutRedux/orderSlice'

const OrderContainer = styled(Box)(({theme}) => ({
   padding:"20px 80px",
   [theme.breakpoints.down('md')]:{
    padding:"20px 40px"
   }
}));

const OrdersWrapper = styled(Box)(({theme}) => ({

}))

const MyOrdersPage = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.authoslice)
    const {isLoading, orders, isError, message} = useSelector(state => state.myorderslice)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        
        if(!user){
            toast.error('Login to see your orders')
        } else {
            dispatch(getOrdersAction())
        }

        return ()=>{
            dispatch(reset())
        }

    }, [isError, message])

  return (
    <OrderContainer>
        <Typography
        variant='h5'
         sx={{
            margin:'30px 0px',
            fontWeight:'bold'
         }}
        >
            My Orders
        </Typography>
        <OrdersWrapper>
            {
             isLoading ? <LinearProgress color='secondary' /> 
             : orders?.length <= 0 ? <Alert severity='error'>You have No Pending Orders</Alert> 
             : orders?.map((order) => (
                <OrderPage
                  order = {order}
                 />
             ))

             }
        </OrdersWrapper>
    </OrderContainer>
  )
}

export default MyOrdersPage