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
                <p style={{textAlign:"left", fontFamily:"sans-serif", fontWeight:"600"}}>Education</p>
                <div>
                <p>The information you provide here helps us in performing analytics.</p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="I don't have a formal education" />
                </FormGroup>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Degree Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"Associate"}
                    label="Age"
                    onChange={this.handleChange}
                >
                    <MenuItem value={10}>Associate</MenuItem>
                    <MenuItem value={20}>Bachelors</MenuItem>
                    <MenuItem value={30}>Masters</MenuItem>
                    <MenuItem value={20}>PhD</MenuItem>
                    <MenuItem value={30}>High School</MenuItem>
                </Select>
                </FormControl>

                <TextField id="outlined-basic" label="Educational Institution" variant="outlined" />
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="I currently study here" />
                </FormGroup>
                <TextField id="outlined-basic" label="Month of Graduation" variant="outlined" />
                <TextField id="outlined-basic" label="Year of Graduation" variant="outlined" />
                <Button style={{marginTop:"50px"}} variant="contained">Submit</Button>
                </div>
            </div>
        </div>
    )
    }
}

export default Education;
