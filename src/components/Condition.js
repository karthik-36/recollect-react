import React from 'react'

/*
function Condition(props){
  console.log(props.isLoading);
  if(props.isLoading){
  return (
    <div>
    <p> truee</p>
    </div>
   )
 }else{
   return (
     <div>
     <p> falsee</p>
     </div>
    )
 }

}
*/



  class Condition extends React.Component{
    constructor(props){
      super(props)
    //  this.state = {
    //    ssta : props.isLoading
    //  }
    }

    render(){
      let sta;
      console.log(this.props.isLoading)
      if(this.props.isLoading === true){
        sta = "true"
      }else{
        sta = "false"
      }

        return (
            <div>
            <p> condition </p>
            <p> loading status is {sta} </p>
            </div>
        )
    }

  }


export default Condition
