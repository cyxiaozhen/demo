
<template>
  <div class="Home">
<!--    <el-row>-->
<!--      <el-col :span="8" >-->
<!--        <el-row>-->
<!--          <el-col :span="14" id="BarChar" style="height:200px;">-->
<!--          </el-col>-->
<!--          <el-col :span="10">-->
<!--            <el-row>-->
<!--              <el-col :span="12" id="PieChar1" style="height: 200px;">-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </el-col>-->
<!--      <el-col :span="8">-->
<!--        <el-row>-->
<!--          <el-col :span="10">&nbsp;</el-col>-->
<!--&lt;!&ndash;          <el-col :span="10" id="CateChar1" style="height: 200px;padding-left: auto">&ndash;&gt;-->
<!--&lt;!&ndash;          </el-col>&ndash;&gt;-->
<!--          <el-col :span="24" class="inner">-->
<!--            长图chartu-->
<!--          </el-col>-->

<!--        </el-row>-->
<!--      </el-col>-->
<!--      <el-col :span="8">-->
        <el-row>
          <el-col :span="5" id="PieChar3" style="height: 200px;">
          </el-col>
          <el-col :span="5" id="PieChar4" style="height: 200px;">
          </el-col>
<!--          <el-col :span="5" id="PieChar5" style="height: 200px;">-->
<!--          </el-col>-->
<!--          <el-col :span="9" id="MapChar" style="height: 200px;">-->
<!--          </el-col>-->
        </el-row>
<!--      </el-col>-->
<!--    </el-row>-->
    <el-row style="background-color: #222222">
      <el-col :span="24" id="PieChar2" style="height: 80%;">
      </el-col>
    </el-row>
    <el-row style="background-color: #222222">
      <el-col :span="10" id="CateChar1" style="height: 200px;padding-left: auto">
      </el-col>
      <el-col :span="10" offset="4"  id="CateChar2" style="height: 200px;left: 20px">
      </el-col>
    </el-row>
<!--    <div id="myChart" :style="{width: '600px', height: '400px'}"></div>-->
  </div>
</template>

