import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from '../features/cartRedux/cartSlice';
import {toast} from 'react-toastify'




const MenuCard = ({food}) => {
  const dispatch = useDispatch()

  const foodItemInBasket = useSelector(state => state.cart?.cartItems.find((foodItem) => foodItem._id === food._id))

  const addToBasket = () => {
    if(foodItemInBasket){
      toast.error('Food Already In Basket')
    } else {
      dispatch(addToCart(food))
    }
   
  }

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardHeader
        title={food.name}
      />
      <CardMedia
        component="img"
        height="200"
        image={food.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6">
        Price: {''} KES  {food.price}
        </Typography>
      </CardContent>
      <CardActions >
        <Link to={`/${food._id}`} style={{textDecoration:'none', color:'inherit'}}>
        <Button variant='text' color='secondary'>
          Description...
        </Button>
        </Link>
        <Button variant='contained' color='secondary' sx={{ml:"auto"}} onClick={addToBasket} >
          Add To Basket
        </Button>
        
      </CardActions>
    </Card>
  );
}

export default MenuCard
