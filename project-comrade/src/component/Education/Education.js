import React,{Component} from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

class Education extends Component {

constructor(props) {    
    super();
    this.state={
        formalEducation:false,
        degreeType:"",
        educationInstitution:"",
        graduationMonth:"",
        graduationYear:""
    }
}
handleChange(event,label){
    if(label=="formalEducation"){
        this.setState(prevState=>({
            ...prevState,
            [label]:event.target.checked
        }))       
    }
    else{
        this.setState(prevState=>({
            ...prevState,
            [label]:event.target.value
        }))
    }
    console.log("this is the state", this.state);
}

submit(){
    console.log("on submitting")
}

render() {
    return(
        <div style={{backgroundColor:'#F5F7F7',display:'flex',justifyContent:"center", height:"80vh",padding:"35px 0px"}}>
            <div style={{margin:"0 30px", width:"45%", padding:"20px 40px", borderRadius:"5px", background:"white",boxShadow:"inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)"}}>
                <p style={{textAlign:"left", fontFamily:"sans-serif", fontWeight:"600"}}>Education</p>
                <div>
                <p style={{textAlign:"left", color:"rgb(92, 104, 109)",fontFamily:"sans-serif"}}>The information you provide here helps us in performing analytics.</p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox value={this.state.formalEducation} onChange={(e)=>{this.handleChange(e, "formalEducation")}} />} label="I don't have a formal education" />
                </FormGroup>
                {!this.state.formalEducation && 
                    <div>
                        <Divider  style={{marginBottom:"10px"}} />
                        <FormControl style={{marginTop:"20px"}} fullWidth>
                        <InputLabel id="demo-simple-select-label">Degree Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.degreeType}
                            label="Age"
                            onChange={(e)=>{this.handleChange(e, "degreeType")}}
                        >
                            <MenuItem value={"Associate"}>Associate</MenuItem>
                            <MenuItem value={"Bachelors"}>Bachelors</MenuItem>
                            <MenuItem value={"Masters"}>Masters</MenuItem>
                            <MenuItem value={"PhD"}>PhD</MenuItem>
                            <MenuItem value={"High School"}>High School</MenuItem>
                        </Select>
                        </FormControl>

                        <TextField value={this.state.educationInstitution} onChange={(e)=>{this.handleChange(e, "educationInstitution")}} style={{marginTop:"20px", width:"100%"}} id="outlined-basic" label="Educational Institution" variant="outlined" />
                        <TextField value={this.state.graduationMonth} onChange={(e)=>{this.handleChange(e, "graduationMonth")}} style={{marginTop:"20px", width:"100%"}} id="outlined-basic" label="Month of Graduation" variant="outlined" />
                        <TextField value={this.state.graduationYear} onChange={(e)=>{this.handleChange(e, "graduationYear")}} style={{marginTop:"20px", width:"100%"}} id="outlined-basic" label="Year of Graduation" variant="outlined" />
                    </div>
                }
                <Button style={{marginTop:"50px"}} variant="contained">Submit</Button>
                </div>
            </div>
        </div>
    )
    }
}

export default Education;