<script>
  import "echarts/map/js/china.js";
  export default {
    name: 'Home',
    // data: {},
    mounted() {
      this.da();
      this.drawLine();

    },
    methods: {
      da() {
        let d=[300,600,500,400,600,200];
        for(let i=0; i<d.length; i++){
          console.log(i);
          return "    "+d[i]+"人";
        }
      },
      drawLine(){
        // var BarChar = this.$echarts.init(document.getElementById('BarChar'));
        // var PieChar1 = this.$echarts.init(document.getElementById('PieChar1'));
        var PieChar2 = this.$echarts.init(document.getElementById('PieChar2'));
        var PieChar3 = this.$echarts.init(document.getElementById('PieChar3'));
        var PieChar4 = this.$echarts.init(document.getElementById('PieChar4'));
        // var PieChar5 = this.$echarts.init(document.getElementById('PieChar5'));
        var CateChar1 = this.$echarts.init(document.getElementById('CateChar1'));
        var CateChar2 = this.$echarts.init(document.getElementById('CateChar2'));
        // var MapChar = this.$echarts.init(document.getElementById('MapChar'));
        const { random, PI, cos, sin } = Math;

        // 随机生成占比数据
        const val = random() * 100;

        // 圆心角的一半
        const angle = PI * val / 50 / 2;
        // 渐变起点
        const pointStart = [
          0.5 - 0.5 * cos(angle) * sin(angle),
          0.5 + 0.5 * cos(angle) * cos(angle)
        ];
        // 渐变终点
        const pointEnd = [
          0.5 - 0.5 * sin(angle),
          0.5 + 0.5 * cos(angle)
        ];

        // BarChar.setOption({
        //   backgroundColor: 'transparent',
        //   tooltip: {},
        //   xAxis: {
        //     data: ["沈阳","武昌","洪山","华山","武当","台湾"],
        //     axisTick: {
        //       show: false
        //     },
        //     axisLine: {
        //       lineStyle: {
        //         color:'#14b1eb'
        //       }
        //     },
        //     axisLabel: {
        //       textStyle: {
        //         color: '#14b1eb'
        //       }
        //     }
        //   },
        //   yAxis: {
        //     splitLine: {
        //       show: false
        //     },
        //     axisTick: {
        //       show: false
        //     },
        //     axisLine: {
        //       show: false
        //     },
        //     axisLabel: {
        //       show: false
        //     }
        //   },
        //   series: [{
        //     name: '数量',
        //     type: 'pictorialBar',
        //     symbolSize: [30, 15],
        //     symbolOffset: [0, -10],
        //     z: 12,
        //     itemStyle: {
        //       normal: {
        //         color: '#14b1eb'
        //       }
        //     },
        //     data: [
        //       {value:5,symbolPosition:'end'},
        //       {value:20,symbolPosition:'end'},
        //       {value:36,symbolPosition:'end'},
        //       {value:10,symbolPosition:'end'},
        //       {value:10,symbolPosition:'end'},
        //       {value:20,symbolPosition:'end'},
        //     ]
        //   },
        //     {
        //       type: 'bar',
        //       itemStyle: {
        //         normal: {
        //           color: '#14b1eb',
        //           opacity: .7
        //         }
        //       },
        //       silent: true,
        //       barWidth: 30,
        //       barGap: '-100%', // Make series be overlap
        //       data: [5, 20, 36, 10, 10, 20]
        //     }]
        // });
        // PieChar1.setOption({
        //   title: {
        //     text: '温度',
        //     left: 'center',
        //     bottom: 35,
        //     textStyle: {
        //       align: 'center',
        //       fontSize: 14,
        //       color: '#1ADAE9',
        //       fontWeight: 'normal',
        //     }
        //   },
        //   series: [{
        //     name: '占比',
        //     type: 'pie',
        //     startAngle: 270, // 环图起始位置：正下发
        //     radius: ['50%', '60%'],
        //     avoidLabelOverlap: false,
        //     label: {
        //       normal: {
        //         show: true,
        //         position: 'center',
        //         formatter: ({ data }) => `${data.value.toFixed(2)}%`
        //       },
        //       emphasis: {
        //         show: true
        //       }
        //     },
        //     labelLine: {
        //       normal: {
        //         show: false
        //       }
        //     },
        //     data: [{
        //       name: '满足率',
        //       value: val,
        //       label: {
        //         normal: {
        //           fontSize: 18,
        //           color: '#585F6E',
        //           fontWeight: 'bolder'
        //         }
        //       },
        //       itemStyle: {
        //         normal: {
        //           color: {
        //             type: 'linear',
        //             x: pointStart[0],
        //             y: pointStart[1],
        //             x2: pointEnd[0],
        //             y2: pointEnd[1],
        //             colorStops: [
        //               // !! 在此添加渐变过程色 !!
        //               { offset: 0, color: '#24BCF9' },
        //               { offset: 1, color: '#1ADAE9' }
        //             ]
        //           },
        //           shadowColor: 'rgba(34,192,245,0.8)',
        //           shadowBlur: 10
        //         }
        //       }
        //     }, {
        //       name: '未满足率',
        //       value: 100 - val,
        //       label: {
        //         normal: {
        //           show: false,
        //           fontSize: 0
        //         }
        //       },
        //       itemStyle: {
        //         normal: {
        //           color: '#f0f0f0'
        //         },
        //         emphasis: {
        //           color: '#f0f0f0'
        //         }
        //       },
        //       hoverAnimation: false
        //     }]
        //   }]
        //
        //
        // });
        PieChar2.setOption({
          title:{
            text:"1637",
            subtext: '监狱总人数',
            subtextStyle:{
              color: "#55a9f5",
              fontSize: 15,
            },
            textStyle: {
              color:'#ffffff',
              fontSize:50,
            },
            x:"center",
            y:"center",
          },
          tooltip: {
            formatter: "{a} <br>{b} : {c} ({d}%)"
          },
          legend: {
            x: "left",
            y: "top",
            bottom:'20',
            itemGap: 20,            // 间隔
            itemWidth: 24,          // 图形宽度。
            itemHeight: 24,         // 图形高度。
            selectedMode: "multiple",
            orient: "vertical",
            formatter: function (name) {
              let d=[{
                value: 335,
                name: "在押罪犯数"
              },
                {
                  value: 310,
                  name: "现押罪犯数"
                },
                {
                  value: 234,
                  name: "外诊人数"
                },
                {
                  value: 135,
                  name: "历年在逃人数"
                },
                {
                  value: 548,
                  name: "监外执行数"
                },
                {
                  value: 356,
                  name: "高监探亲人数"
                },];
              for(let i=0; i<d.length; i++){
                if (d[i].name == name) {
                  return name+"  "+d[i].value+"人";
                }
              }
            },
            textStyle: {
              align: "left",
              baseline: "bottom",
              color:'#ffffff',
            },
            data:[
              {
                value: 335,
                name: "在押罪犯数"
              },
              {
                value: 310,
                name: "现押罪犯数"
              },
              {
                value: 234,
                name: "外诊人数"
              },
              {
                value: 135,
                name: "历年在逃人数"
              },
              {
                value: 548,
                name: "监外执行数"
              },
              {
                value: 356,
                name: "高监探亲人数"
              },
            ]
          },
          series : [
            {
              name:'访问来源',
              type:'pie',
              radius: ["50%", "75%"],
              center:['50%','50%'],
              itemStyle : {
                normal: {
                  labelLine: {
                    show: true,
                    bottom:'10'
                  },
                  label: {
                    show: true,
                    position: "top",
                    formatter: "{b}\n{c}人",

                  }
                },
                emphasis : {
                  label: {
                    show: false,
                    textStyle: {
                      fontSize: "20",
                      fontWeight: "bold"
                    }
                  }
                }
              },
              data: [
                {
                  value: 335,
                  name: "在押罪犯数"
                },
                {
                  value: 310,
                  name: "现押罪犯数"
                },
                {
                  value: 234,
                  name: "外诊人数"
                },
                {
                  value: 135,
                  name: "历年在逃人数"
                },
                {
                  value: 548,
                  name: "监外执行数"
                },
                {
                  value: 356,
                  name: "高监探亲人数"
                },
              ]
            }
          ]}
      );
        PieChar3.setOption({
          title: {
            text: 'PM2.5',
            left: 'center',
            bottom: 35,
            textStyle: {
              align: 'center',
              fontSize: 14,
              color: '#1ADAE9',
              fontWeight: 'normal',
            }
          },
          series: [{
            name: '占比',
            type: 'pie',
            startAngle: 270, // 环图起始位置：正下发
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'center',
                formatter: ({ data }) => `${data.value.toFixed(2)}%`
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
              name: '满足率',
              value: val,
              label: {
                normal: {
                  fontSize: 18,
                  color: '#585F6E',
                  fontWeight: 'bolder'
                }
              },
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: pointStart[0],
                    y: pointStart[1],
                    x2: pointEnd[0],
                    y2: pointEnd[1],
                    colorStops: [
                      // !! 在此添加渐变过程色 !!
                      { offset: 0, color: '#24BCF9' },
                      { offset: 1, color: '#1ADAE9' }
                    ]
                  },
                  shadowColor: 'rgba(34,192,245,0.8)',
                  shadowBlur: 10
                }
              }
            }, {
              name: '未满足率',
              value: 100 - val,
              label: {
                normal: {
                  show: false,
                  fontSize: 0
                }
              },
              itemStyle: {
                normal: {
                  color: '#f0f0f0'
                },
                emphasis: {
                  color: '#f0f0f0'
                }
              },
              hoverAnimation: false
            }]
          }]


        });
        PieChar4.setOption({
          title: {
            text: '光感',
            left: 'center',
            bottom: 35,
            textStyle: {
              align: 'center',
              fontSize: 14,
              color: '#1ADAE9',
              fontWeight: 'normal',
            }
          },
          series: [{
            name: '占比',
            type: 'pie',
            startAngle: 270, // 环图起始位置：正下发
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'center',
                formatter: ({ data }) => `${data.value.toFixed(2)}%`
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
              name: '满足率',
              value: val,
              label: {
                normal: {
                  fontSize: 18,
                  color: '#585F6E',
                  fontWeight: 'bolder'
                }
              },
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: pointStart[0],
                    y: pointStart[1],
                    x2: pointEnd[0],
                    y2: pointEnd[1],
                    colorStops: [
                      // !! 在此添加渐变过程色 !!
                      { offset: 0, color: '#24BCF9' },
                      { offset: 1, color: '#1ADAE9' }
                    ]
                  },
                  shadowColor: 'rgba(34,192,245,0.8)',
                  shadowBlur: 10
                }
              }
            }, {
              name: '未满足率',
              value: 100 - val,
              label: {
                normal: {
                  show: false,
                  fontSize: 0
                }
              },
              itemStyle: {
                normal: {
                  color: '#f0f0f0'
                },
                emphasis: {
                  color: '#f0f0f0'
                }
              },
              hoverAnimation: false
            }]
          }]


        });
        // PieChar5.setOption({
        //   title: {
        //     text: '电压',
        //     left: 'center',
        //     bottom: 35,
        //     textStyle: {
        //       align: 'center',
        //       fontSize: 14,
        //       color: '#1ADAE9',
        //       fontWeight: 'normal',
        //     }
        //   },
        //   series: [{
        //     name: '占比',
        //     type: 'pie',
        //     startAngle: 270, // 环图起始位置：正下发
        //     radius: ['50%', '60%'],
        //     avoidLabelOverlap: false,
        //     label: {
        //       normal: {
        //         show: true,
        //         position: 'center',
        //         formatter: ({ data }) => `${data.value.toFixed(2)}%`
        //       },
        //       emphasis: {
        //         show: true
        //       }
        //     },
        //     labelLine: {
        //       normal: {
        //         show: false
        //       }
        //     },
        //     data: [{
        //       name: '满足率',
        //       value: val,
        //       label: {
        //         normal: {
        //           fontSize: 18,
        //           color: '#585F6E',
        //           fontWeight: 'bolder'
        //         }
        //       },
        //       itemStyle: {
        //         normal: {
        //           color: {
        //             type: 'linear',
        //             x: pointStart[0],
        //             y: pointStart[1],
        //             x2: pointEnd[0],
        //             y2: pointEnd[1],
        //             colorStops: [
        //               // !! 在此添加渐变过程色 !!
        //               { offset: 0, color: '#24BCF9' },
        //               { offset: 1, color: '#1ADAE9' }
        //             ]
        //           },
        //           shadowColor: 'rgba(34,192,245,0.8)',
        //           shadowBlur: 10
        //         }
        //       }
        //     }, {
        //       name: '未满足率',
        //       value: 100 - val,
        //       label: {
        //         normal: {
        //           show: false,
        //           fontSize: 0
        //         }
        //       },
        //       itemStyle: {
        //         normal: {
        //           color: '#f0f0f0'
        //         },
        //         emphasis: {
        //           color: '#f0f0f0'
        //         }
        //       },
        //       hoverAnimation: false
        //     }]
        //   }]
        //
        //
        // });
        CateChar1.setOption({
          // tooltip（提示框组件）
          tooltip: {
            //trigger(触发类型)，可选'item','axis','none'
            trigger: 'axis',
            axisPointer: {
              //指示器类型,可选'line','shadow','cross'
              type: 'shadow'
            },
          },
          //echarts图表的相对于容器的布局,
          grid: {
            top: 30,
          },
          xAxis: [{
            type: 'value',
            splitLine: {
              show: false,
            },
            //axisTick 坐标轴刻度相关设置
            axisTick: {
              show: false
            },
            //axixLine 坐标轴轴线相关设置
            axisLine: {
              show: false,
              lineStyle: {
                color: '#FFFFFF',
              }
            },
            //axisLabel 坐标轴刻度标签的相关设置
            axisLabel: {
              show: false,
            }
          }, ],
          yAxis: [{
            type: 'category',
            data: ['Matrix 40%', 'CVS 50%', 'Control 60%', 'CVS 70%'],
            axisLabel: {
              // show: false,
              color: '#0003f5',
              fontSize: 10,
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff',
              },
            },
            axisTick: {
              show: false
            },
          }, {
            type: 'category',
            data: [],
            axisLabel: {
              show: false,
              color: '#fff',
              fontSize: 14,
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff',
              },
            },
            axisTick: {
              show: false
            },
          }, ],
          series: [
            {
              type: 'bar',
              data: [40, 50, 60, 70],
              barWidth: '30%',
              // barGap 不同系列的柱间距离
              barGap: '-100%',
              z: 1,
              itemStyle: {
                //barBorderRadius bar圆角半径
                barBorderRadius: 30,
                // color: 'rgba(0,191,252)',
                color: {
                  type: 'linear',
                  x: pointStart[0],
                  y: pointStart[0],
                  x2: pointEnd[1],
                  y2: pointEnd[0],
                  colorStops: [
                    // !! 在此添加渐变过程色 !!
                    { offset: 0, color: '#1ADAE9' },
                    { offset: 1, color: '#34BCF9' },
                  ]
                },
                shadowColor: 'rgba(34,192,245,0.8)',
                shadowBlur: 10
              },
            },
            {
              type: 'bar',
              yAxisIndex: 1,
              // barGap: '-100%',
              data: [ 100, 100, 100, 100],
              barWidth: '30%',
              z: 0,
              itemStyle: {
                barBorderRadius: 50,
                color: 'rgba(85,169,245,0.2)',
              },
            },

          ]
        });
        CateChar2.setOption({
          backgroundColor:'#ff3388',
          // tooltip（提示框组件）
          tooltip: {
            //trigger(触发类型)，可选'item','axis','none'
            trigger: 'axis',
            axisPointer: {
              //指示器类型,可选'line','shadow','cross'
              type: 'shadow'
            },
          },
          //echarts图表的相对于容器的布局,
          grid: {
            top: 30,
          },
          xAxis: [{
            type: 'value',
            splitLine: {
              show: false,
            },
            //axisTick 坐标轴刻度相关设置
            axisTick: {
              show: false
            },
            //axixLine 坐标轴轴线相关设置
            axisLine: {
              show: false,
              lineStyle: {
                color: '#FFFFFF',
              }
            },
            //axisLabel 坐标轴刻度标签的相关设置
            axisLabel: {
              show: false,
            }
          }, ],
          yAxis: [{
            type: 'category',
            data: ['Matrix 40%', 'CVS 50%', 'Control 60%', 'CVS 70%'],
            axisLabel: {
              // show: false,
              color: '#0003f5',
              fontSize: 10,
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff',
              },
            },
            axisTick: {
              show: false
            },
          }, {
            type: 'category',
            data: [],
            axisLabel: {
              show: false,
              color: '#fff',
              fontSize: 14,
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff',
              },
            },
            axisTick: {
              show: false
            },
          }, ],
          series: [
            {
              type: 'bar',
              data: [40, 50, 60, 70],
              barWidth: '30%',
              // barGap 不同系列的柱间距离
              barGap: '-100%',
              z: 1,
              itemStyle: {
                //barBorderRadius bar圆角半径
                barBorderRadius: 30,
                // color: 'rgba(0,191,252)',
                color: {
                  type: 'linear',
                  x: pointStart[0],
                  y: pointStart[0],
                  x2: pointEnd[1],
                  y2: pointEnd[0],
                  colorStops: [
                    // !! 在此添加渐变过程色 !!
                    { offset: 0, color: '#1ADAE9' },
                    { offset: 1, color: '#34BCF9' },
                  ]
                },
                shadowColor: 'rgba(34,192,245,0.8)',
                shadowBlur: 10
              },
            },
            {
              type: 'bar',
              yAxisIndex: 1,
              // barGap: '-100%',
              data: [ 100, 100, 100, 100],
              barWidth: '30%',
              z: 0,
              itemStyle: {
                barBorderRadius: 50,
                color: 'rgba(85,169,245,0.2)',
              },
            },

          ]
        });
        MapChar.setOption({
          backgroundColor: '#FFFFFF',
          title: {
            x: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          visualMap: {
            show: false,
            x: 'left',
            y: 'bottom',
            splitList: [
              {start: 500, end: 600}, {start: 400, end: 500},
              {start: 300, end: 400}, {start: 200, end: 300},
              {start: 100, end: 200}, {start: 0, end: 100},
            ],
            color: ['#66CC33', '#00FF00', '#66FF33', '#339900', '#33CC00', '#00CC00'],
            textStyle: {
              color: "#fff"
            }
          },
          series: [{
            name: '随机数据',
            type: 'map',
            mapType: 'china',
            roam: true,
            itemStyle: {
              normal: {
                color: 'rgba(51, 69, 89, .5)', //地图背景色
                borderColor: '#516a89', //省市边界线00fcff 516a89
                borderWidth: 1
              },
              emphasis: {
                color: 'rgba(255,19,19,0.5)' //悬浮背景
              }
            },
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              }
            },
            data: []
          }]
          }
        )
      }
    }
  }

</script>

<style scoped>

  div{
  }
  .inner{
    height: 200px;
    color: #14b1eb;
    font-weight: bold;
    font-size: 100px;
    text-align: center;
    padding-top: 25px;
  }

</style>
