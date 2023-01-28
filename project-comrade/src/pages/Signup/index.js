import React,{Component} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
class Signup extends Component {

render() {
    return(
        <div>
            <div style={{borderRadius:'5px', margin:'25% auto', height:"30vh", width:'50%', border:'1px solid #e7ebf0', padding:"20% 0px;"}}>
                <div style={{marginTop:"50px"}}>
                <TextField className="sign-text" id="outlined-basic" label="Email" variant="outlined" />
                <TextField className="sign-text" id="outlined-basic" label="Password" variant="outlined" />
                <Button className="sign-button"variant="contained">Sign Up</Button>
                </div>
            </div>
        </div>
    )
    }
}

export default Signup;
