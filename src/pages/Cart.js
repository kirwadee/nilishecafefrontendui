import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Grid, Stack, styled, Typography } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "pink",
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  const Wrapper = styled(Box)(({theme})=>({
    display:'flex',
    backgroundColor:'#333',
    color:'white',
    height:'50vh',
    flexDirection:'column',
    [theme.breakpoints.down('md')]:{
      width:'200px',
      height:'30vh'
    }
    
  }));


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ContainerTable = styled(Box)(()=>({
    padding:'30px',
    display:'flex'
}));

const TableWrapper = styled(Box)(({theme})=>({
  [theme.breakpoints.down('md')]:{
    width:'300px',
    paddingX:'20px'
  }
}));

const StyledTable = styled(Table)(({theme})=>({
  [theme.breakpoints.down('md')]:{
    width:'300px',
    paddingX:'20px'
  }
}))

const Cart = () => {
  return (
    <ContainerTable>
        <Grid container
         spacing={2}
         sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
         }}
        >
            <Grid item sx={12} sm={8} md={8}
            >
            <TableWrapper>
             <TableContainer
             sx={{p:'10px'}}
             >
              <StyledTable   aria-label="simple table">
               <TableHead>
                <TableRow>
                  <StyledTableCell>Food</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                 <StyledTableCell align="right">Total</StyledTableCell>
                </TableRow>
               </TableHead>
             <TableBody>
              {rows.map((row) => (
             <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                 <TableCell component="th" scope="row">
                  {row.name}
                 </TableCell>
                 <TableCell align="right">{row.calories}</TableCell>
                 <TableCell align="right">{row.fat}</TableCell>
                 <TableCell align="right">{row.carbs}</TableCell>
                 <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
                ))}
               </TableBody>
              </StyledTable>
             </TableContainer>
             </TableWrapper>
            </Grid>
            <Grid item sx={12} sm={4} md={4}>
                <Wrapper>
                    <Typography align='center' padding={3} >CART TOTAL</Typography>
                    <Stack
                     sx={{
                      justifyContent:'space-around'
                     }}
                    >
                      <Typography>SubTotal</Typography>
                      <Typography>3400</Typography>
                    </Stack>
                    <Stack
                     sx={{
                      justifyContent:'space-around'
                     }}
                    >
                      <Typography>Discount</Typography>
                      <Typography>3400</Typography>
                    </Stack>
                    <Stack
                     sx={{
                      justifyContent:'space-around',
                
                     }}
                    >
                      <Typography>Total</Typography>
                      <Typography >3400444</Typography>
                    </Stack>
                    <Button color='secondary' variant='contained'
                     sx={{
                      '&.MuiButton-root':{
                        width:{xs:'100px', sm:'200px'},
                        alignSelf:'center',
                        marginTop:'15px'
                      }
                     }}
                    >
                      CHECKOUT NOW
                    </Button>
                </Wrapper>
            </Grid>
        </Grid>
    </ContainerTable>
  )
}

export default Cart