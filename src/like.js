import React from 'react';
import axios from 'axios';
class Like extends React.Component{
   
    state={temp:[]}

    componentDidMount(){
        axios.get("http://localhost:8080/likes")
        .then(response =>{  
            this.setState({ 
                temp :response.data.filter(i=> i.id===this.props.ide)
            });    
        })
    }

    
    Likecount = (l)=>{
        if(this.state.temp[l-1] == null ){
            axios.post("http://localhost:8080/likes",{ like : 1, postID:l })
            .then(hel=>{ 
                     this.setState({
                         temp:[...this.state.temp,hel.data]
                        }) 
                       })
            }
        else{
            axios.put("http://localhost:8080/likes/"+l,{ like :this.state.temp[l-1].like +1,postID:l})
            .then(hel=>{ 
                this.state.temp.splice(l-1,1,hel.data );
                this.setState({temp:this.state.temp})  
                })
             }
         }
      
            
    render(){
         return(
            <li onClick={this.Likecount.bind(this,this.props.ide)} className="col-2  btn btn-light ">
              {this.state.temp.map(i=>{
                  return(
                     <span key={i.id}>{i.like}</span>
                    )
                })
            }  
                &nbsp; Like</li> 
            )
        }
    }
export default Like;