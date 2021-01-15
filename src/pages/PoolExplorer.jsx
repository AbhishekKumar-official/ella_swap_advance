import React, { Component } from 'react'
import banner from "../images/banner.png"
import unicorn from "../images/uniswap-logo-home.png"
import idex from "../images/idex-logo-home.png"
import tokenInfo from "../images/token-info.png"
import tokenInfo2 from "../images/token-info-2.png"
import sushi from "../images/sushi_logo.jpg"
import mooniswap from "../images/mooniswap_logo.svg"
import kukoin from "../images/kukoin_logo.png"
import "./PoolExplorer.scss"
class PoolExplorer extends Component {
    stop = () => {
        document.getElementById('marquee').stop();
    }

    render() {
        return (
            <div className="main-poolexplorer">
                <div className="banner text-center d-sm-none d-md-none d-lg-block d-none">
                    <a href="javascript:void(0)">
                        <img src={banner} />
                    </a>
                </div>
                <div className="main-poolexplorer-container">
                    <div class="header-hot-pairs">
                        <h4 class="py-1 pl-2 pr-2 m-0 text-center eth-price d-none d-md-inline-block"> ETH: $1153.19 </h4>
                        <h4 class="py-1 pl-2 pr-2 m-0 text-center gas-price d-none d-md-inline-block">
                            <i class="fa fa-dashboard mr-2"></i>126 GWEI 
                        </h4>
                        <h4 class="py-1 px-2 m-0 hot-pairs-title"> HOT PAIRS
                        <i class="fa fa-fire ml-2"></i>
                        <a href="#" class="hots-info fa fa-question-circle ml-2"></a>
                        </h4>
                        <ul class="p-0 m-0 no-sponsor">
                            <div className="marquee-wrap">
                            <marquee direction="left" behavior="scroll" id="marquee" onmouseover={()=>this.stop()} onmouseout={()=>this.start()}>
                            <li>
                                <a class="ml-3 py-2 hot-pair first" data-hot-pair="POOLZ" data-hot-pair-number="0" href="javascript:void(0)">
                                    <span>#1</span> POOLZ 
                                    <span class="badge badge-success mr-1 align-middle ng-star-inserted"> N </span>
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="YOP" data-hot-pair-number="1" href="javascript:void(0)">
                                    <span>#2</span> YOP 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="PROS" data-hot-pair-number="2" href="javascript:void(0)">
                                    <span>#3</span> PROS 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="COMBO" data-hot-pair-number="3" href="javascript:void(0)">
                                    <span>#4</span> COMBO 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="ROOK" data-hot-pair-number="4" href="javascript:void(0)">
                                    <span>#5</span> ROOK 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="pBTC35A" data-hot-pair-number="5" href="javascript:void(0)">
                                    <span>#6</span> pBTC35A 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="SPI" data-hot-pair-number="6" href="javascript:void(0)">
                                    <span>#7</span> SPI 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="WISE" data-hot-pair-number="7" href="javascript:void(0)">
                                    <span>#8</span> WISE 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="ARCH" data-hot-pair-number="8" href="javascript:void(0)">
                                    <span>#9</span> ARCH 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="DSD" data-hot-pair-number="9" href="javascript:void(0)">
                                    <span>#10</span> DSD 
                                </a>
                            </li>
                            </marquee>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default PoolExplorer