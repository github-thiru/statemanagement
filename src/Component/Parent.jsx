import React  from "react";
import Child from "./Child";


class Parent extends React.Component {
  render(){
    // console.log(this.props.obj.name)
    let name=""
    return(
  <div className="parent-container">
    {name ? <Child child={this.props.obj}/>:<h4>There is no name provide default Here I am write a  conditional rendering</h4>}
        {/* <h1>parent</h1> */}
        {/* <Child child={this.props.obj}/> */}
        </div>
    )
  }
}


export default  Parent