import React,{Component} from "react"
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./index.css"
class Feed extends Component {

constructor(props) {    
    super();
    this.state={
        open:false
    }
}
handleOnChange(event,label){
    this.setState(prevState=>({
        ...prevState,
        [label]:event.target.value
    }))
}

 openModel()
 {
    this.setState({
        open:true
    })
 }
 handleClose(){
    this.setState({
        open:false
    })
 }
render() {
    return(
        <div> 

        <Dialog open={this.state.open} onClose={this.handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Why are you interested"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Cancel</Button>
          <Button onClick={this.handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
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
            <span className={`interested`} onClick={()=>{this.openModel()}}>Interested</span>
      </Card>
      </div>
    )
    }
}

export default Feed;
