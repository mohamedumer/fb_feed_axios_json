import React from 'react';
import axios from 'axios';
class Like extends React.Component{
   
    state={like:0}

    
    Likecount = (l)=>{
        axios.put("http://localhost:8080/todos/"+{id:1},this.state.like)
        .then(
            this.setState({
                like: this.state.like + 1
            })
        )
               
       
    }
       
    


    render(){
         return(
            <li onClick={this.Likecount} className="col-2  btn btn-light ">{this.state.like} &nbsp; Like</li> 
            )
        }
    }
export default Like;