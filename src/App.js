import React, { Component } from 'react'  
import {Route,Switch} from "react-router-dom"
import Drawer from "../src/Components/Sidebar/Drawer"
class App extends Component {
  render() {
    return (
      <div>
        <Drawer />
          <Switch>
            
          </Switch>
      </div>
    )
  }
}
export default App