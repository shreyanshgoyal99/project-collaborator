import React,{ useState} from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export const About= () => {
    const [firstname,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [gender,setGender]=useState('')
    const [aboutyou,setAboutYou]=useState('')
    const handleFirstName=(event)=>
    {
          setFirstName(event.target.value)
    }
    const handleLastName=(event)=>
    {
         setLastName(event.target.value)
    }
    const handleGender=(event)=>
    {
        setGender(event.target.value)
    }
    const handleAboutyou=(event)=>
    {
        setAboutYou(event.target.value)
    }
    const handleOnclick=async ()=>
    {
        const userDetail={firstname:firstname,lastName:lastName,gender:gender,aboutyou:aboutyou}
        fetch('http://localhost:8000/api/update-profile',{
            method:'Post',
            headers:{
                  authorization:`Bearer ${localStorage.getItem('jwt')}`,
                 'content-type': 'application/json'
            },
            body:JSON.stringify(userDetail)
        }).then((res)=>
        {
              setAboutYou('')
              setGender('')
              setFirstName('')
              setLastName('')
        })
    }
    return(
        <div style={{backgroundColor:'#F5F7F7',display:'flex',justifyContent:"center", height:"80vh",padding:"35px 0px"}}>
            <div style={{margin:"0 30px", width:"45%", padding:"20px 40px", borderRadius:"5px", background:"white",boxShadow:"inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)"}}>
                <p style={{textAlign:"left", fontFamily:"sans-serif", fontWeight:"600"}}>Basic Information</p>
                <div>
                <TextField value={firstname} onChange={handleFirstName} className="sign-text" style={{width:"100%"}} id="outlined-basic"  label="First Name" variant="outlined" />
                <TextField value={lastName} onChange={handleLastName} className="sign-text" style={{width:"100%"}} id="outlined-basic"  label="Last Name" variant="outlined" />
                <Divider style={{marginBottom:"10px"}} />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleGender}
                    label="Gender"
                    >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                id="outlined-multiline-static"
                label="About You"
                multiline
                onChange={handleAboutyou}
                value={aboutyou}
                rows={4}
                style={{width:"100%", marginTop:"20px"}}
                />
                <Button style={{marginTop:"50px"}} variant="contained" onClick={handleOnclick}>Submit</Button>
                </div>
            </div>
        </div>
  )
}

