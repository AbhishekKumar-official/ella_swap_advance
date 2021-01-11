import React, { Component } from 'react'
import "./UserAccount.scss"
class UserAccount extends Component {
    render() {
        return (
            <div className="main-useraccount">
                <div className="banner text-center d-sm-none d-md-none d-lg-block d-none">
                    <a href="javascript:void(0)">
                        
                    </a>
                </div>
                <div className="main-useraccount-container container-fluid px-4">
                    <div className="page-header row no-gutters py-4">
                        <div className="col-12 col-md-7 text-left mb-0 pr-4 pb-3">
                            <span class="text-uppercase page-subtitle">v0.2.0 USER ACCOUNT</span>
                            <h3 class="page-title">User Account</h3>
                            <small class="p-0 mt-2 m-0 text-muted">User account</small>
                        </div>
                    </div>
                    <div className="row no-gutters h-100">
                        <div className="col-md-5 auth-form mx-auto">
                        <div class="card mb-5">
                            <div class="card-body text-center">
                                <h5 class="auth-form__title text-center mb-4"> Connect your Wallet </h5>
                                <p class="text-center">Connect your wallet with Dextools.</p>
                                <button type="button" class="btn btn-info d-table mx-auto"> Connect </button>
                            </div>
                        </div>
                        <div class="card mb-5">
                            <div class="card-body text-center card-muted text-muted">
                                <h5 class="text-center mb-4 text-muted"> Verify your wallet </h5>
                                <p class="text-center">Verify your wallet into Dextools.io</p>
                                <p class="text-center">By verifying your wallet we will validate the ownership of your wallet.</p>
                                <button class="btn btn-primary btn-secondary" disabled="disabled"> Verify your wallet </button>
                            </div>
                        </div>
                        <div class="mb-5">
                            <small>*DEXT Price checked every 24h</small><br />
                            <small> - Current DEXT price: 0.00008079 ETH</small><br />
                            <small> - Next price check tomorrow at 12:2 GMT-8 </small>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserAccount