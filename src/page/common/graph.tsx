import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/graph'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import graphTestData from '@json/graphTestData.json'

interface graphProp {

}

interface graphState {

}

let categories = []
for (var i = 0; i < 2; i++) {
    categories[i] = {
        name: '类目' + i
    };
}

const config = {
    title: {
        text: ''
    },
    toolbox: {
        // 显示工具箱
        show: true,
        feature: {
            mark: {
                show: true
            },
            // 还原
            restore: {
                show: true
            },
            // 保存为图片
            saveAsImage: {
                show: true
            }
        }
    },
    
    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 40, // 调整节点的大小
            roam: true,
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 10],
            edgeLabel: {},
            force: {
                repulsion: 2500,
                edgeLength: [10, 50]
            },
            draggable: true,
            lineStyle: {},
            label: {},
            data: [],
            links: [],
            categories: categories,
        }
    ]
}

config.series[0].data = graphTestData.data
config.series[0].links = graphTestData.link

export default class Graph extends React.Component<graphProp, graphState> {

    componentDidMount(){
        let myChart = echarts.init(document.getElementById("graph") as HTMLDivElement)
        myChart.setOption(config)
        let categories = []
        for (var i = 0; i < 2; i++) {
            categories[i] = {
                name: '类目' + i
            };
        }
    }

    render(){
        return <div id="graph" style={{width: "1200px", height: "600px"}}></div>
    }
}