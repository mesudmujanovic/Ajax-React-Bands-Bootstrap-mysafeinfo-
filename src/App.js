import React, { Component } from "react";
import ListBands from "./ListBands";
import Navbar from "./Navbar";
import Modal from "./Modal";
class App extends Component {

state={
 bands:[],
 currentBand:{}
}

changeCurrentBand = (band)=>{
 this.setState({currentBand:band})
}


componentDidMount(){
 fetch('https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json')
 .then(res=>{
  return res.json();
 })
 .then(data=>{
  this.setState({bands:data})
  console.log(data);
 })
}

 render(){
  return(
<>
<Navbar/>
<ListBands bands={this.state.bands} changeCurrentBand={this.changeCurrentBand}/>
<Modal currentBand={this.state.currentBand}/>
</>

  )
 }
}

export default App;
