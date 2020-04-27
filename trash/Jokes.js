import React from 'react'

function Jokes(props){

console.log(props.question + " " + props.punchline);

return (
<div>
<p style = {{ display : props.question ? "block" : "none" }}> question {props.question} </p>
<p style = {{ backgroundColor : props.question ? "#FFFFFF" : "rgba(145,50,245,0.5)"  }}>  punchline {props.punchline} </p>
</div>
)

}

export default Jokes
