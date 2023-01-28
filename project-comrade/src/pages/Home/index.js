import React,{Component} from "react"
import Feed from "../../component/Feed";
import { useNavigate } from 'react-router-dom';
class Home extends Component {

constructor(props) {    
    super(props);
    this.state={
        username:"",
        password:""
    }
}

componentDidMount(){
    let token = window.localStorage.getItem("authToken");
    const { history } = this.props;
    console.log("this is the token", token);
    if(!token){
        history.push("/login")
    }
}

handleOnChange(event,label){
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
        <div>
            <Feed/>
            <Feed/>
            <Feed/>
            <Feed/>
        </div>
    )
    }
}

export default Home;
