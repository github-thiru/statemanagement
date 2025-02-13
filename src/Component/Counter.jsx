import { Component } from "react";

class Counter extends Component{
  constructor(){
    super()
   this.state={
    count:0     //initial value
   }
  }
   handleincrement=()=>{
       this.setState({count:this.state.count + 2})
   }
   
   
     handledecrement=()=>{
        this.setState({count:this.state.count - 1 })
     }
   
     handlereset=()=>{
      this.setState({count:this.state.count = 0})
     }
  
  render(){
        return( 
     <>
       <div className="counter-container">
     <h1>Counter:{this.state.count}</h1>
     <button  className="btn increment" onClick={this.handleincrement}>Increment 1</button>
     <button  className="btn reset" onClick={this.handlereset}>Reset</button>
     <button   className="btn decrement" onClick={this.handledecrement}>Decrement -1</button>
     </div>
     </>
        )
    }
  
}

export default Counter