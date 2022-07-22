import * as React from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CustomButton from './CustomButton';
import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha, theme } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import {Link} from 'react-router-dom'
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/userRedux/authSlice';
import {toast} from 'react-toastify'
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    margin:'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
        display:'none'

      },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft:2,
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        display:'none',
      },
    },
  }));

  const Wrapper = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('md')]:{
      flexGrow:0,
      marginLeft:"40px"
    },
    flexGrow:1,
    display:"flex",
    justifyContent:"space-between"
  }))



const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const theme = useTheme()

    const {user, isLoggedOut} = useSelector(state => state.authoslice)
    const {  cartItems} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleLogout = ()=>{
      dispatch(logout())
    }

    React.useEffect(()=>{
      if(isLoggedOut){
        toast.success("Login again to place your order")
      }

      return ()=>{
        dispatch(reset())
      }
    },[isLoggedOut, dispatch])

  return (
    <AppBar position="sticky" 
      sx={{
          top:0,
          border:0,
          backgroundColor:theme.palette.background.default
         }}
       >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
             <RestaurantIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            </Link>
           <Typography
             variant='h6'
             noWrap
             component='a'
             href='/'
             sx={{
                mr:2,
                display:{xs:'none', md:'flex'},
                fontFamily:'monospace',
                fontWeight:700,
                letterSpacing:'.3rem',
                color:'inherit',
                textDecoration:'none'
             }}
           >
            NILISHE CAFE
           </Typography>
           <Box sx={{flexGrow:1, display:{xs:'flex', md:'none'}}}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls = 'menu-appbar'
              aria-haspop='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
                <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical:'bottom',
                horizontal:'left'
              }}
              keepMounted
              transformOrigin={{
                vertical:'top',
                horizontal:'left'
              }}
              open={Boolean(anchorElNav)} 
              onClose={handleCloseNavMenu}  
              sx={{
                display:{ xs:'block', md:'none'}
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
                    <CustomButton 
                      icon={<HomeIcon />}
                      text='Home' 
                    />
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/menu' style={{textDecoration:'none', color:'inherit'}}>
                    <CustomButton 
                      icon={<MenuBookIcon />}
                      text='Menu' 
                    />
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/about' style={{textDecoration:'none', color:'inherit'}}>
                    <CustomButton 
                      icon={<AnnouncementIcon />}
                      text='About' 
                    />
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <Link to='/contact' style={{textDecoration:'none', color:'inherit'}}>
                    <CustomButton 
                      icon={<ContactPageIcon />}
                      text='Contact' 
                    />
                 </Link>   
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/orders' style={{textDecoration:'none', color:'inherit'}}>
                    <CustomButton 
                      icon={<ViewStreamIcon />}
                      text='Orders' 
                    />
                    </Link>
                </MenuItem>
            </Menu>
           </Box>
           <RestaurantIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
           <Typography
             variant='h6'
             noWrap
             component='a'
             href=''
             sx={{
                mr:2,
                display:{xs:'flex', md:'none'},
                flexGrow:1,
                fontFamily:'monospace',
                fontWeight:700,
                letterSpacing:'.1rem',
                color:'inherit',
                textDecoration:'none'
             }}
           >
            NILISHE 
           </Typography>
           <Box sx={{flexGrow:1, display: {xs:'none', md:'flex', justifyContent:"center", alignItems:"center"}}}>
             <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
             <CustomButton 
                icon={<HomeIcon />}
                text='Home' 
             />
             </Link>
             <Link to='/menu' style={{textDecoration:'none', color:'inherit'}}>
              <CustomButton 
                icon={<MenuBookIcon />}
                text='Menu' 
              />
             </Link>
             <Link to='/about' style={{textDecoration:'none', color:'inherit'}}>
              <CustomButton 
                icon={<AnnouncementIcon />}
                text='About' 
               />
            </Link>
            <Link to='/contact' style={{textDecoration:'none', color:'inherit'}}>
             <CustomButton 
                icon={<ContactPageIcon />}
                text='Contact' 
             />
             </Link>
             <Link to='/orders' style={{textDecoration:'none', color:'inherit'}}>
             <CustomButton 
                icon={<ViewStreamIcon />}
                text='Orders' 
             />
             </Link>
           </Box>
           <Box sx={{flexGrow:1, justifyContent:"center", alignItems:"center"}}>
            <Search>
            <SearchIconWrapper>
              <SearchIcon   />

            </SearchIconWrapper>
            <StyledInputBase
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
           </Box>

           <Wrapper>
            
            <Link to="/checkout" style={{marginRight:"15px"}}>
             <IconButton aria-label="cart">
               <StyledBadge badgeContent={ cartItems?.length} color="secondary">
                  <ShoppingCartIcon />
               </StyledBadge>
             </IconButton>
            </Link>
            

            <Tooltip title="Open User Settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p:0}}>
                    <Avatar alt="" src="" />
                </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                {user && 
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>}
                {!user && 
                 <MenuItem  onClick={handleCloseUserMenu}>
                  <Link to="/register" style={{textDecoration:'none', color:'inherit'}}>
                  <Typography textAlign="center">Register</Typography>
                  </Link>
                </MenuItem>}
                {user && 
                 <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogout}>
                    Logout
                  </Typography>
                </MenuItem>}
                {!user && 
                 <MenuItem  onClick={handleCloseUserMenu}>
                  <Link to="/login" style={{textDecoration:'none', color:'inherit'}}>
                  <Typography textAlign="center">Login</Typography>
                  </Link>
                </MenuItem>}
            </Menu>
           </Wrapper>
         </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header