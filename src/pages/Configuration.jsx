import React, { Component } from 'react'
import "./Configuration.scss"
class Configuration extends Component {
    render() {
        return (
            <div className="main-configuration">
                <div className="main-configuration-container container-fluid px-4">
                    <div className="page-header row no-gutters py-4">
                        <div className="col-12 col-md-7 text-left mb-0 pr-4 pb-3">
                            <span class="text-uppercase page-subtitle">v0.1.1 DEXTOOLS CONFIG</span>
                            <h3 class="page-title">DEXTools Configuration</h3>
                            <small class="p-0 mt-2 m-0 text-muted">Parameters to configure DEXTools</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card card-small mb-4">
                                <div className="card-header">
                                    <h6 class="title m-0">Configurable Parameters</h6>
                                </div>
                                <div className="card-body p-0">
                                <div class="form-row mx-3 my-3">
                                    <label for="hot_movement" class="col col-form-label">Disable hot pairs movement 
                                        <small class="form-text text-muted">Enable / Disable</small>
                                    </label>
                                    <div class="col d-flex align-items-center">
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="hotpair" />
                                        <label class="custom-control-label" for="hotpair"></label>
                                    </div>
                                    </div>
                                </div>
                                <div class="form-row mx-3 my-3">
                                    <label for="hot_movement" class="col col-form-label">Browser Notifications 
                                        <small class="form-text text-muted">Enable or Disable notifications. </small>
                                    </label>
                                    <div class="col d-flex align-items-center">
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="browser" />
                                        <label class="custom-control-label" for="browser"></label>
                                    </div>
                                    </div>
                                </div>
                                <div class="form-row mx-3 my-3">
                                    <label for="hot_movement" class="col col-form-label">Select language  
                                        <small class="form-text text-muted">Change interface language</small>
                                    </label>
                                    <div class="col d-flex align-items-center">
                                    <select class="custom-select">
                                        <option selected>English</option>
                                        <option value="1">中文</option>
                                        <option value="2">Español</option>
                                        <option value="3">русский</option>
                                        <option value="3">عربي</option>
                                    </select>
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

export default Configuration