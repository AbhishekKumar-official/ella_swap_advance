import React, { Component } from 'react'
import banner from "../images/banner.png"
import "./MultiSwap.scss"
class MultiSwap extends Component {
    stop = () => {
        document.getElementById('marquee').stop();
    }

    render() {
        return (
            <div className="main-multiswap">
                <div className="banner text-center d-sm-none d-md-none d-lg-block d-none">
                    <a href="javascript:void(0)">
                        <img src={banner} />
                    </a>
                </div>
                <div className="header-hot-pairs">
                        <h4 className="py-1 pl-2 pr-2 m-0 text-center eth-price d-none d-md-inline-block"> ETH: $1153.19 </h4>
                        <h4 className="py-1 pl-2 pr-2 m-0 text-center gas-price d-none d-md-inline-block">
                            <i className="fa fa-dashboard mr-2"></i>126 GWEI 
                        </h4>
                        <h4 className="py-1 px-2 m-0 hot-pairs-title"> HOT PAIRS
                        <i className="fa fa-fire ml-2"></i>
                        <a href="#" className="hots-info fa fa-question-circle ml-2"></a>
                        </h4>
                        <ul className="p-0 m-0 no-sponsor">
                            <div className="marquee-wrap">
                            <marquee direction="left" behavior="scroll" id="marquee" onmouseover={()=>this.stop()} onmouseout={()=>this.start()}>
                            <li>
                                <a className="ml-3 py-2 hot-pair first" data-hot-pair="POOLZ" data-hot-pair-number="0" href="javascript:void(0)">
                                    <span>#1</span> POOLZ 
                                    <span className="badge badge-success mr-1 align-middle ng-star-inserted"> N </span>
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="YOP" data-hot-pair-number="1" href="javascript:void(0)">
                                    <span>#2</span> YOP 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="PROS" data-hot-pair-number="2" href="javascript:void(0)">
                                    <span>#3</span> PROS 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="COMBO" data-hot-pair-number="3" href="javascript:void(0)">
                                    <span>#4</span> COMBO 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="ROOK" data-hot-pair-number="4" href="javascript:void(0)">
                                    <span>#5</span> ROOK 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="pBTC35A" data-hot-pair-number="5" href="javascript:void(0)">
                                    <span>#6</span> pBTC35A 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="SPI" data-hot-pair-number="6" href="javascript:void(0)">
                                    <span>#7</span> SPI 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="WISE" data-hot-pair-number="7" href="javascript:void(0)">
                                    <span>#8</span> WISE 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="ARCH" data-hot-pair-number="8" href="javascript:void(0)">
                                    <span>#9</span> ARCH 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="DSD" data-hot-pair-number="9" href="javascript:void(0)">
                                    <span>#10</span> DSD 
                                </a>
                            </li>
                            </marquee>
                            </div>
                        </ul>
                    </div>
                    <div className="main-multiswap-container px-4">
                    <div className="page-header row no-gutters py-4">
                        <div className="col-12 col-md-6 text-left mb-0 pr-4 pb-3">
                            <span className="text-uppercase page-subtitle">V0.1.1 DEXTOOLS MULTISWAP</span>
                            <h3 className="page-title">DEXTools MULTISWAP</h3>
                            <small className="p-0 mt-2 m-0 text-muted">Trade many pairs at once</small>
                        </div>
                    </div>
                    <div class="no-card">
                        <div class="no-card-txt-content">
                            <h2>
                                <i class="fa fa-columns fa-2x"></i>
                            </h2>
                            <h3>Search and add pairs</h3>
                            <p>You can add as many pairs as you want in the same view.</p>
                            <div class="autocomplete-class">
                                <div class="autocomplete-container">
                                    <div class="input-container">
                                        <input type="text" placeholder="Add / search pair..." />
                                    </div>
                                </div>
                                <i class="fa fa-search fa-2x mr-2"></i>
                            </div>
                            <p class="text-warning mt-4">
                                <i class="fa fa-times-circle mr-2 close-view"></i>In order for it to work properly, please accept the Uniswap conditions each time you add a pair. 
                            </p>
                        </div>
                    </div>
                    </div>
                    
                    
                    
               
         
         
                    </div>
        )
    }
}
export default MultiSwap