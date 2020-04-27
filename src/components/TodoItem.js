
import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => { props.handleChange(props.item.id)
                   console.log("Changed!")}
              }
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem


/*
import React from "react"


class TodoItem extends React.Component {
  constructor(props){
    super()
    this.state = {
      currState : props.item.completed
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this.state);
    this.setState((lastState) => {
      return {
      currState : !(lastState.currState)
     }
    })
  }

  render(){
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={this.state.currState}
                onChange={this.handleClick}
            />
            <p>{this.props.item.text}</p>
        </div>
          )
      }

}
export default TodoItem
*/
