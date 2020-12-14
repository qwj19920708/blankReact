import React from 'react'
import * as d3 from 'd3'

export default class CodeConversion extends React.Component {

    drawChart(){

        // let datax = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        // let datay = [120, 200, 150, 80, 70, 110, 130];
        
        // let width = 800
        // let height = 400
        // let padding = { top: 10, right: 40, bottom: 40, left: 40 }

        // let svg = d3.select("#d3Chart")
        //     .append("svg")
        //     .attr("width", `${width}px`)
        //     .attr("height", `${height}px`)

        // let xScale = d3.scaleBand().rangeRound([0, width]).domain(datax)
        // let xAxis = d3.axisBottom(xScale)
        // svg.append('g').call(xAxis)
        //     .attr("transform", "translate(0," + (height - padding.bottom) + ")")
        //     .selectAll("text")
        //     .attr("dx", "50px")
        
        // let yScale = d3.scaleLinear()
        //     .domain([0, d3.max(datay) as number])
        //     .range([height - padding.bottom, padding.top])
        // let yAxis = d3.axisLeft(yScale).ticks(10)
        // svg.append('g').call(yAxis).attr("transform", "translate(" + 100 + ",0)")

        // let bar = svg.selectAll(".bar")
        //     .data(datay)
        //     .enter()
        //     .append("g")
        //     .attr("class", "bar")
        //     .attr("transform", function(d, i) {
        //         return "translate("  + yScale(d) + ")";
        //     })

        // bar.append("rect")
        //     .attr("x", 1)
        //     .attr("width", 100)
        //     .attr("height", function(d) {
        //         return height - yScale(d) - padding.bottom;
        //     })
        //     .attr("stroke", "White");

        // bar.append("text")
        //     .attr("dy", ".75em")
        //     .attr("y", 6)
        //     .attr("x", 50)
        //     .attr("text-anchor", "middle")
        //     .attr("font-size", "8px")
        //     .attr("fill", "White")
        //     .text(function(d) {
        //         return d
        //     })

        var width = 600, height = 300
        var padding = { top: 50, right: 50, bottom: 50, left: 50 }
        var main = d3.select('#d3Chart').append('g')
            .attr('transform', "translate(" + padding.top + ',' + padding.left + ')');
        let datasetx = ["赵","钱","孙","李","周","吴","郑","王"]
        let datasety = [40, 30, 50, 70, 90, 20, 10, 40]
        let xScale = d3.scaleBand()
            .domain(datasetx)
            .range([0, width - padding.left - padding.right]);
        let yScale = d3.scaleLinear()
            .domain([0, d3.max(datasety) as number])
            .range([height - padding.top - padding.bottom, 0]);
        let xAxis = d3.axisBottom(xScale)
        let yAxis = d3.axisLeft(yScale)
           // 添加坐标轴元素
        main.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0,' + (height - padding.bottom - padding.top) + ')')
            .call(xAxis)
        main.append('g')
            .attr('class', 'axis')
            .call(yAxis)
    }

    componentDidMount() {
        this.drawChart()
    }

    render(){
        return <div id="d3Chart">
            
        </div>
    }
} 