import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import logocompressed from "../../images/logo-compressed.png"
import logo from "../../images/logo.png"
import "./Drawer.scss"

class Drawer extends Component {
  render() {
    
    return (
      <aside className="col-12 col-md-3 col-lg-2 px-0 drawer">
        <div className="drawer-header">
          <a href="javascript:void(0)" className="logo-compressed">
            <img src={logocompressed} />
          </a>
          <a href="javascript:void(0)" className="logo">
            <img src={logo} />
          </a>
        </div>
        <div className="drawer-body">
          <h6>DEXTboard</h6>
          <ul>
            <li>
              <a href="javascript:void(0)" className="nav-link">
                <FontAwesomeIcon icon={faHome} />
                <span>DEXTboard</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}
export default Drawer