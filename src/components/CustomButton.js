import { Button } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const CustomButton = ({icon, text}) => {
    const theme = useTheme();
  return (
    <Button
      component='a'
      color='primary'
      size='small'
      variant='text'
      sx={{
        color:theme.palette.text.primary,
        fontSize:theme.typography.subtitle1,
        fontWeight:'medium',
        textTransform:'uppercase',
        mr:2,
        '&:active':{
            color:theme.palette.primary
        },
        '&:hover':{
            color:theme.palette.primary
        },
        '& svg':{
            mr:0.5
        }
      }}
    >
        {icon} {text}
    </Button>
  )
}

export default CustomButton