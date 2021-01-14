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
                <div class="page-header row no-gutters py-4">
                    <div class="col-12 col-sm-6 text-left mb-0 pr-4 pb-3">
                        <span class="text-uppercase page-subtitle">PUBLIC v1.6.2 DEXTools.io</span>
                        <h3 class="page-title">DEXTboard</h3>
                    </div>
                    <div class="row col-12 col-sm-6">
                        <div class="col-12 col-lg-6 text-left mb-0 py-1 px-1 card-burn text-sm-right">
                            <span class="text-uppercase page-subtitle">Next DEXTShare</span>
                            <h3 class="p-0 m-0">2021-02-01 
                            <span class="text-nowrap"> 1,059,915 DEXT 
                            <i class="fa fa-bar-chart ml-2"></i>
                            </span>
                            </h3>
                        </div>
                        <div class="col-12 col-lg-6 text-left mb-0 py-1 px-1 card-burn text-sm-right">
                            <span class="text-uppercase page-subtitle">Next token burn</span>
                            <h3 class="p-0 m-0">2021-02-01 
                            <span class="text-nowrap"> 15,991 DEXT 
                            <i class="fa fa-fire ml-2"></i>
                            </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-6 col-xl-5 py-5">
                        <div className="box-home card-uniswap pb-5">
                            <div class="box-home-header px-3 py-3 m-0 text-right">
                                <img src={unicorn} class="mr-2" />
                                <h4 class="m-0">TOOLS 
                                    <span>UNISWAP V2</span>
                                </h4>
                            </div>
                            <div class="box-home-body px-3 py-2 m-0">
                                <div class="container-fluid p-0">
                                    <div class="row">
                                        <div class="col-12 my-3">
                                            <div class="ng-autocomplete-class">
                                                <div class="autocomplete-container">
                                                    <div class="input-container">
                                                        <input type="text" placeholder="Search pair by symbol / name / pair contract / token contract" class="ng-untouched ng-pristine ng-valid" />
                                                    </div>
                                                </div>
                                                <i class="fa fa-search fa-2x mr-2"></i>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <a class="my-2 py-2 px-2 card-tool-enabled" href="/app/uniswap/pool-explorer">
                                                <i class="fa fa-chain fa-2x mr-2"></i>
                                                <span>Pool Explorer</span>
                                            </a>
                                        </div>
                                        <div class="col-6">
                                            <a class="my-2 py-2 px-2 card-tool-enabled" href="/app/uniswap/pair-explorer/0x37a0464f8f4c207b54821f3c799afd3d262aa944">
                                                <i class="fa fa-wpexplorer fa-2x mr-2"></i>
                                                <span>Pair Explorer</span>
                                            </a>
                                        </div>
                                        <div class="col-6">
                                            <a class="my-2 py-2 px-2 card-tool-enabled" href="/app/uniswap/big-swap-explorer">
                                                <i class="fa fa-ship fa-2x mr-2"></i>
                                                <span>Big Swap Explorer</span>
                                            </a>
                                        </div>
                                        <div class="col-6">
                                            <a class="my-2 py-2 px-2 card-tool-enabled" href="/app/uniswap/multi-swap">
                                                <i class="fa fa-columns fa-2x mr-2"></i>
                                                <span>MultiSwap</span>
                                            </a>
                                        </div>
                                        <div class="col-6">
                                            <a class="my-2 py-2 px-2 card-tool" href="/app/uniswap/wallet-info">
                                                <i class="fa fa-address-card fa-2x mr-2"></i>
                                                <span>Wallet Info</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-home card-idex mt-5">
                            <div class="stats-small__data ticker-price bg-success px-3 py-2">
                                <span class="stats-small__label mb-1 text-uppercase text-white">Idex 2.0</span>
                                <h6 class="stats-small__value count m-0 text-white">UPGRADING</h6>
                            </div>
                            <div class="box-home-header px-3 py-3 m-0 text-right">
                                <img src={idex} class="mr-2" />
                                <h4 class="m-0">TOOLS 
                                <span>IDEX 2.0</span>
                                </h4>
                            </div>
                            <div class="box-home-body px-3 py-2 m-0">
                                <div class="container-fluid p-0">
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="my-2 py-2 px-2 card-tool">
                                                <i class="fa fa-flash fa-2x mr-2"></i>
                                                <span class="mt-1">Token Catch</span>
                                            </span>
                                        </div>
                                        <div class="col-6">
                                            <span class="my-2 py-2 px-2 card-tool">
                                                <i class="fa fa-podcast fa-2x mr-2"></i>
                                                <span class="mt-1">Spread Hunter</span>
                                            </span>
                                        </div>
                                        <div class="col-6">
                                            <span class="my-2 py-2 px-2 card-tool">
                                                <i class="fa fa-database fa-2x mr-2"></i>
                                                <span class="mt-1">Exchange Data</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-3 py-5">
                        <div class="box-home">
                            <div class="box-home-header px-3 py-3 m-0 text-right">
                                <a href="#" class="button-help">?</a>
                                <h4 class="m-0">HOT 
                                <span>PAIRS</span>
                                <i class="fa fa-fire ml-2"></i>
                                </h4>
                            </div>
                            <div class="box-home-body px-3 py-2 m-0 box-home-body-fit-height">
                                <h6>
                                    <div> PROS </div>
                                    <div class="wrapper">
                                        <span class="name">
                                            <span>Prosper</span>
                                            <a class="ml-1" href="javascript:void(0)">
                                                <i class="fa fa-wpexplorer"></i>
                                            </a>
                                        </span>
                                        <span class="price text-danger"> $0.385425 </span>
                                    </div>
                                </h6>
                                <ul>
                                    <li>
                                        <div class="info">
                                            <div class="wrapper">
                                                <span class="name"> COMBO </span>
                                                <span class="price text-danger"> $1.941105 </span>
                                            </div>
                                        </div>
                                        <div class="link">
                                            <a href="javascript:void(0)">
                                                <i class="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info">
                                            <div class="wrapper">
                                                <span class="name"> pBTC35A </span>
                                                <span class="price text-danger"> $140.4925 </span>
                                            </div>
                                        </div>
                                        <div class="link">
                                            <a href="javascript:void(0)">
                                                <i class="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info">
                                            <div class="wrapper">
                                                <span class="name">
                                                    <i class="fa fa-angle-double-up mr-1 text-success"></i> CUDOS 
                                                </span>
                                                <span class="price text-danger"> $0.065419 </span>
                                            </div>
                                        </div>
                                        <div class="link">
                                            <a href="javascript:void(0)">
                                                <i class="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info">
                                            <div class="wrapper">
                                                <span class="name">
                                                    <i class="fa fa-angle-double-up mr-1 text-success"></i> DAIQ 
                                                </span>
                                                <span class="price text-danger"> $0.238666 </span>
                                            </div>
                                        </div>
                                        <div class="link">
                                            <a href="javascript:void(0)">
                                                <i class="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info">
                                            <div class="wrapper">
                                                <span class="name">
                                                    <i class="fa fa-angle-double-up mr-1 text-success"></i> PRQ 
                                                </span>
                                                <span class="price text-danger"> $0.826016 </span>
                                            </div>
                                        </div>
                                        <div class="link">
                                            <a href="javascript:void(0)">
                                                <i class="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info">
                                            <div class="wrapper">
                                                <span class="name">
                                                    <i class="fa fa-angle-double-up mr-1 text-success"></i> WISE 
                                                </span>
                                                <span class="price text-success"> $0.662279 </span>
                                            </div>
                                        </div>
                                        <div class="link">
                                            <a href="javascript:void(0)">
                                                <i class="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info">
                                            <div class="wrapper">
                                                <span class="name">
                                                    <i class="fa fa-angle-double-down mr-1 text-danger"></i> SPI 
                                                </span>
                                                <span class="price text-danger"> $10.49786 </span>
                                            </div>
                                        </div>
                                        <div class="link">
                                            <a href="javascript:void(0)">
                                                <i class="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info">
                                            <div class="wrapper">
                                                <span class="name">
                                                    <i class="fa fa-angle-double-down mr-1 text-danger"></i> SHARE 
                                                </span>
                                                <span class="price text-success"> $0.601859 </span>
                                            </div>
                                        </div>
                                        <div class="link">
                                            <a href="javascript:void(0)">
                                                <i class="fa fa-wpexplorer align-middle"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4 py-5">
                        <div class="box-home">
                            <div class="box-home-header px-3 py-3 m-0 text-right">
                                <a href="#" class="button-help">?</a>
                                <h4 class="m-0"> HOT 
                                <span>NEWS</span>
                                <i class="fa fa-newspaper-o ml-2"></i>
                                </h4>
                            </div>
                            <div class="box-home-body px-3 py-2 m-0 box-home-body-fit-height">
                                <div>
                                    <div class="news py-3">
                                        <div class="data">
                                            <span class="info has-token">
                                                <span class="badge badge-success mr-2">N</span>
                                                <span class="token-info">
                                                    <img src={tokenInfo} width="22" height="22" class="logo" />
                                                    <span class="symbol">PRQ</span>
                                                    <a href="#" class="fa fa-wpexplorer fa-2x token-action"></a>
                                                </span>
                                                <span class="created text-secondary">2021-01-14, 12:50</span>
                                            </span>
                                            <h3 class="title mt-2 mb-1"> PARSIQ integrates with Aave Protocol </h3>
                                            <p class="p-0 m-0 description"> Aave Custom Streams now available with PARSIQ Monitoring. 
                                            <a target="_blank" class="news-link" href="javascript:void(0)" data-news-link="">
                                                <i class="fa ml-2 fa-external-link"></i>
                                            </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="news py-3">
                                        <div class="data">
                                            <span class="info has-token">
                                                <span class="badge badge-success mr-2">N</span>
                                                <span class="token-info">
                                                    <img src={tokenInfo2} width="22" height="22" class="logo" />
                                                    <span class="symbol">eXRD</span>
                                                    <a href="#" class="fa fa-wpexplorer fa-2x token-action"></a>
                                                </span>
                                                <span class="created text-secondary">2021-01-14, 12:29</span>
                                            </span>
                                            <h3 class="title mt-2 mb-1">  Bitfinex to list E-Radix(eXRD)  </h3>
                                            <p class="p-0 m-0 description">  We’re pleased to announce that Bitfinex will list E-Radix (eXRD). Deposits are now open. Trading and withdrawal of eXRD will commence on 21/01/21  
                                            <a target="_blank" class="news-link" href="javascript:void(0)" data-news-link="">
                                                <i class="fa ml-2 fa-external-link"></i>
                                            </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="news py-3">
                                        <div class="data">
                                            <span class="info has-token">
                                                <span class="token-info">
                                                    <span class="symbol">RARE</span>
                                                    <a href="#" class="fa fa-wpexplorer fa-2x token-action"></a>
                                                </span>
                                                <span class="created text-secondary">2021-01-14, 03:38</span>
                                            </span>
                                            <h3 class="title mt-2 mb-1">  $RARE Uniswap Rewards Doubled!    </h3>
                                            <p class="p-0 m-0 description">   Unique.One has now doubled $RARE rewards to 2200 $RARE daily (New APY ~ 300% +) in appreciation of $RARE holders providing liquidity in the $RARE/ETH Pool on Uniswap.   
                                            <a target="_blank" class="news-link" href="javascript:void(0)" data-news-link="">
                                                <i class="fa ml-2 fa-external-link"></i>
                                            </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <div class="page-header row no-gutters py-4">
                    <div class="col-12 col-md-7 text-left mb-0 pr-4 pb-3">
                        <h3 class="page-title">DEXTboard upcomings</h3>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-12 col-lg-4 py-5">
                        <div class="box-home card-sushi">
                            <div class="stats-small__data ticker-price bg-success px-3 py-2">
                                <a target="_blank" href="javascript:void(0)">
                                    <span class="stats-small__label mb-1 text-uppercase text-white">GET ACCESS</span>
                                    <h6 class="stats-small__value count m-0 text-white">SOON</h6>
                                </a>
                            </div>
                            <div class="box-home-header px-3 py-3 m-0 text-right">
                                <img src={sushi} class="mr-2" />
                                <h4 class="m-0">TOOLS
                                    <span>SUSHI</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 py-5">
                        <div class="box-home card-mooniswap">
                            <div class="stats-small__data ticker-price bg-success px-3 py-2">
                                <a target="_blank" href="javascript:void(0)">
                                    <span class="stats-small__label mb-1 text-uppercase text-white">GET ACCESS</span>
                                    <h6 class="stats-small__value count m-0 text-white">SOON</h6>
                                </a>
                            </div>
                            <div class="box-home-header px-3 py-3 m-0 text-right">
                                <img src={mooniswap} class="mr-2" />
                                <h4 class="m-0">TOOLS
                                    <span>MOONISWAP</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 py-5">
                        <div class="box-home card-kucoin">
                            <div class="stats-small__data ticker-price bg-success px-3 py-2">
                                <a target="_blank" href="javascript:void(0)">
                                    <span class="stats-small__label mb-1 text-uppercase text-white">GET ACCESS</span>
                                    <h6 class="stats-small__value count m-0 text-white">SOON</h6>
                                </a>
                            </div>
                            <div class="box-home-header px-3 py-3 m-0 text-right">
                                <img src={kukoin} class="mr-2" />
                                <h4 class="m-0">TOOLS
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