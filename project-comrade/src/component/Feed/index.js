import React,{Component} from "react"
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import "./index.css"
class Feed extends Component {

constructor(props) {    
    super();
    this.state={
        interested:false
    }
}
handleOnChange(event,label){
    this.setState(prevState=>({
        ...prevState,
        [label]:event.target.value
    }))
}

toggleInterested(){
    this.setState(prevState=>({
        ...prevState,
        interested:!prevState.interested
    }))
    console.log(this.state);
}

render() {
    return(
        <Card style={{width:"70%", margin:"0 auto", padding:"20px", margin:"20px auto"}}>
            <p style={{fontWeight:"500", fontSize:"20px"}}> The Project Name</p>
            <p> Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description</p>
            <p>Tech Stack</p>
            <div>
            <Chip style={{margin:"0 10px"}} label="React" />
            <Chip style={{margin:"0 10px"}} label="Angular" />
            <Chip style={{margin:"0 10px"}} label="Node" />
            </div>
            <p>Required Tech Stack</p> 
            <div>
            <Chip style={{margin:"0 10px"}} label="React" />
            <Chip style={{margin:"0 10px"}} label="Angular" />
            <Chip style={{margin:"0 10px"}} label="Node" />
            </div>
            {this.interested&&<span className={`interested`}  onClick={()=>{this.toggleInterested()}}>Interested</span>}
            {!this.interested&&<span className={`not-interested`}  onClick={()=>{this.toggleInterested()}}>Interested</span>}
      </Card>
    )
    }
}

export default Feed;
