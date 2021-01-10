import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLink } from '@fortawesome/free-solid-svg-icons'
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
              <a href="javascript:void(0)" className="nav-link active">
              <i className="fa fa-home fa-2x"></i>
                <span>DEXTboard</span>
              </a>
            </li>
          </ul>
          <h6 className="uniswap">uniswap</h6>
          <ul>
            <li>
              <a href="javascript:void(0)" className="nav-link">
              <i className="fa fa-link fa-2x"></i>
                <span>Pool Explorer</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="nav-link">
              <i className="fa fa-wpexplorer fa-2x"></i>
                <span>Pair Explorer</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="nav-link">
                <i className="fa fa-ship fa-2x"></i>
                <span>Big Swap Explorer</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="nav-link">
              <i className="fa fa-columns fa-2x"></i>
                <span>MultiSwap</span>
              </a>
            </li>
          </ul>
          <h6>Others</h6>
          <ul>
            <li>
              <a href="javascript:void(0)" className="nav-link">
              <i className="fa fa-user fa-2x"></i>
                <span>User Account</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="nav-link">
              <i className="fa fa-cogs fa-2x"></i>
                <span>Configuration</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="nav-link">
              <i className="fa fa-bank fa-2x"></i>
                <span>Buy DEXT</span>
              </a>
            </li>
          </ul>
          <h6>Theme</h6>
          <ul>
            <li>
              <a href="javascript:void(0)" className="nav-link theme-mode">
                <div className="toggle-icon-changer">
                  <i class="theme-icon theme-icon-left fa fa-sun-o"></i>
                  <div class="theme-separator">/</div>
                  <i className="theme-icon theme-icon-right theme-active fa fa-moon-o"></i>
                </div>
                <span>Theme Mode</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}
export default Drawer