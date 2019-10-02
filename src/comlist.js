import React from 'react';

class Comlist extends React.Component{
   


    render(){
        return(
            <div >{this.props.item3.com.map(j =>{
                
                return(
                   
                    <div className="row mb-1">
                    <ul className="list-group col-9 ">
                        <li  className="list-group-item p-0 "><i key={j.id}>{j.comen}</i></li>
                    </ul>
                    <button onClick={this.props.deletecom.bind(this,j.id)} className="btn btn-primary col-3  p-0">Delete comment</button>
                </div>
                )
            }
        )
    }
            </div>
        )
    }
}

export default Comlist;