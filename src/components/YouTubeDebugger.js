// Code YouTubeDebugger Component Here
import React, {Component} from 'react'


export default class YouTubeDebugger extends Component{


constructor(){
  super()
this.state = {
  errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
     }
   }
 }
}


handleResolution=()=>{
  this.setState(state=>({
    settings: {...this.state.settings,
    video: {...this.state.video,
      resolution:'720p'}
    }}
  )
)
}

handleBitRate=()=>{
  this.setState(state=>({
    settings: {...this.state.settings,
    bitrate: 12}}))
  }


render(){
  return(
    <div>
    <button className= "bitrate" onClick={this.handleBitRate}/>
    <button className= "resolution" onClick={this.handleResolution}/>
    </div>
  )
}

}
