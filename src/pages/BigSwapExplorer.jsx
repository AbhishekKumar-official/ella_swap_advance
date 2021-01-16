import React, { Component } from 'react'
import banner from "../images/banner.png"
import unicorn from "../images/uniswap-logo-home.png"
import etherscan from "../images/etherscan.png"
import unicrypt from "../images/unicrypt_v3.svg"
import "./BigSwapExplorer.scss"
class BigSwapExplorer extends Component {
    stop = () => {
        document.getElementById('marquee').stop();
    }

    render() {
        return (
            <div className="main-bigswapexplorer">
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
                    <div className="main-bigswapexplorer-container px-4">
                    <div className="page-header row no-gutters py-4">
                        <div className="col-12 col-md-6 text-left mb-0 pr-4 pb-3">
                            <span className="text-uppercase page-subtitle">V0.1.0 UNISWAP BIG SWAP EXPLORER</span>
                            <h3 className="page-title">Big Swap Explorer</h3>
                            <small className="p-0 mt-2 m-0 text-muted">Shows latest big swaps in Uniswap with useful information</small>
                        </div>
                        <div className="col-md-6 text-left mb-0 pl-3">
                            <div className="card card-small">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-3">
                                        <div className="form-row mt-3">
                                            <div className="form-group col-4">
                                                <input type="text" className="form-control" placeholder="Filter by token i.e. LINK" />
                                            </div>
                                            <div className="form-group input-group col-8">
                                                <input type="text" className="form-control" placeholder="Enter a USD amount higher than 10000" />
                                                <div class="input-group-append">
                                                    <button type="submit" class="btn btn-info"> Filter </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card card-small mb-4">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Latest big swaps (displaying higher than 10,000USD)</h6>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Pair</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total ETH</th>
                                            <th scope="col">Total USD</th>
                                            <th scope="col">Change</th>
                                            <th scope="col">Others</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-success">buy</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-warning"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">WBTC</a>
                                            </td>
                                            <td>2021-01-16 05:13:59</td>
                                            <td className="text-danger">sell</td>
                                            <td>23,485.29635741</td>
                                            <td>16.05</td>
                                            <td>$19,759.47</td>
                                            <td>
                                            <a href="javascript:void(0)" class="badge badge-light"> 3.657% </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="datatable-footer">
                                    <div className="datatable-footer-inner">
                                        <div className="page-count"> 397 total </div>
                                        <div className="datatable-pager">
                                            <ul className="pager">
                                                <li className="backward">
                                                    <a role="button" aria-label="go to first page" href="javascript:void(0)">
                                                        <i className="fa fa-step-backward"></i>
                                                    </a>
                                                </li>
                                                <li className="chevron-left">
                                                    <a role="button" aria-label="go to previous page" href="javascript:void(0)">
                                                        <i className="fa fa-chevron-left"></i>
                                                    </a>
                                                </li>
                                                <li role="button" className="pages" aria-label="page 1">
                                                    <a href="javascript:void(0)"> 1 </a>
                                                </li>
                                                <li role="button" className="pages" aria-label="page 2">
                                                    <a href="javascript:void(0)"> 2 </a>
                                                </li>
                                                <li role="button" className="pages" aria-label="page 3">
                                                    <a href="javascript:void(0)"> 3 </a>
                                                </li>
                                                <li role="button" className="pages" aria-label="page 4">
                                                    <a href="javascript:void(0)"> 4 </a>
                                                </li>
                                                <li role="button" className="pages active" aria-label="page 5">
                                                    <a href="javascript:void(0)"> 5 </a>
                                                </li>
                                                <li className="disabled chevron-right">
                                                    <a role="button" aria-label="go to next page" href="javascript:void(0)">
                                                        <i className="fa fa-chevron-right"></i>
                                                    </a>
                                                </li>
                                                <li className="disabled forward">
                                                    <a role="button" aria-label="go to last page" href="javascript:void(0)">
                                                        <i className="fa fa-step-forward"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
export default BigSwapExplorer