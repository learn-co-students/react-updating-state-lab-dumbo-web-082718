// Code DigitalClicker Component Here
import React, {Component} from 'react'


export default class DigitalClicker extends Component{



constructor(){
  super()
this.state = {timesClicked: 0}
}


handleClick=()=>{
  this.setState(state => ({
  timesClicked: state.timesClicked+1}))
}

render(){
  return(
    <button timesClicked={this.state.timesClicked} onClick={this.handleClick}>{this.state.timesClicked}</button>
  )
}

}
