import { Box, Button, FormControl, styled, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { useDispatch, useSelector } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom'
import CheckoutFood from '../components/CheckoutFood';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createOrderAction, reset } from '../features/ordersCheckoutRedux/orderSlice';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cartRedux/cartSlice';


const PaymentContainer = styled(Box)(()=>({
    backgroundColor:"white"
}));

const PaymentContainerWrapper = styled(Box)(()=>({
    
}));

const PaymentContainerSection = styled(Box)(({theme})=>({
    display:'flex',
    padding:'25px',
    margin:'0 20px',
    borderBottom:'1px solid lightgray',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column'
    }

}));



const Payment = () => {

    const { user } = useSelector(state => state.authoslice)
    const { cartItems } = useSelector(state => state.cart) 
    const myBasketTotalPrice = cartItems.reduce((acc, food) => acc + food.price * food.qtyToBuy, 10)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const[address, setAddress] = useState('')
    const[payment, setPayment] = useState('')

    const myOrderDetails = {
        foods:cartItems,
        address:address,
        paymentMethod:payment,
        totalPrice:myBasketTotalPrice
    }

    const handleOrder = () => {
        if(!user){
            toast.error("Please Login To Complete Your Order!")
        } else {
            dispatch(createOrderAction(myOrderDetails)) 
        }

    }


    const {isOrderCreated, isLoading, isError, message} = useSelector(state => state.myorderslice)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isOrderCreated){
            toast.success("congrats!, great meal awaits you!")
            localStorage.removeItem("cartItems")
            dispatch(clearCart())
            navigate('/orders')
        }
        return ()=>{
            dispatch(reset())
        }
    },[isError,isOrderCreated, dispatch, message, navigate])

   return (
    <PaymentContainer>
        <PaymentContainerWrapper>
            <Typography 
             variant='h5'
             sx={{
                textAlign:'center',
                padding:'10px',
                fontWeight:400,
                backgroundColor:'rgb(234, 237, 237)',
                borderBottom:'1px solid lightgray'
             }}
             >
              My Food Basket (
                <Link to='/checkout' style={{textDecoration:'none', color:'red'}}>
                    {cartItems?.length} food items
                </Link>
              )
            </Typography>
            <PaymentContainerSection>
                <Box flex={0.2}>
                    <Typography variant='h6'>
                        Delivery Address
                    </Typography>
                </Box>
                <Box flex={0.8}>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='body'>
                        { user?.email}
                    </Typography>
                    <Typography >{user?.phone}</Typography>
                    <TextField
                     autoComplete="given-address"
                     id="address"
                     name="address"
                     label="My Address"
                     type="text"
                     variant='standard'
                     autoFocus
                     onChange={(e)=>setAddress(e.target.value)}
                     />
                     </Box>
                </Box>
            </PaymentContainerSection>
            <PaymentContainerSection>
                <Box flex={0.2}>
                    <Typography variant='h6'>
                        Review Your Food Items And Delivery
                    </Typography>
                </Box>
                <Box flex={0.8}>
                    {
                        cartItems?.map((food)=>(
                            <CheckoutFood
                             key={food._id}
                             name={food.name}
                             image={food.image}
                             price={food.price}
                             qtyToBuy={food.qtyToBuy}
                             food={food}
                             />
                        ))
                    }
                </Box>
            </PaymentContainerSection>
            <PaymentContainerSection>
                <Box flex={0.2}>
                    <Typography variant='h6'>
                        Payment Details
                    </Typography>
                </Box>
                <Box flex={0.8}>
                    <CurrencyFormat 
                     renderText={(value) => (
                        <Typography variant='h5'>Order Total: {value}</Typography>
                     )}
                     decimalScale={2}
                     value={myBasketTotalPrice}
                     displayType={"text"}
                     thousandSeparator={true}
                     prefix={"Ksh"}
                    /> 
                     <FormControl sx={{width:"150px", marginRight:"30px", marginTop:"20px"}} color='secondary'>
                       <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
                        <Select
                          value={payment}
                          label="Payment Method"
                          onChange={(e) => setPayment(e.target.value)}
                         >
                          <MenuItem value={"Pay On Delivery"}>On Delivery</MenuItem>
                        </Select>
                        </FormControl>
                        
                    <Button
                      variant='contained'
                      color='secondary'
                      size='large'
                      sx={{
                        '&.MuiButton-root':{
                            padding:'15px'
                        },
                        marginTop:"20px"
                      }}
                       onClick={handleOrder}
                       disabled = {isLoading ? true : false}
                      >
                        Order Now
                    </Button>
                </Box>
            </PaymentContainerSection>
        </PaymentContainerWrapper>
    </PaymentContainer>
  )
}

export default Payment