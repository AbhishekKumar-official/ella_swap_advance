
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
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: true,
                columnWidth: '90%',
                barHeight: '70%',
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['Information', 'Transactions','Holders', 'Creation']
            }
          },
        
        
        };
      }
    
    render() {
        return (
           
            
                <div id="chart">
                <Chart options={this.state.options} series={this.state.scores} type="bar" height={350} />
                </div>
           
        )
    }
}
export default BasicBarChart

