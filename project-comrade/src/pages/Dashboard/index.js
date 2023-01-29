import React,{Component} from "react"
import Feed from "../../component/Feed";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css"


const rows = [
    {name:"Sheyannsh Goyal", email:"shreyanshgoyal90@gmail.com"},
    {name:"Sheyannsh Goyal", email:"shreyanshgoyal90@gmail.com"},
    {name:"Sheyannsh Goyal", email:"shreyanshgoyal90@gmail.com"},    
  ];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



// function Dashboard(props) {

//     const open = true;
//     let handleClose = ()=>{
//         open =false;
//     }
//     let openDialog = ()=>{
//         open = true;
//     }
//     return (
//         <div>
//         <Dialog open={open} style={{padding:"20px"}} >
//         <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
//         <DialogTitle>Collaborators</DialogTitle>
//         <CloseIcon style={{right:"10px", position:"relative", cursor:"pointer"}} onClick={()=>{handleClose()}} />
//         </div>
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
//                 <TableHead>
//                 <TableRow>
//                     <TableCell>Name</TableCell>
//                     <TableCell align="right">Email</TableCell>
//                 </TableRow>
//                 </TableHead>
//                 <TableBody>
//                 {rows.map((row) => (
//                     <TableRow
//                     key={row.name}
//                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                     >
//                     <TableCell component="th" scope="row">
//                         {row.name}
//                     </TableCell>
//                     <TableCell align="right">{row.email}</TableCell>
//                     </TableRow>
//                 ))}
//                 </TableBody>
//             </Table>
//             </TableContainer>
//         </Dialog>
//             <div onClick={()=>{openDialog()}}>
//                 <Feed />
//             </div>
//             <div>
//                 <Feed/>
//             </div>
//             <div>
//                 <Feed/>
//             </div>
//             <div>
//                 <Feed/>
//             </div>
//         </div>      
//     );
// }

class Dashboard extends Component {


constructor(props){
    super(props);
    this.state={
        open:false
    }
}

openDialog(){
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
        <Dialog open={this.state.open} style={{padding:"20px"}} >
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <DialogTitle>Collaborators</DialogTitle>
        <CloseIcon style={{right:"10px", position:"relative", cursor:"pointer"}} onClick={()=>{this.handleClose()}} />
        </div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Dialog>
            <div onClick={()=>{this.openDialog()}}>
                <Feed />
            </div>
            <div>
                <Feed/>
            </div>
            <div>
                <Feed/>
            </div>
            <div>
                <Feed/>
            </div>
        </div>
    )
    }
}

export default Dashboard;
