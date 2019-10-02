import React from 'react';
import Comlist from "./comlist";
import axios from "axios";
class Combox extends React.Component{
   
    state={comment:"",com:[]}
    componentDidMount(){
        axios.get("http://localhost:8080/todos").then(response =>{
            this.setState({ com :response.data});
            
        })
    }


    handlecomment= event =>{  
        this.setState({comment: event.target.value})
               
         };

   addcom = ad => {
  console.log(ad)
   axios.post("http://localhost:8080/todos",{comen:this.state.comment})
   .then(hel=>{
    
    this.setState({
        com:[...this.state.com,hel.data]
       
           },
           () => {
               this.setState({comment:""})
                console.log(this.state.com)
              })
   } )      
              }     
    

    deletecom=item=>{
       
        axios.delete("http://localhost:8080/todos/"+item)
        .then(suc=>{
            this.setState({
                com:this.state.com.filter( i => i.id !== item)
                })
        })
    }

    render(){
         return(
            <div>
                <Comlist item3={this.state} deletecom={this.deletecom}/>
                <div className="row ">
                <textarea type="text" className="form-control mb-2" placeholder="Add comment here... "
                    onChange={this.handlecomment}  value={this.state.comment} />
                    <button onClick={this.addcom} className="btn btn-primary  mb-2 "  >Add comment</button>
                </div>
            </div>
           
            )
        }
    }
export default Combox;