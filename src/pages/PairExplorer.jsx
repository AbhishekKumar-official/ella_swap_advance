import React, { Component } from 'react'
import banner from "../images/banner.png"
import logoBig from "../images/logo-big.png"
import etherscan from "../images/etherscan.png"
import unicrypt from "../images/unicrypt_v3.svg"
import teamBright from "../images/team-bright.png"
import coingecko from "../images/coingecko.png"
import dextWhiteLogo from "../images/dext-white-small.png"
import CandleChart from "../commons/CandleChart"

import "./PairExplorer.scss"
class PairExplorer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="main-pairexplorer">
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
                                    <span>#1</span> YOP  
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="YOP" data-hot-pair-number="1" href="javascript:void(0)">
                                    <span>#2</span>  POOLZ
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
                    <div className="main-pairexplorer-container px-4">
                    <div className="page-header row no-gutters py-4">
                        <div class="col-12 col-md-8 text-left mb-0 pr-4 pb-3">
                            <span class="text-uppercase page-subtitle">v0.3.0 UNISWAP PAIR EXPLORER</span>
                            <h3 class="page-title mt-1">
                                <span class="d-none d-lg-inline-block img-logo">
                                    <img src={logoBig} width="50" class="mt-2" />
                                </span>
                                <div className="erc-wallet-wrap">
                                    <span class="erc-wallet mr-3">
                                        <span class="d-inline-block align-middle mr-1">ETH /</span>
                                        <strong class="d-inline-block align-middle">DEXT</strong>
                                    </span>
                                    <div class="mt-2 d-inline-block align-bottom">
                                        <a target="blank" href="javascript:void(0)">
                                        <img src={etherscan} />
                                        </a>
                                        <a target="blank" href="javascript:void(0)">
                                        <img src={unicrypt} class="ml-2" />
                                        </a>
                                        <a target="blank" href="javascript:void(0)">
                                        <img src={teamBright} class="ml-2 team-lock-icon" />
                                        </a>
                                        <a target="blank" href="javascript:void(0)">
                                        <img src={coingecko} class="ml-2" />
                                        </a>
                                        <a target="blank" href="javascript:void(0)">
                                            <i class="fa fa-envelope text-light ml-2"></i>
                                        </a>
                                        <a target="blank" href="javascript:void(0)">
                                            <i class="fa fa-telegram text-light ml-2"></i>
                                        </a>
                                        <a target="blank" href="javascript:void(0)">
                                            <i class="fa fa-twitter text-light ml-2"></i>
                                        </a>
                                        <a target="blank" href="javascript:void(0)">
                                            <i class="fa fa-desktop text-light ml-2"></i>
                                        </a>
                                    </div>
                                    <div class="page-title-more-data">
                                        <div class="mr-2 d-inline-block">(DEXTools)</div>
                                        <div class="d-inline-block mt-2">
                                            <small class="p-0 m-0 text-muted">Token contract: 
                                            <span class="mr-1">...32478a9fe55197166</span>
                                            <a href="javascript:;" placement="top" class="fa fa-copy text-muted text-decoration-none d-inline-block"></a>
                                            </small>
                                            <small class="p-0 ml-2 m-0 text-muted">
                                                <span class="mr-1">- Pair</span>
                                                <a href="javascript:;" placement="top" class="fa fa-copy text-muted text-decoration-none d-inline-block"></a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </h3>
                        </div>
                        <div class="col-md-4 text-left mb-0">
                            <div class="card card-small">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item px-3">
                                        <div class="form-row mt-3">
                                            <div class="form-group col-12">
                                                <input type="text" class="form-control" placeholder="Search pair by symbol / name / pair contract / token contract" />
                                                <i class="fa fa-search fa-2x mr-2"></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div class="col-12 col-md-4 col-xl-2">
                            <div class="card card-small">
                                <div class="card-header border-bottom position-relative favorites-header">
                                    <a href="#" class="button-help">?</a>
                                    <h6 class="m-0 mr-4">Favorites 
                                    <a href="#" class="d-xl-none">
                                        <i class="fa mx-3 float-right fa-eye-slash"></i>
                                    </a>
                                </h6>
                            </div>
                            <div class="card-body p-0 pb-3">
                                <ul class="favorite-pairs p-0 m-0"></ul>
                                <div class="alert mb-0">
                                    <i class="fa fa-info mx-2"></i>No pairs saved 
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 d-none d-md-block banner-dext">
                            <a target="_blank" class="mini-banner" href="javascript:void(0)">
                                <div class="info">
                                    <div class="title">
                                        <span class="project">
                                        <img src={dextWhiteLogo} width="17" class="logo" alt="Dext" />
                                            <span class="name">DEXT</span>
                                        </span>
                                        <span class="extra">FORCE</span>
                                        <div class="sub">VENTURES</div>
                                    </div>
                                    <div class="description">invest early stage projects</div>
                                </div>
                                <div class="action text-white">
                                    <div class="text">GO!</div>
                                    <i class="fa fa-arrow-right icon"></i>
                                    <i class="fa fa-arrow-right icon icon-extra"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-md-8 col-xl-3 text-center text-sm-left mt-3 mt-md-0 pair-container">
                            <ul class="token-info-list pb-3">
                                <li class="text-right pair-name mt-2 mb-4">
                                    <button type="button" class="btn btn-icon-absolute float-left d-none d-xl-block btn-collapse-col btn-secondary rounded-right">
                                        <i class="fa fa-rotate-180 fa-sign-in"></i>
                                    </button>
                                    <button type="button" class="btn btn-info btn-icon-absolute ml-2">
                                        <i class="fa fa-share-alt"></i>
                                    </button>
                                    <button type="button" class="btn btn-success btn-icon-absolute ml-2">
                                        <i class="fa fa-star-o"></i>
                                    </button>
                                    <a target="_blank" class="btn btn-salmon btn-icon-absolute ml-2 trade-uniswap" href="javascript:void(0)" data-uniswap-trade="DEXT">Trade </a>
                                </li>
                                <li class="pair-price text-right text-danger">
                                    <i class="fa icon-arrow-price mr-1 fa-arrow-circle-down text-danger"></i> $0.10831127
                                </li>
                                <li class="text-right mb-4">
                                    <span class="text-success">(24h : 12.19%)</span> 0.00008943 ETH 
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Total liquidity:</span>
                                    <span class="data-volume-right pl-1">$1,312,712.69</span>
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Daily volume:</span>
                                    <span class="data-volume-right pl-1">$214,607.14</span>
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Pooled ETH:</span>
                                    <span class="data-volume-right pl-1">541.96</span>
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Pooled DEXT:</span>
                                    <span class="data-volume-right pl-1">6,046,728.30</span>
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Total tx: </span>
                                    <span class="data-volume-right pl-1">59433</span>
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Holders:</span>
                                    <span class="data-volume-right pl-1">4277</span>
                                </li>
                                <li class="my-1 data-volume text-info data-volume-link">
                                    <span class="data-volume-right">
                                        <i class="fa fa-info-circle icon-arrow-price text-info mr-2"></i>View more info 
                                    </span>
                                </li>
                            </ul>
                            <div>
                                <div class="dext-score">
                                    <div class="dext-score-title">DEXT Score</div>
                                    <div class="dext-score-chart">
                                        <div class="dext-score-value text-success">99</div>
                                    </div>
                                </div>
                                <div class="vote-score p-4">
                                    <div class="vote-score-title text-center">
                                        <a href="#" class="fa fa-info-circle icon-arrow-price text-info mr-1 action"></a> Community trust  (330 votes) 
                                    </div>
                                    <div class="progress-hand text-center">
                                        <i placement="top" class="fa fa-thumbs-o-up"></i>
                                        <span class="text-success"> 99.4% </span>
                                    </div>
                                    <div class="progress progress-sm">
                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
                                    </div>
                                    <div class="progress-hand text-center">
                                        <i placement="top" class="fa fa-thumbs-o-down"></i>
                                        <span> 0.6% </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-7">
                            <div className="tradingview">
                            <div className="candle_stick_chart">
                                <CandleChart />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-4 order-xl-1 col-xl-2">
                            <div class="box-home">
                                <div class="box-home-header px-3 py-3 m-0 text-right">
                                    <a href="javascript:" class="button-help">?</a>
                                    <h4 class="m-0">TOKEN 
                                    <span>NEWS</span>
                                    </h4>
                                </div>
                                <div class="box-home-body news px-3 py-1 m-0">
                                    <div>
                                        <div class="news py-3">
                                            <div class="data">
                                                <span class="info">
                                                    <span class="created text-secondary">2021-01-10, 06:27</span>
                                                </span>
                                                <h3 class="title mt-2 mb-1 mb-2"> DEXTForce Ventures Release </h3>
                                                <p class="p-0 m-0 description"> Empowering the DEXTools community with opportunities to consider early stage investments. 
                                                <a target="_blank" class="news-link" href="javascript:void(0)" data-news-link-token="DEXT" data-news-link="javascript:void(0)">
                                                    <i class="fa ml-2 fa-external-link"></i>
                                                </a>
                                                </p>
                                                <span class="votes d-block text-right mt-2">
                                                    <span>
                                                        <i class="fa mr-1 fa-thumbs-o-up"></i>25 
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="news py-3">
                                            <div class="data">
                                                <span class="info">
                                                    <span class="created text-secondary">2021-01-07, 15:38</span>
                                                </span>
                                                <h3 class="title mt-2 mb-1 mb-2"> DEXTools Version 1.6 Released </h3>
                                                <p class="p-0 m-0 description"> -Telegram & Email Alerts for Standard/Premium Tiers.<br/>
                                                    -Hot News at DEXTboard.<br/>
                                                    -DEXTshare info at the top. <br/>
                                                    -Several fixes.<br/><br/>

                                                    Thanks for your support and Good Trading.  
                                                <a target="_blank" class="news-link" href="javascript:void(0)" data-news-link-token="DEXT" data-news-link="javascript:void(0)">
                                                    <i class="fa ml-2 fa-external-link"></i>
                                                </a>
                                                </p>
                                                <span class="votes d-block text-right mt-2">
                                                    <span>
                                                        <i class="fa mr-1 fa-thumbs-o-up"></i>31
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="news py-3">
                                            <div class="data">
                                                <span class="info">
                                                    <span class="created text-secondary">2021-01-02, 03:10</span>
                                                </span>
                                                <h3 class="title mt-2 mb-1 mb-2"> DEXTShare December Released </h3>
                                                <p class="p-0 m-0 description">  We are proud to share with you our success once again thanks to our monthly promotional airdrop, the DEXTShare.   
                                                <a target="_blank" class="news-link" href="javascript:void(0)" data-news-link-token="DEXT" data-news-link="javascript:void(0)">
                                                    <i class="fa ml-2 fa-external-link"></i>
                                                </a>
                                                </p>
                                                <span class="votes d-block text-right mt-2">
                                                    <span>
                                                        <i class="fa mr-1 fa-thumbs-o-up"></i>32
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                <div class="loading" hidden="">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="col-12 order-xl-2 col-xl-10">
                            <div className="card card-small mb-4">
                            <div class="card-header border-bottom d-flex justify-content-between align-items-center card-with-tabs text-center text-sm-left">
                                <div>
                                    <div role="group" aria-label="Page actions" class="tabs btn-group btn-group-toggle d-inline-flex mb-0 p-0 mb-2 mb-sm-0">
                                        <a href="#" class="btn btn-white active">Trade History</a>
                                        <span placement="top" class="btn btn-white disabled"> My positions </span>
                                        <span placement="top" class="btn btn-white"> Price Alerts </span>
                                    </div>
                                    <h6 class="m-0 d-inline-block align-middle mx-3"> DEXT (last 309 trades) 
                                    <a class="d-inline-block wallet-filter-modal">
                                        <i class="fa fa-filter ml-2 row-icon"></i>
                                    </a>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-body p-0">
                            <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Price USD</th>
                                            <th scope="col">Price ETH</th>
                                            <th scope="col">Amount DEXT</th>
                                            <th scope="col">Total ETH</th>
                                            <th scope="col">Maker</th>
                                            <th scope="col">Others</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-danger">sell</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429
                                            <i class="fa fa-user-secret icon-table ml-1 text-danger"></i>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
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
            <div>
            </div>
            </div>
        )
    }
}
export default PairExplorer