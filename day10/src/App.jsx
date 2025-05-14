import React from "react"
import Home from "./home"
import Nav from "./components/navbar.jsx/navbar"
import { Content as As } from "./components/navbar.jsx/content"
class Myapp extends React.Component{
  render(){
    return(
      <>
      <Nav></Nav>
      <div>Hello this is my first class based component</div>
      <Home></Home>
      <As></As>
      </>
    )
  }
  
}

export default Myapp