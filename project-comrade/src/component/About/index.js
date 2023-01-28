import React,{Component} from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

class About extends Component {

constructor(props) {    
    super();
    this.state={
        username:"",
        password:""
    }
}
handleChange(event,label){
    this.setState(prevState=>({
        ...prevState,
        [label]:event.target.value
    }))
}

submit(){
    console.log("on submitting")
}

render() {
    return(
        <div style={{backgroundColor:'#F5F7F7',display:'flex',justifyContent:"center", height:"80vh",padding:"35px 0px"}}>
            <div style={{margin:"0 30px", width:"45%", padding:"20px 40px", borderRadius:"5px", background:"white",boxShadow:"inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)"}}>
                <p style={{textAlign:"left", fontFamily:"sans-serif", fontWeight:"600"}}>Basic Information</p>
                <div>
                <TextField className="sign-text" style={{width:"100%"}} id="outlined-basic" label="First Name" variant="outlined" />
                <TextField className="sign-text" style={{width:"100%"}} id="outlined-basic" label="Last Name" variant="outlined" />
                <Divider style={{marginBottom:"10px"}} />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"male"}
                    label="Gender"
                    onChange={this.handleChange}
                    >
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"male"}>Male</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                id="outlined-multiline-static"
                label="About You"
                multiline
                rows={4}
                style={{width:"100%", marginTop:"20px"}}
                />
                <Button style={{marginTop:"50px"}} variant="contained">Submit</Button>
                </div>
            </div>
        </div>
    )
    }
}

export default About;
