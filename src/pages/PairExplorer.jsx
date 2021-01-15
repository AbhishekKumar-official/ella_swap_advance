import React, { Component } from 'react'
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
            <div>
                
                <div className="candle_stick_chart">
                     <CandleChart />
                </div>



            </div>
        )
    }
}
export default PairExplorer