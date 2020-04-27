
/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments
 * in the code for some help on accomplishing this one
 *
 * Challenge:
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./TodosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
      console.log("change and hope " + id);

      this.setState((lastState) => {
        let newArr = lastState.todos;
        console.log(lastState.todos);
        newArr[id-1].completed = !(lastState.todos[id-1].completed)
        console.log(lastState.todos.completed);
        return {
          todos : newArr
        }

      })


    //  this.setState((lastState) => {
    //    console.log(lastState)
    //    return lastState;
    //  });
        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem handleChange={this.handleChange} key={item.id} item={item}/>)

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App









/*
import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.addCount = this.addCount.bind(this);
        this.doubleCount = this.doubleCount.bind(this);
        this.halfCount = this.halfCount.bind(this);
    }

    addCount() {
      this.setState((lastState) => {
        return {
          count : lastState.count + 1
        }
      })
    }

    doubleCount(){
      this.setState((lastState) => {
        return {
         count : lastState.count*2
        }
      })
    }


    halfCount(){
      this.setState((lastState) => {
        return {
          count : lastState.count/2
        }
      })

    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.addCount} >Change!</button>
                <button onClick = {this.doubleCount} >Double</button>
                  <button onClick = {this.halfCount} >half</button>
            </div>
        )
    }
}



export default App
*/
