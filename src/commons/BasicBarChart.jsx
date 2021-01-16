
import React, { Component } from 'react'

import Chart from "react-apexcharts";
import "./BasicBarChart.scss"

var dayjs = require('dayjs')
class BasicBarChart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
            options :{
                series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
              }],
                chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                  'United States', 'China', 'Germany'
                ],
              }
              }  
          };
        
    }
    
    render() {
        return (
            <div id="chart">
            <Chart options={this.state.options}/>
            </div>
        )
    }
}
export default BasicBarChart
