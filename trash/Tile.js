import React from 'react'

function Tile(props){
  console.log(" props below ");
  console.log(props);
    console.log(props.name);
return (
<div>
<img src = {require("./back.jpg")}  />
<h1> details {`${props.name}`} </h1>
<p> paragraph of things { " and age is " + props.age } </p>
</div>
)
}

export default Tile
