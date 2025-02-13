import React from "react";
class Child extends React.Component{
    render(){
        console.log(this.props) //{Child:[{},{},{}]}
        return(
            <>
             <div className="child-container">
                  <ol type="A">
            {this.props.child.map((val,ind)=>(
                           
                    <li>{val.name}</li>
                    
                ))}
                </ol>
                </div>
            <h1>child</h1>
            </>
        )
    }

}


export default Child