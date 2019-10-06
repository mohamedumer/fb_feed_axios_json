import React from 'react';
import axios from "axios";
class Combox extends React.Component{
   
    state={comment:"",com:[]}
    componentDidMount(){
        axios.get("http://localhost:8080/comments").then(response =>{
            this.setState({ com :response.data.filter(i=> i.postID===this.props.idd)});
            
                
        })
    }


    handlecomment= event =>{  
        this.setState({comment: event.target.value})
               
         };

   addcom = ad => {
 
   axios.post("http://localhost:8080/comments",{comment:this.state.comment,postID:this.props.idd})
   .then(hel=>{
    
    this.setState({
        com:[...this.state.com,hel.data]
       
           },
           () => {
               this.setState({comment:""})
               
              })
   } )      
              }     
    

    deletecom=item=>{
       
        axios.delete("http://localhost:8080/comments/"+item)
        .then(suc=>{
            this.setState({
                com:this.state.com.filter( i => i.id !== item)
                })
        })
    }

    render(){
       
         return(
            <div>
               
                <div className="row ">
                <textarea type="text" className="form-control mb-2" placeholder="Add comment here... "
                    onChange={this.handlecomment}  value={this.state.comment} />
                    <button onClick={this.addcom} className="btn btn-primary  mb-2 "  >Add comment</button>
                </div>
            
           
           <div >{this.state.com.map(j =>{
                return(
                        <div className="row mb-1">
                            <ul className="list-group col-9 ">
                                <li  className="list-group-item p-0 "><i key={j.id}>{j.comment}</i></li>
                            </ul>
                            <button onClick={this.deletecom.bind(this,j.id)} className="btn btn-primary col-3  p-0">Delete comment</button>
                        </div>
                        )
                    }
                )
            }
        </div>
        </div>
            )
        }
    }
export default Combox;