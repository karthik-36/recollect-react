/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

import React from "react"
import ReactDOM from "react-dom"

import App from './components/App.js'

// #1
/*
function App() {
    return (
        <div>
            <Header />
            <Greeting />
        </div>
    )
}
*/
//class A


ReactDOM.render(<App />, document.getElementById("root"))
