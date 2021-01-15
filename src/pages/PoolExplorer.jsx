import React, { Component } from 'react'
import banner from "../images/banner.png"
import unicorn from "../images/uniswap-logo-home.png"
import etherscan from "../images/etherscan.png"
import unicrypt from "../images/unicrypt_v3.svg"
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
                    <div className="main-poolexplorer-container px-4">
                    <div class="page-header row no-gutters py-4">
                        <div class="col-12 col-md-8 text-left mb-0 pr-4 pb-3">
                            <span class="text-uppercase page-subtitle">v0.1.3 UNISWAP POOL TOOLS</span>
                            <h3 class="page-title">Pool Explorer</h3>
                            <small class="p-0 mt-2 m-0 text-muted">Search for new pools, add or remove liquidity in a pair.</small>
                        </div>
                        <div class="col-md-4 text-left mb-0">
                            <div class="card card-small">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item px-3">
                                        <div class="form-row mt-3">
                                            <div class="form-group col-4">
                                                <select class="custom-select custom-select-sm">
                                                    <option value="">View all</option>
                                                    <option value="REMOVE">Removes</option>
                                                    <option value="ADD">Adds</option>
                                                    <option value="NEW">New</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-8">
                                                <input type="text" class="form-control" placeholder="Filter by token" />
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
                            <div class="card-header border-bottom">
                                <h6 class="m-0">Pools activity (last 1 hour(s))
                                <a href="#" class="ml-4">View last 2h</a> - 
                                <a href="#">View last 4h</a>
                                </h6>
                            </div>
                            <div className="card-body p-0 pb-3">
                                <div className="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Token</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Actions</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Token Price USD 
                                                (<a href="javascript:void(0)">ETH</a>)
                                            </th>
                                            <th scope="col">Total Value</th>
                                            <th scope="col">Token Amount</th>
                                            <th scope="col">ETH Amount</th>
                                            <th scope="col">Pool Variation</th>
                                            <th scope="col">Pool Remaining</th>
                                            <th scope="col">Pair Created</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-danger">Remove</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <a href="javascript:void(0)">GFARM2</a>
                                            </td>
                                            <td>1 m 43 s</td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer pools-icon-warning"></i>
                                            </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">ADD</a>
                                            </td>
                                            <td>$1,018.85805584</td>
                                            <td>$239.93</td>
                                            <td>449.7737 CURRY</td>
                                            <td>0.26767 ETH</td>
                                            <td>
                                            <a href="javascript:void(0)" className="badge badge-light">0.11%</a>
                                            </td>
                                            <td>250.68002 ETH</td>
                                            <td>+ 4 days</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="datatable-footer">
                                    <div class="datatable-footer-inner">
                                        <div class="page-count"> 397 total </div>
                                        <div class="datatable-pager">
                                            <ul class="pager">
                                                <li>
                                                    <a role="button" aria-label="go to first page" href="javascript:void(0)">
                                                        <i class="fa fa-step-backward"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a role="button" aria-label="go to previous page" href="javascript:void(0)">
                                                        <i class="fa fa-chevron-left"></i>
                                                    </a>
                                                </li>
                                                <li role="button" class="pages" aria-label="page 23">
                                                    <a href="javascript:void(0)"> 23 </a>
                                                </li>
                                                <li role="button" class="pages" aria-label="page 24">
                                                    <a href="javascript:void(0)"> 24 </a>
                                                </li>
                                                <li role="button" class="pages" aria-label="page 25">
                                                    <a href="javascript:void(0)"> 25 </a>
                                                </li>
                                                <li role="button" class="pages" aria-label="page 26">
                                                    <a href="javascript:void(0)"> 26 </a>
                                                </li>
                                                <li role="button" class="pages active" aria-label="page 27">
                                                    <a href="javascript:void(0)"> 27 </a>
                                                </li>
                                                <li class="disabled">
                                                    <a role="button" aria-label="go to next page" href="javascript:void(0)">
                                                        <i class="fa fa-chevron-right"></i>
                                                    </a>
                                                </li>
                                                <li class="disabled">
                                                    <a role="button" aria-label="go to last page" href="javascript:void(0)">
                                                        <i class="fa fa-step-forward"></i>
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
export default PoolExplorer