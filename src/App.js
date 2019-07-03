import React, {component} from "react"
import { Switch, NavLink, Route } from "react-router-dom"
import './App.css'

class App extends component{
    constructor(props){
      super(props)
      this.state={

      }
    }
    render(){
      return(
        <div>
          <Switch></Switch>
        </div>
      )
    }
}

export default App    