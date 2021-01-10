import React, { Component } from 'react'

class Drawer extends Component {
  render() {
    
    return (
      <div>
        DRAWER COMPONENT.
        <button onClick = {this.props.themeToggler}>Change Theme</button>
      </div>
    )
  }
}
export default Drawer