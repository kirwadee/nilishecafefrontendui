import { Add, Remove } from '@mui/icons-material';
import { Box, Button, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getFoodsAction } from '../features/foods/foodSlice';


const FoodContainer = styled(Box)(()=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'80vh',
    width:'100%'
}));
const ImageCard = styled(Box)(({theme})=>({
    height:'30vh',
    width:'100%',
    backgroundSize:'cover',
    [theme.breakpoints.down('md')]:{
        height:'30vh'
    }
}));
const InfoContainer = styled(Box)(()=>({
    flex:1,
    height:'40vh',
    padding:4
}));
const AddContainer = styled(Box)(()=>({
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    paddingX:4
}));

const AmountContainer = styled(Box)(()=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}));
const Amount = styled(Box)(()=>({
    width:'30px',
    height:'30px',
    borderRadius:'10px',
    border:'2px solid pink',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}));

const SingleFoodID = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const foodItem = useSelector(state => state.myfoods.foods.find((food) => food._id === id))
  const [fetchedfood, setFetchedFood] = useState(foodItem)

  



  useEffect(()=>{
    if(!fetchedfood){
        dispatch(getFoodsAction())
    }
    
  },[dispatch, fetchedfood])


    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        if(type == "dec"){
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }
  return (
    <FoodContainer>
      <Box
       boxShadow={5}
       sx={{
        width:'600px',
        height:'70vh',
       }}
      >
        <ImageCard component={'img'} src={fetchedfood?.image} />
        <InfoContainer>
            <Typography variant='h1' fontSize={27} fontWeight={500} padding={1} marginBottom={0} align={'center'} >
                {fetchedfood?.name}
           </Typography>
           <Typography variant='body1'  textAlign={'justify'} paddingX={2}>
              {fetchedfood?.description}
           </Typography>
           <Typography variant='span' fontSize={'25px'} paddingX={2}>
             KES {''} {fetchedfood?.price}
            </Typography>
            <AddContainer>
                <Typography variant='h6'>Plates</Typography>
                <AmountContainer>
                    <Remove onClick={() => handleQuantity("dec")} />
                    <Amount>
                        {quantity}
                    </Amount>
                    <Add onClick={() => handleQuantity("inc")} />
                </AmountContainer>
                <Button
                 variant='contained'
                >
                    Add To Cart
                </Button>
            </AddContainer>
        </InfoContainer>

      </Box>
    </FoodContainer>
  )
}

export default SingleFoodID