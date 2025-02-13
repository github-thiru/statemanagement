state management it used to store  hold the data 
data handle  dynamic and changes overtime
state is an object


setstate is a method that need be invoked


node when ever a specific or particular state value changes whathappen the entire component get re-rendered // updating phase life cycle

<button onclick={this.state.count}></button>

function hanleincrement(){
  count=count+1
}

constructor{
  super()
  this.state={
    count=0
  }
}

update used  in setstate() method

setstate it is a method that need to be invoked

setstate(state)



super()
parent lo unna constructor lo unna properties ni access chesukovali ante super call cheyali


constructor(){
  super()
  this.state{}
}




import React from "react";
class Counter extends React.Component{

}


import { Component } from "react";

class Counter extends Component{
    
}