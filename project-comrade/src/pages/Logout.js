import React from 'react'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
export const Logout = () => {
  const navigate=useNavigate()
  localStorage.removeItem('jwt')
  navigate('/login')  
  return (
    <CircularProgress/>
  )
}
