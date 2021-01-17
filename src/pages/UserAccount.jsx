import React, { Component } from 'react'
import banner from "../images/banner.gif"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import walletConnect from "../images/wallet_connect.svg"
import walletLink from "../images/wallet_link.svg"
import torus from "../images/torus.svg"
import fortmatic from "../images/fortmatic.svg"
import authereum from "../images/authereum.svg"
import mewWallet from "../images/mew_wallet.png"
import "./UserAccount.scss"
class UserAccount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            connect:false,
        }
    }
    handleCloseConnect = () => {
        this.setState({
            connect: false
        })
    }
    render() {
        const {connect} = this.state;
        return (
            <div className="main-useraccount">
                <div className="banner text-center d-sm-none d-md-none d-lg-block d-none">
                    <a href="javascript:void(0)">
                        <img src={banner} />
                    </a>
                </div>
                <div className="main-useraccount-container container-fluid px-4">
                    <div className="page-header row no-gutters py-4">
                        <div className="col-12 col-md-7 text-left mb-0 pr-4 pb-3">
                            <span className="text-uppercase page-subtitle">v0.2.0 USER ACCOUNT</span>
                            <h3 className="page-title">User Account</h3>
                            <small className="p-0 mt-2 m-0 text-muted">User account</small>
                        </div>
                    </div>
                    <div className="row no-gutters h-100">
                        <div className="col-md-5 auth-form mx-auto">
                        <div className="card mb-5">
                            <div className="card-body text-center">
                                <h5 className="auth-form__title text-center mb-4"> Connect your Wallet </h5>
                                <p className="text-center">Connect your wallet with Dextools.</p>
                                <button type="button" className="btn btn-info d-table mx-auto" onClick={()=>{this.setState({connect:true})}}> Connect </button>
                            </div>
                        </div>
                        <div className="card mb-5">
                            <div className="card-body text-center card-muted text-muted">
                                <h5 className="text-center mb-4 text-muted"> Verify your wallet </h5>
                                <p className="text-center">Verify your wallet into Dextools.io</p>
                                <p className="text-center">By verifying your wallet we will validate the ownership of your wallet.</p>
                                <button className="btn btn-primary btn-secondary" disabled="disabled"> Verify your wallet </button>
                            </div>
                        </div>
                        <div className="mb-5">
                            <small>*DEXT Price checked every 24h</small><br />
                            <small> - Current DEXT price: 0.00008079 ETH</small><br />
                            <small> - Next price check tomorrow at 12:2 GMT-8 </small>
                        </div>
                        </div>
                    </div>
                </div>
                <Dialog
            open={connect}
            onClose={this.handleCloseConnect}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="modal-connect"
          >
            <DialogContent>
                <div class="connect-wrapper">
                    <div class="connect-container">
                        <div class="connect-icon">
                        <img src={walletConnect} />
                        </div>
                        <div class="connect-name">WalletConnect</div>
                        <div class="connect-description">Scan with WalletConnect to connect</div>
                    </div>
                </div>
                <div class="connect-wrapper">
                    <div class="connect-container">
                        <div class="connect-icon">
                        <img src={walletLink} />
                        </div>
                        <div class="connect-name">WalletLink</div>
                        <div class="connect-description">Scan with WalletLink to connect</div>
                    </div>
                </div>
                <div class="connect-wrapper">
                    <div class="connect-container">
                        <div class="connect-icon">
                        <img src={torus} />
                        </div>
                        <div class="connect-name">Torus</div>
                        <div class="connect-description">Connect with your Torus account</div>
                    </div>
                </div>
                <div class="connect-wrapper">
                    <div class="connect-container">
                        <div class="connect-icon">
                        <img src={fortmatic} />
                        </div>
                        <div class="connect-name">Fortmatic</div>
                        <div class="connect-description">Connect with your Fortmatic account</div>
                    </div>
                </div>
                <div class="connect-wrapper">
                    <div class="connect-container">
                        <div class="connect-icon">
                        <img src={authereum} />
                        </div>
                        <div class="connect-name">Authereum</div>
                        <div class="connect-description">Connect with your Authereum account</div>
                    </div>
                </div>
                <div class="connect-wrapper">
                    <div class="connect-container">
                        <div class="connect-icon">
                        <img src={mewWallet} />
                        </div>
                        <div class="connect-name">MEW wallet</div>
                        <div class="connect-description">Scan with MEW wallet to connect</div>
                    </div>
                </div>
            </DialogContent>
          </Dialog>
            </div>
        )
    }
}
export default UserAccount