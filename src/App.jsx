import { Component } from "react";
import Parent from "./Component/Parent";
import Counter from "./Component/Counter";
import './App.css'
class App extends Component{
  render(){
  let arr=[1,2,3,4]
  let values=["thiru","karu","sai"]
  let obj=[{name:"thiru",age:24,place:"vij"},
    {name:"mani",id:2,age:25,place:"vij"}
  ]
    return(
      <>
      {/* <h1>App</h1> */}
      <Parent arr={arr} values={values} obj={obj}/>
      <Counter/>
      </>
    )
  }
}
export default App