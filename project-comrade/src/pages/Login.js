import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const onEmailChange=(event)=>
    {
         setEmail(event.target.value)
    }
    const onPasswordChange=(event)=>
    {
         setPassword(event.target.value)
    }
    const handleSubmit=async()=>
    {
           const user={email:email,password:password}
            fetch('http://localhost:8000/api/login',{
                  method:'POST',
                  headers:{'content-type': 'application/json'},
                  body:JSON.stringify(user)
            }).then((res)=>
            {
                 return res.json()
            }).then((res)=>
            {
                 localStorage.setItem('jwt',res.token)
                 navigate('/')
            })
    }
  return (
    <div>
    <div style={{borderRadius:'5px', margin:'25% auto', height:"30vh", width:'50%', border:'1px solid #e7ebf0'}}>
        <div style={{marginTop:"50px"}}>
        <TextField value={email} onChange={onEmailChange} className="sign-text" id="outlined-basic" label="Email" variant="outlined" />
        <TextField value={password}onChange={onPasswordChange} className="sign-text" id="outlined-basic" label="Password" variant="outlined"/>
        <Button className="sign-button"variant="contained" onClick={()=>
        {
            handleSubmit()
        }} >Login</Button>
        </div>
    </div>
</div>
  )
}

