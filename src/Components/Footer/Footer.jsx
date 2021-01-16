import React, { Component } from 'react'
import "./Footer.scss"
class Footer extends Component {
    render() {
        return (
                 
            <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
            <div class="nav text-center">
                <a target="_blank" href="javascript:void(0)">
                    <i class="fa fa-home icon-table mr-1"></i>
                </a>
                <a target="_blank" href="javascript:void(0)">
                    <i class="fa fa-twitter icon-table mr-1"></i>
                </a>
                <a target="_blank" href="javascript:void(0)">
                    <i class="fa fa-telegram icon-table mr-1"></i>
                </a>
                <a target="_blank" href="javascript:void(0)">
                    <i class="fa fa-medium icon-table mr-1"></i>
                </a>
                <a target="_blank" href="javascript:void(0)">
                    <i class="fa fa-gamepad icon-table"></i>
                </a>
            </div>
            <span class="copyright ml-auto my-auto mr-2">© DEXTools.io 2020 - PUBLIC v1.6.4 - info@dextools.io</span>
        </footer>



        )
    }
}
export default Footer