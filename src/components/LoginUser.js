import React, {useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link, useNavigate} from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import { useSelector, useDispatch } from 'react-redux';
 import { toast } from 'react-toastify';
import { login, reset } from '../features/userRedux/authSlice';
 

const LoginUser = () => {
    const formik = useFormik({
        initialValues: {
          userName: '',
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          email: Yup.string('Enter email').email('Invalid email address').required('Email is required'),
          password: Yup.string('Enter password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        }),
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        dispatch(login(values))
        },
      });

      const dispatch = useDispatch()
      const navigate = useNavigate()

      const {user, isSuccess, isError, message} = useSelector(state => state.authoslice)

      useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess){  
            toast.success("Login Success! You can now complete your orders")
            navigate('/', {replace : true})
        }

        return ()=>{
            dispatch(reset())
        }
      },[isError, isSuccess, dispatch ])



  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Box component="form"  onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
          <Link to="/register" style={{textDecoration:'none', color:'inherit'}}>
            <Typography variant="body2">
            {"Don't have an account? Sign Up"}
            </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Box sx={{mt:8}} />
  </Container>
  )
}

export default LoginUser