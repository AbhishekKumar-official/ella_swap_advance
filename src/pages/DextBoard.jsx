import React, { Component } from 'react'
import banner from "../images/banner.png"
import unicorn from "../images/uniswap-logo-home.png"
import idex from "../images/idex-logo-home.png"
import tokenInfo from "../images/token-info.png"
import tokenInfo2 from "../images/token-info-2.png"
import sushi from "../images/sushi_logo.jpg"
import mooniswap from "../images/mooniswap_logo.svg"
import kukoin from "../images/kukoin_logo.png"
import "./DextBoard.scss"
class DextBoard extends Component {
    render() {
        return (
            <div className="main-dextboard">
                <div className="banner text-center d-sm-none d-md-none d-lg-block d-none">
                    <a href="javascript:void(0)">
                        <img src={banner} />
                    </a>
                </div>
                <div className="main-dextboard-container container-fluid px-4">
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-6 text-left mb-0 pr-4 pb-3">
                        <span className="text-uppercase page-subtitle">PUBLIC v1.6.2 DEXTools.io</span>
                        <h3 className="page-title">DEXTboard</h3>
                    </div>
                    <div className="row col-12 col-sm-6">
                        <div className="col-12 col-lg-6 text-left mb-0 py-1 px-1 card-burn text-sm-right">
                            <span className="text-uppercase page-subtitle">Next DEXTShare</span>
                            <h3 className="p-0 m-0">2021-02-01 
                            <span className="text-nowrap"> 1,059,915 DEXT 
                            <i className="fa fa-bar-chart ml-2"></i>
                            </span>
                            </h3>
                        </div>
                        <div className="col-12 col-lg-6 text-left mb-0 py-1 px-1 card-burn text-sm-right">
                            <span className="text-uppercase page-subtitle">Next token burn</span>
                            <h3 className="p-0 m-0">2021-02-01 
                            <span className="text-nowrap"> 15,991 DEXT 
                            <i className="fa fa-fire ml-2"></i>
                            </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-6 col-xl-5 py-5">
                        <div className="box-home card-uniswap pb-5">
                            <div className="box-home-header px-3 py-3 m-0 text-right">
                                <img src={unicorn} className="mr-2" />
                                <h4 className="m-0">TOOLS 
                                    <span>UNISWAP V2</span>
                                </h4>
                            </div>
                            <div className="box-home-body px-3 py-2 m-0">
                                <div className="container-fluid p-0">
                                    <div className="row">
                                        <div className="col-12 my-3">
                                            <div className="ng-autocomplete-class">
                                                <div className="autocomplete-container">
                                                    <div className="input-container">
                                                        <input type="text" placeholder="Search pair by symbol / name / pair contract / token contract" />
                                                    </div>
                                                </div>
                                                <i className="fa fa-search fa-2x mr-2"></i>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <a className="my-2 py-2 px-2 card-tool-enabled" href="/app/uniswap/pool-explorer">
                                                <i className="fa fa-chain fa-2x mr-2"></i>
                                                <span>Pool Explorer</span>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a className="my-2 py-2 px-2 card-tool-enabled" href="/app/uniswap/pair-explorer/0x37a0464f8f4c207b54821f3c799afd3d262aa944">
                                                <i className="fa fa-wpexplorer fa-2x mr-2"></i>
                                                <span>Pair Explorer</span>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a className="my-2 py-2 px-2 card-tool-enabled" href="/app/uniswap/big-swap-explorer">
                                                <i className="fa fa-ship fa-2x mr-2"></i>
                                                <span>Big Swap Explorer</span>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a className="my-2 py-2 px-2 card-tool-enabled" href="/app/uniswap/multi-swap">
                                                <i className="fa fa-columns fa-2x mr-2"></i>
                                                <span>MultiSwap</span>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a className="my-2 py-2 px-2 card-tool" href="/app/uniswap/wallet-info">
                                                <i className="fa fa-address-card fa-2x mr-2"></i>
                                                <span>Wallet Info</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-home card-idex mt-5">
                            <div className="stats-small__data ticker-price bg-success px-3 py-2">
                                <span className="stats-small__label mb-1 text-uppercase text-white">Idex 2.0</span>
                                <h6 className="stats-small__value count m-0 text-white">UPGRADING</h6>
                            </div>
                            <div className="box-home-header px-3 py-3 m-0 text-right">
                                <img src={idex} className="mr-2" />
                                <h4 className="m-0">TOOLS 
                                <span>IDEX 2.0</span>
                                </h4>
                            </div>
                            <div className="box-home-body px-3 py-2 m-0">
                                <div className="container-fluid p-0">
                                    <div className="row">
                                        <div className="col-6">
                                            <span className="my-2 py-2 px-2 card-tool">
                                                <i className="fa fa-flash fa-2x mr-2"></i>
                                                <span className="mt-1">Token Catch</span>
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="my-2 py-2 px-2 card-tool">
                                                <i className="fa fa-podcast fa-2x mr-2"></i>
                                                <span className="mt-1">Spread Hunter</span>
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span className="my-2 py-2 px-2 card-tool">
                                                <i className="fa fa-database fa-2x mr-2"></i>
                                                <span className="mt-1">Exchange Data</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 py-5">
                        <div className="box-home">
                            <div className="box-home-header px-3 py-3 m-0 text-right">
                                <a href="#" className="button-help">?</a>
                                <h4 className="m-0">HOT 
                                <span>PAIRS</span>
                                <i className="fa fa-fire ml-2"></i>
                                </h4>
                            </div>
                            <div className="box-home-body px-3 py-2 m-0 box-home-body-fit-height">
                                <h6>
                                    <div> PROS </div>
                                    <div className="wrapper">
                                        <span className="name">
                                            <span>Prosper</span>
                                            <a className="ml-1" href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer"></i>
                                            </a>
                                        </span>
                                        <span className="price text-danger"> $0.385425 </span>
                                    </div>
                                </h6>
                                <ul>
                                    <li>
                                        <div className="info">
                                            <div className="wrapper">
                                                <span className="name"> COMBO </span>
                                                <span className="price text-danger"> $1.941105 </span>
                                            </div>
                                        </div>
                                        <div className="link">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <div className="wrapper">
                                                <span className="name"> pBTC35A </span>
                                                <span className="price text-danger"> $140.4925 </span>
                                            </div>
                                        </div>
                                        <div className="link">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <div className="wrapper">
                                                <span className="name">
                                                    <i className="fa fa-angle-double-up mr-1 text-success"></i> CUDOS 
                                                </span>
                                                <span className="price text-danger"> $0.065419 </span>
                                            </div>
                                        </div>
                                        <div className="link">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <div className="wrapper">
                                                <span className="name">
                                                    <i className="fa fa-angle-double-up mr-1 text-success"></i> DAIQ 
                                                </span>
                                                <span className="price text-danger"> $0.238666 </span>
                                            </div>
                                        </div>
                                        <div className="link">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <div className="wrapper">
                                                <span className="name">
                                                    <i className="fa fa-angle-double-up mr-1 text-success"></i> PRQ 
                                                </span>
                                                <span className="price text-danger"> $0.826016 </span>
                                            </div>
                                        </div>
                                        <div className="link">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <div className="wrapper">
                                                <span className="name">
                                                    <i className="fa fa-angle-double-up mr-1 text-success"></i> WISE 
                                                </span>
                                                <span className="price text-success"> $0.662279 </span>
                                            </div>
                                        </div>
                                        <div className="link">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <div className="wrapper">
                                                <span className="name">
                                                    <i className="fa fa-angle-double-down mr-1 text-danger"></i> SPI 
                                                </span>
                                                <span className="price text-danger"> $10.49786 </span>
                                            </div>
                                        </div>
                                        <div className="link">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <div className="wrapper">
                                                <span className="name">
                                                    <i className="fa fa-angle-double-down mr-1 text-danger"></i> SHARE 
                                                </span>
                                                <span className="price text-success"> $0.601859 </span>
                                            </div>
                                        </div>
                                        <div className="link">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 py-5">
                        <div className="box-home">
                            <div className="box-home-header px-3 py-3 m-0 text-right">
                                <a href="#" className="button-help">?</a>
                                <h4 className="m-0"> HOT 
                                <span>NEWS</span>
                                <i className="fa fa-newspaper-o ml-2"></i>
                                </h4>
                            </div>
                            <div className="box-home-body px-3 py-2 m-0 box-home-body-fit-height">
                                <div>
                                    <div className="news py-3">
                                        <div className="data">
                                            <span className="info has-token">
                                                <span className="badge badge-success mr-2">N</span>
                                                <span className="token-info">
                                                    <img src={tokenInfo} width="22" height="22" className="logo" />
                                                    <span className="symbol">PRQ</span>
                                                    <a href="#" className="fa fa-wpexplorer fa-2x token-action"></a>
                                                </span>
                                                <span className="created text-secondary">2021-01-14, 12:50</span>
                                            </span>
                                            <h3 className="title mt-2 mb-1"> PARSIQ integrates with Aave Protocol </h3>
                                            <p className="p-0 m-0 description"> Aave Custom Streams now available with PARSIQ Monitoring. 
                                            <a target="_blank" className="news-link" href="javascript:void(0)" data-news-link="">
                                                <i className="fa ml-2 fa-external-link"></i>
                                            </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="news py-3">
                                        <div className="data">
                                            <span className="info has-token">
                                                <span className="badge badge-success mr-2">N</span>
                                                <span className="token-info">
                                                    <img src={tokenInfo2} width="22" height="22" className="logo" />
                                                    <span className="symbol">eXRD</span>
                                                    <a href="#" className="fa fa-wpexplorer fa-2x token-action"></a>
                                                </span>
                                                <span className="created text-secondary">2021-01-14, 12:29</span>
                                            </span>
                                            <h3 className="title mt-2 mb-1">  Bitfinex to list E-Radix(eXRD)  </h3>
                                            <p className="p-0 m-0 description">  We’re pleased to announce that Bitfinex will list E-Radix (eXRD). Deposits are now open. Trading and withdrawal of eXRD will commence on 21/01/21  
                                            <a target="_blank" className="news-link" href="javascript:void(0)" data-news-link="">
                                                <i className="fa ml-2 fa-external-link"></i>
                                            </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="news py-3">
                                        <div className="data">
                                            <span className="info has-token">
                                                <span className="token-info">
                                                    <span className="symbol">RARE</span>
                                                    <a href="#" className="fa fa-wpexplorer fa-2x token-action"></a>
                                                </span>
                                                <span className="created text-secondary">2021-01-14, 03:38</span>
                                            </span>
                                            <h3 className="title mt-2 mb-1">  $RARE Uniswap Rewards Doubled!    </h3>
                                            <p className="p-0 m-0 description">   Unique.One has now doubled $RARE rewards to 2200 $RARE daily (New APY ~ 300% +) in appreciation of $RARE holders providing liquidity in the $RARE/ETH Pool on Uniswap.   
                                            <a target="_blank" className="news-link" href="javascript:void(0)" data-news-link="">
                                                <i className="fa ml-2 fa-external-link"></i>
                                            </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-md-7 text-left mb-0 pr-4 pb-3">
                        <h3 className="page-title">DEXTboard upcomings</h3>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-12 col-lg-4 py-5">
                        <div className="box-home card-sushi">
                            <div className="stats-small__data ticker-price bg-success px-3 py-2">
                                <a target="_blank" href="javascript:void(0)">
                                    <span className="stats-small__label mb-1 text-uppercase text-white">GET ACCESS</span>
                                    <h6 className="stats-small__value count m-0 text-white">SOON</h6>
                                </a>
                            </div>
                            <div className="box-home-header px-3 py-3 m-0 text-right">
                                <img src={sushi} className="mr-2" />
                                <h4 className="m-0">TOOLS
                                    <span>SUSHI</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 py-5">
                        <div className="box-home card-mooniswap">
                            <div className="stats-small__data ticker-price bg-success px-3 py-2">
                                <a target="_blank" href="javascript:void(0)">
                                    <span className="stats-small__label mb-1 text-uppercase text-white">GET ACCESS</span>
                                    <h6 className="stats-small__value count m-0 text-white">SOON</h6>
                                </a>
                            </div>
                            <div className="box-home-header px-3 py-3 m-0 text-right">
                                <img src={mooniswap} className="mr-2" />
                                <h4 className="m-0">TOOLS
                                    <span>MOONISWAP</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 py-5">
                        <div className="box-home card-kucoin">
                            <div className="stats-small__data ticker-price bg-success px-3 py-2">
                                <a target="_blank" href="javascript:void(0)">
                                    <span className="stats-small__label mb-1 text-uppercase text-white">GET ACCESS</span>
                                    <h6 className="stats-small__value count m-0 text-white">SOON</h6>
                                </a>
                            </div>
                            <div className="box-home-header px-3 py-3 m-0 text-right">
                                <img src={kukoin} className="mr-2" />
                                <h4 className="m-0">TOOLS
                                    <span>KUCOIN</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default DextBoard