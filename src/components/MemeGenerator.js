import React from 'react'

class MemeGenerator extends React.Component{
  constructor(){
    super()
    this.state = {
      topText : "",
      bottomText : "",
      randomImage : "http://i.imgflip.com/1bij.jpg",
      arr : []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
      console.log(data.data.memes)
      this.setState((lastState) => {
        return {
        topText : lastState.topText,
        bottomText : lastState.bottomText,
        randomImage : lastState.randomImage,
        arr : data.data.memes
      }
      })
    })

  }

  handleClick(event){
      console.log(Math.floor(Math.random() * 101));
      this.setState((lastState) => {
        return {
        randomImage : lastState.arr[Math.floor(Math.random() * 101)].url
      }
      })
      event.preventDefault()
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })

  }

  render(){
    return (
      <div>
      <form>
        <div>
        <label> toptext </label>
        <input value ={this.state.topText} onChange = {this.handleChange} name= "topText" type = "text"  /> <br />
        </div>
        <div>
        <label> bottomText </label>
        <input value ={this.state.bottomText} onChange ={this.handleChange} name= "bottomText" type = "text"  /> <br />
        </div>
        <div>
        <button onClick = {this.handleClick} > button </button>
        </div>
      </form>
      <div style = {{ position : "relative"}}>
       <img style = {{ position : "absolute" }} src = {this.state.randomImage} />
       <h1 style = {{ position : "absolute" }} >{this.state.topText} </h1>
       <h1 style = {{ position : "absolute",
        top: "50%" ,
        right: "50%"
        }} > {this.state.bottomText} </h1>
      </div>
      </div>
    )
  }




}

export default MemeGenerator
