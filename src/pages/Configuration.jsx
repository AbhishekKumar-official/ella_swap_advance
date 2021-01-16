import React, { Component } from 'react'
import "./Configuration.scss"
class Configuration extends Component {
    render() {
        return (
            <div className="main-configuration">
                <div className="main-configuration-container container-fluid px-4">
                    <div className="page-header row no-gutters py-4">
                        <div className="col-12 col-md-7 text-left mb-0 pr-4 pb-3">
                            <span className="text-uppercase page-subtitle">v0.1.1 DEXTOOLS CONFIG</span>
                            <h3 className="page-title">DEXTools Configuration</h3>
                            <small className="p-0 mt-2 m-0 text-muted">Parameters to configure DEXTools</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card card-small mb-4">
                                <div className="card-header">
                                    <h6 className="title m-0">Configurable Parameters</h6>
                                </div>
                                <div className="card-body p-0">
                                <div className="form-row mx-3 my-3">
                                    <label for="hot_movement" className="col col-form-label">Disable hot pairs movement 
                                        <small className="form-text text-muted">Enable / Disable</small>
                                    </label>
                                    <div className="col d-flex align-items-center">
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="hotpair" />
                                        <label className="custom-control-label" for="hotpair"></label>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-row mx-3 my-3">
                                    <label for="hot_movement" className="col col-form-label">Browser Notifications 
                                        <small className="form-text text-muted">Enable or Disable notifications. </small>
                                    </label>
                                    <div className="col d-flex align-items-center">
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="browser" />
                                        <label className="custom-control-label" for="browser"></label>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-row mx-3 my-3">
                                    <label for="hot_movement" className="col col-form-label">Select language  
                                        <small className="form-text text-muted">Change interface language</small>
                                    </label>
                                    <div className="col d-flex align-items-center">
                                    <select className="custom-select">
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