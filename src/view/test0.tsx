import React from 'react'
import echarts from 'echarts/lib/echarts'
import  'echarts/lib/chart/bar'
import  'echarts/lib/chart/graph'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

type SourceDataType = {
    problemName: string,
    hotValue: number
}[]

interface Props { }
interface State { }

class Test0 extends React.Component<Props, State> {

    main = null
    constructor(props: Props){
        super(props)
    }

    

    componentDidMount(){
        let myChart = echarts.init(document.getElementById("main") as HTMLDivElement)
        let categories = []
        for (var i = 0; i < 2; i++) {
            categories[i] = {
                name: '类目' + i
            };
        }

        myChart.setOption({
            // 图的标题
            title: {
                text: 'ECharts 关系图'
            },
            // 提示框的配置
            tooltip: {
            },
            // 工具箱
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
            // legend: [{
            //     // selectedMode: 'single',
            //     data: categories.map(function (a) {
            //         return a.name;
            //     })
            // }],
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
                    data: [
                        {
                            name: '原发性高血压',
                            symbolSize: 100,
                            category: 0,
                            label: {
                                show: true
                            }
                        }, 
                        {
                            name: '肾血流量',
                            symbolSize: 50,
                            category: 1,
                            label: {
                                show: true
                            }
                        }, 
                        {
                            name: '动态血压监测',
                            symbolSize: 50,
                            category: 1,
                            label: {
                                show: true
                            }
                        }, 
                        {
                            name: '体循环系统',
                            symbolSize: 50,
                            category: 1,
                            label: {
                                show: true
                            }
                        }, 
                        {
                            name: '呼吸困难',
                            symbolSize: 50,
                            category: 1,
                            label: {
                                show: true
                            }
                        }, 
                        {
                            name: '疲乏',
                            symbolSize: 50,
                            category: 1,
                            label: {
                                show: true
                            }
                        }, 
                        {
                            name: '头痛',
                            symbolSize: 50,
                            category: 1,
                            label: {
                                show: true
                            }
                        },

                        {
                            name: '盐酸普罗尔片',
                            symbolSize: 80,
                            category: 3,
                            label: {
                                show: true
                            }
                        },

                        {
                            name: '支气管哮喘',
                            symbolSize: 80,
                            category: 1,
                            label: {
                                show: true
                            }
                        },
                    ],
                    links: [
                        {
                            source: "原发性高血压",
                            target: "肾血流量",
                        }, 
                        {
                            source: '原发性高血压',
                            target: '动态血压监测',
                        }, {
                            source: '原发性高血压',
                            target: '体循环系统',

                        }, {
                            source: '原发性高血压',
                            target: '呼吸困难',
                        }, {
                            source: '原发性高血压',
                            target: '疲乏',
                        }, {
                            source: '原发性高血压',
                            target: '头痛',
                        }, {
                            source: '盐酸普罗尔片',
                            target: '原发性高血压',
                        }
                        , {
                            source: '盐酸普罗尔片',
                            target: '支气管哮喘',
                        }
                    ],
                    categories: categories,
                }
            ]
        })
    }



    render(){
        return (
            <div id="main" style = {{width : "700px", height: "500px"}}>
                
            </div>
        )
    }

}






export default Test0