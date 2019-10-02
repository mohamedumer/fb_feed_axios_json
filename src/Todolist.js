import React from 'react';
import Like from './like';
import Combox from "./combox";


class Todolist extends React.Component{
            
    render(){

         return(
            
            <ul className="list-group ">
                {this.props.items.list.map( i => {
                    return (
                            
                            <li key={i.id} className="list-group-item mb-5 bg-secondary" >
                                <div className="mb-1">Anonymous user</div>
                                <div className="border rounded px-2 bg-white">{i.title}</div>
                                <div className="container-fluid pt-2 pb-2">
                                    <ul className="row justify-content-between  pl-0">
                                        <li onClick={this.props.deletefunc.bind(this,i.id)} className="col-2 btn btn-light">Delete</li>
                                        <Like />
                                        <li onClick={this.props.newbox.bind(this,i.id)} className="col-2 btn btn-light float-right ">Comment </li>
                                    </ul> 
                                </div>
                                <div>{this.props.items.textbox === i.id && <Combox />}</div>
                                
                            </li>
                      
                            );
                        }
                    )
                }
            </ul>
            )
        }
    }
export default Todolist;