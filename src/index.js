import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { CookBook } from "./components/CookBook"
import "./index.css"

ReactDOM.render(
  
    <React.StrictMode>
        <Router>
            <CookBook />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)

