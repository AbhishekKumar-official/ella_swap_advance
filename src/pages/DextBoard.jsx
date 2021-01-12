import React, { Component } from 'react'
import banner from "../images/banner.png"
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
                    <div className="col-12 col-md-6 col-xl-4 py-5">
                        <div className="box-home card-uniswap pb-5">
                            <div class="box-home-header px-3 py-3 m-0 text-right">
                                <img src="assets/img/uniswap-logo-home.png" class="mr-2" />
                                <h4 class="m-0">TOOLS 
                                    <span>UNISWAP V2</span>
                                </h4>
                            </div>
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
                                    <div>
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
                </div>
                </div>
            </div>
        )
    }
}
export default DextBoard