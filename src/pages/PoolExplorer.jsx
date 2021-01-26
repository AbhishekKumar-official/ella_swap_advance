import React, { Component } from 'react'
import banner from "../images/banner.png"
import unicorn from "../images/uniswap-logo-home.png"
import etherscan from "../images/etherscan.png"
import unicrypt from "../images/unicrypt_v3.svg"
import BlockbgLight from "../images/block-bg-light.png"
import BlockbgDark from "../images/block-bg.png"

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import logocompressed from "../images/logo-compressed.png"
import $ from "jquery";
import DataTable from "datatables.net"
import "./PoolExplorer.scss"

class PoolExplorer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hotpair:false,
        }
    }

    handleCloseHotPair = () => {
        this.setState({
            hotpair: false
        })
    }
    
    stop = () => {
        document.getElementById('marquee').stop();
    }
    componentDidMount() {
        $("#marquee").mouseenter(function(){
            document.getElementById("marquee").stop();
          });
          $("#marquee").mouseleave(function(){
            document.getElementById("marquee").start();
          });

          
        
        $('[data-toggle="tooltip"]').tooltip();
        $('#pool-table').dataTable();
            // $('#pool-table').DataTable();
            // $(document).ready( function () {
                
            // } );
    }
    

    render() {
        const {hotpair} = this.state;
        return (
            <div className="main-poolexplorer" >
                <div className="banner text-center d-sm-none d-md-none d-lg-block d-none">
                    <a href="javascript:void(0)">
                        <img src={banner} />
                    </a>
                </div>
                <div className="header-hot-pairs" style ={ { backgroundImage: `url(${this.props.theme === "light"? BlockbgLight : BlockbgDark})` } }>
                        <h4 className="py-1 pl-2 pr-2 m-0 text-center eth-price d-none d-md-inline-block"> ETH: $1153.19 </h4>
                        <h4 className="py-1 pl-2 pr-2 m-0 text-center gas-price d-none d-md-inline-block">
                            <i className="fa fa-dashboard mr-2"></i>126 GWEI 
                        </h4>
                        <h4 className="py-1 px-2 m-0 hot-pairs-title"> HOT PAIRS
                        <i className="fa fa-fire ml-2"></i>
                        <a href="javascript:void(0)" className="hots-info fa fa-question-circle ml-2" onClick={()=>{this.setState({hotpair:true})}}></a>
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
                    <div className="main-poolexplorer-container px-4">
                    <div className="page-header row no-gutters py-4">
                        <div className="col-12 col-md-8 text-left mb-0 pr-4 pb-3">
                            <span className="text-uppercase page-subtitle">v0.1.3 UNISWAP POOL TOOLS</span>
                            <h3 className="page-title">Pool Explorer</h3>
                            <small className="p-0 mt-2 m-0 text-muted">Search for new pools, add or remove liquidity in a pair.</small>
                        </div>
                        <div className="col-md-4 text-left mb-0">
                            <div className="card card-small">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-3">
                                        <div className="form-row mt-3">
                                            <div className="form-group col-4">
                                                <select className="custom-select custom-select-sm">
                                                    <option value="">View all</option>
                                                    <option value="REMOVE">Removes</option>
                                                    <option value="ADD">Adds</option>
                                                    <option value="NEW">New</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-8">
                                                <input type="text" className="form-control" placeholder="Filter by token" />
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
                                <h6 className="m-0">Pools activity (last 1 hour(s))
                                <a href="javascript:void(0)" className="ml-4">View last 2h</a> - 
                                <a href="javascript:void(0)">View last 4h</a>
                                </h6>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table" id="pool-table">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Filter by token">
                                                <i className="fa fa-filter pools-icon-warning"></i>
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Buy at Uniswap">
                                                <img src={unicorn} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="0x2d0cc73959d2088fcc2704fba9bb39caef3664d8eb5e7ba6bf3d697be2988c24">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked liquid">
                                                <img src={unicrypt} />
                                            </a>
                                            <a href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Show live data">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <Dialog
            open={hotpair}
            onClose={this.handleCloseHotPair}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
                <img src={logocompressed} alt=""/>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" className="mb-0">
              These pairs are the most viewed by DEXT users in real time, they are shown with a 1 minute delay for free users. These pairs are decided by the community visits and do not represent any investment advice or endorsement from the DEXTools team.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseHotPair} className="btn btn-info">
                Close
              </Button>
            </DialogActions>
          </Dialog>
            </div>
        )
    }
}
export default PoolExplorer