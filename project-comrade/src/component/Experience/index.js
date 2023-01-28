import React,{Component} from "react"
import TextField from '@mui/material/TextField';

class Experience extends Component {

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
            <div style={{margin:"0 30px", width:"35%", padding:"20px 40px", borderRadius:"5px", background:"white",boxShadow:"inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)"}}>
                <TextField id="standard-basic" label="Future Domain" variant="standard" />
            </div>
            <div style={{margin:"0 30px", width:"35%", padding:"20px 40px", borderRadius:"5px", background:"white",boxShadow:"inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)"}}>
                <TextField id="standard-basic" label="Skills" variant="standard" />
            </div>
        </div>
    )
    }
}

export default Experience;
