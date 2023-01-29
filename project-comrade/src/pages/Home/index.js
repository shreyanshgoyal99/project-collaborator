import React,{Component} from "react"
import Feed from "../../component/Feed";
import { useNavigate } from 'react-router-dom';
class Home extends Component {

constructor(props) {    
    super(props);
    
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
