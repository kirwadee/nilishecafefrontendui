import React, {useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../features/userRedux/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
 

const RegisterUser = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
          userName: '',
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          userName: Yup.string('Enter username')
            .min(4, 'Must not be less than 4 characters')
            .max(15, 'Must be 15 characters or less')
            .required('Username is required'),
         phone: Yup.string('Enter phone')
            .min(10, 'Must not be less than 10 characters')
            .max(13, 'Must be 13 characters or less')
            .required('Phone number is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
         
        }),
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        dispatch(register(values))
          
        },
      });

      const {isSuccess, isError, message} = useSelector(state => state.authoslice)

      useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess){  
            toast.success("User Created Successfully")
            navigate('/login', {replace : true})
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
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form"  onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              id="userName"
              name="userName"
              label="Username"
              type="text"
              fullWidth
              autoFocus
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-phone"
              id="phone"
              name="phone"
              label="Phone Number"
              type="text"
              fullWidth
              autoFocus
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
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
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login" style={{textDecoration:'none', color:'inherit'}}>
            <Typography href="#login" variant="body2">
              Already have an account? Sign in
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

export default RegisterUser