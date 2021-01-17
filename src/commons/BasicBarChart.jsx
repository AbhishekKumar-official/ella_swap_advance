
import React, { Component } from 'react'

import Chart from "react-apexcharts";
import "./BasicBarChart.scss"

var dayjs = require('dayjs')
class BasicBarChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        
            scores: [{
            data: [99, 99, 99, 99,99]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 100,
              width: 200,
            },
            plotOptions: {
              bar: {
                horizontal: true,
                columnWidth: '100%',
                barHeight: '80%',
                endingShape: 'rounded',
              }
            },
            dataLabels: {
              enabled: false,
            },
            // xaxis: {
            //   categories: ['Information', 'Transactions','Holders', 'Creation', 'Pool']
            // }
          },
        
        };
      }
    
    render() {
        return (
           
            
                <div id="chart">
                <Chart options={this.state.options} series={this.state.scores} type="bar" height={100} width={200} />
                </div>
           
        )
    }
}
export default BasicBarChart

