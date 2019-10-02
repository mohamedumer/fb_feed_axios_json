import React from 'react';
class Todo extends React.Component{
    state={ input:"",textbox:false}

    handleInputChange= event =>{
        this.setState({input: event.target.value})
       
         };

    handleSubmit=e=>{
        this.props.addItem1(this.state.input);
      
        this.setState({input:""});
          }
    

    render(){
        return (<div className="pb-5">
                <textarea type="text" className="form-control " placeholder="Write something here... "
                onChange={this.handleInputChange}  value={this.state.input}/>
                <div className="pb-2" ></div>
                <button className="btn float-right  btn-primary " onClick={this.handleSubmit}>Post</button>
                </div>)
            }
};
 export default Todo;
