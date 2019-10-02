import React from 'react';
import Navbar from "./Navbar";
import Todo  from './Todo';
import Todolist from "./Todolist";
import axios from 'axios';

class App extends React.Component{

    state={list:[],textbox:null} 

    componentDidMount(){
        axios.get("http://localhost:8080/todos").then(response =>{
           
            this.setState({ list:response.data});
            
        })
    }

    

    newbox=(r)=>{
        this.setState({
          textbox:r
        })
    }

  
    
    addItem=(v1)=>{
        axios.post("http://localhost:8080/todos",{title:v1})
        .then(success=>{
            
            this.setState({
           list:[...this.state.list,success.data]
        })
    })
        
    }


    deletefunc=item=>{
       
        axios.delete("http://localhost:8080/todos/"+item)
        .then(success=>{ this.setState({
          
           list:this.state.list.filter( i => i.id !== item)
        })
    })
  }
        
      
    render(){ 
       return (
        <div className="container col-6 mt-5 pb-3 pt-3 bg-light" style={{boxShadow: "4px 6px 25px 0px rgba(0,0,0,0.75)"}}>
        <Navbar/>
        <Todo addItem1={this.addItem} item={this.state}/>
        <Todolist items={this.state} newbox={this.newbox} deletefunc={this.deletefunc} />
       
        
        </div>
       );
   }
}
export default App;