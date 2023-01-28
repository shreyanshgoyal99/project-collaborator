import React,{Component} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
class Signup extends Component {
    constructor(props) {    
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    handleOnChange(event,label){
        this.setState(prevState=>({
            ...prevState,
            [label]:event.target.value
        }))
    }
    
    onSubmit(){
       const user ={email:this.state.email,password:this.state.password}
    }
render() {
    return(
        <div>
            <div style={{borderRadius:'5px', margin:'25% auto', height:"30vh", width:'50%', border:'1px solid #e7ebf0'}}>
                <div style={{marginTop:"50px"}}>
                <TextField className="sign-text" id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{this.handleOnChange(e, "email")}}/>
                <TextField className="sign-text" id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>{this.handleOnChange(e, "password")}}/>
                <Button className="sign-button"variant="contained" onClick={this.onSubmit}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
    }
}

export default Signup;
