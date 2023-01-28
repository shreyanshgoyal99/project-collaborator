import React,{Component} from "react"
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import "./index.css"

class Experience extends Component {

constructor(props) {    
    super();
    this.state={
        skills:[],
        futureDomain:[],
        skill:"",
        domain:""
    }
}
handleChange(event,label){
    this.setState(prevState=>({
        ...prevState,
        [label]:event.target.value
    }))
}
deleteSkill(skill){
    let skills = this.state.skills.filter(e=>e!==skill);
    this.setState(prevState=>({
        ...prevState,
        skills
    }))
}

deleteDomain(domain){
    let futureDomain = this.state.futureDomain.filter(e=>e!==domain);
    this.setState(prevState=>({
        ...prevState,
        futureDomain
    }))
}

handleKeyDown(event,label){

    if (event.key == 'Enter') {
        this.setState(prevState=>({
        ...prevState,
        [label]:[...prevState[label],event.target.value]
    }))
    }
    console.log(this.state);
}

submit(){
    console.log("on submitting")
}

render() {
    return(
        <div style={{backgroundColor:'#F5F7F7',display:'flex',justifyContent:"center", height:"80vh",padding:"35px 0px"}}>
            <div style={{margin:"0 30px", width:"35%", padding:"20px 40px", borderRadius:"5px", background:"white",boxShadow:"inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)"}}>
            {this.state.futureDomain.map(domain=>(
            <CardContent className="delete" style={{background:"#3A6EFA", borderRadius:"5px"}}>
                {domain}
                <DeleteIcon onClick={()=>{this.deleteDomain(domain)}} className="deleteIcon"/>
            </CardContent>
            ))}
                <TextField id="standard-basic" onKeyDown={(e)=>{this.handleKeyDown(e,"futureDomain")}}  onChange={(e)=>{this.handleChange(e, "domain")}} style={{marginTop:"20px", width:"100%"}} label="Future Domain" variant="standard" />
            </div>
            <div style={{margin:"0 30px", width:"35%", padding:"20px 40px", borderRadius:"5px", background:"white",boxShadow:"inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)"}}>
            {this.state.skills.map(skill=>(
            <CardContent className="delete" style={{background:"#3A6EFA", borderRadius:"5px"}}>
                {skill}
                <DeleteIcon onClick={this.deleteSkill(skill)} className="deleteIcon"/>
            </CardContent>
            ))}
                <TextField id="standard-basic"  onKeyDown={(e)=>{this.handleKeyDown(e,"skills")}}  onChange={(e)=>{this.handleChange(e, "skill")}} style={{marginTop:"20px", width:"100%"}} label="Skills" variant="standard" />
            </div>
        </div>
    )
    }
}

export default Experience;
