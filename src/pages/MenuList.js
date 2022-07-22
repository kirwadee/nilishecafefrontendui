import { Alert, Box, CircularProgress, Grid, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import MenuCard from '../components/MenuCard';
import { data } from '../fakeData/data';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodsAction, reset } from '../features/foods/foodSlice';
import LinearProgress from '@mui/material/LinearProgress';

const MenuContainer = styled(Box)(({theme}) => ({
    display:'flex',
    height:'max-content',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    padding:'2.5rem',
    marginX:"auto"
}));

const MenuListWrapper = styled(Box)(({theme})=>({
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}))

const MenuList = () => {
  const dispatch = useDispatch();
  const {foods, isError, message, isLoading} = useSelector(state => state.myfoods)

  useEffect(()=>{
    if(isError){
      <Alert severity='error'>{message}</Alert>
    }
    dispatch(getFoodsAction())

    return ()=>{
      dispatch(reset())
    }
  },[isError, dispatch])
  return (
    <MenuContainer>
        <Typography
          align='center'
          sx={{
            fontSize:'2rem',
            marginBottom:'0rem',
          }}
         >
            Delicious And Affordable Meals
        </Typography>
        <Typography
          sx={{
            fontSize:"1.2rem",
            marginTop:" 0.5rem",
            width: "80%",
            textAlign: "justify",
            marginBottom: "1.5rem",
            
          }}
        >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque commodi fugit iste, 
        </Typography>
        <MenuListWrapper>
            <Grid 
             container
             spacing={2}
             sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
             }}
             >
            {
              isLoading ? <CircularProgress color='secondary' /> : 
              ( foods.map((food) =>(
                <Grid item xs={12} sm={3} md={4} lg={3} spacing={2}>
                    <MenuCard key={food.id} food={food}/>
                </Grid>
            )))
            }
            </Grid>
            
        </MenuListWrapper>  
    </MenuContainer>
  )
}

export default MenuList