
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import MyInfo from "./components/MyInfo.js"
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import ToDo from "./components/ToDo.js"
import Firstjs from "./components/First.js"

function Sections(){
return (
  <div>
  <Firstjs />
  <Header />
  <ToDo/>
  </div>
)
}

ReactDOM.render( <Sections />, document.getElementById('root'));
