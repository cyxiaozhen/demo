<template>
  <div style="height: 100%; background-color: #2d8cf0">
    <el-row>
      <el-col :span="8">
        <a href="">菜单</a>
        <a href="">值班人员</a>
      </el-col>
      <el-col :span="8" >
        <h1 style="text-align: center; color: white">广东省社区矫正信息系统</h1>
      </el-col>
      <el-col :span="2" offset="4">
        <a href="">通知</a>
      </el-col>
      <el-col :span="2">
        <a href="">欢迎你<br>{{name}}</a>
      </el-col>
    </el-row>

    <el-row style="height: 100%;">
      <el-col :span="6" style="height: 100%">
        <el-card shadow="hover" class="mgb20" style="height:30%;background-color: #2d8cf0">
          <div id="mychar1" style="height: 260px; margin: 0px">
          </div>
        </el-card>
        <el-card shadow="hover" class="mgb20" style="height:30%;background-color: #2d8cf0">
          <div id="mychar2" style="height: 260px; margin: 0px">
          </div>
        </el-card>
        <el-card shadow="hover" style="height:30%;background-color: #2d8cf0">
          <div id="mychar3" style="height: 260px; margin: 0px">
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" style="height: 100%">
        <el-card shadow="hover" class="mgb20" style="height:100%;;background-color: #2d8cf0">
          <p>全省电子监控服刑人员数量:29693</p>
          <p>全省手机监控服刑人员数量:19693</p>
          <p>全省手环监控服刑人员数量:10040</p>
          <div id="mychar4" style="height: 850px; margin: 0px">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <el-card shadow="hover" class="mgb20" style="height:30%;background-color: #2d8cf0">
          <div id="mychar5" style="height: 260px; margin: 0px">
          </div>
        </el-card>
        <el-card shadow="hover" class="mgb20" style="height:30%;background-color: #2d8cf0">
          <div id="mychar6" style="height: 260px; margin: 0px">
          </div>
        </el-card>
        <el-card shadow="hover" style="height:30%;background-color: #2d8cf0">
          <div id="mychar7" style="height: 260px; margin: 0px">
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import "echarts/map/js/china.js";
    import "echarts/map/js/province/guangdong.js";
    import "../../../../static/map/js/province/guangdong/guangzhou.js"
    import "../../../../static/map/js/province/guangdong/chaozhou.js"
    import "../../../../static/map/js/province/guangdong/dongguan.js"
    import "../../../../static/map/js/province/guangdong/heyuan.js"
    import "../../../../static/map/js/province/guangdong/huizhou.js"
    import "../../../../static/map/js/province/guangdong/jiangmen.js"//
    import "../../../../static/map/js/province/guangdong/jieyang.js"
    import "../../../../static/map/js/province/guangdong/maoming.js"
    import "../../../../static/map/js/province/guangdong/meizhou.js"
    import "../../../../static/map/js/province/guangdong/qingyuan.js"
    import "../../../../static/map/js/province/guangdong/shantou.js"
    import "../../../../static/map/js/province/guangdong/shanwei.js"
    import "../../../../static/map/js/province/guangdong/shaoguan.js"
    import "../../../../static/map/js/province/guangdong/shenzhen.js"
    import "../../../../static/map/js/province/guangdong/yangjiang.js"
    import "../../../../static/map/js/province/guangdong/yunfu.js"
    import "../../../../static/map/js/province/guangdong/zhanjiang.js"
    import "../../../../static/map/js/province/guangdong/zhaoqing.js"
    import "../../../../static/map/js/province/guangdong/zhongshan.js"
    import "../../../../static/map/js/province/guangdong/zhuhai.js"
    import "../../../../static/map/js/province/guangdong/foshan.js"

    export default {
        name: "civInfo",
        data() {
          return {
            name:'李岗',
            arrNum: [
              {name: "本科" + this.value + "%", value: 75.51},
              {name: "未知" + this.value + "%", value: 0.32},
              {name: "博士研究生(含博士后研究生)" + this.value + "%", value: 1.03},
              {name: "本科(不含)以下" + this.value + "%", value: 4.98},
              {name: "硕士研究生" + this.value + "%", value: 18.16},
            ],
          }
        },
        mounted() {
          this.drawLine();
        },
        methods: {
          drawLine() {
            // console.log(whatever);
            var mychar1 = this.$echarts.init(document.getElementById('mychar1'));
            var mychar2 = this.$echarts.init(document.getElementById('mychar2'));
            var mychar3 = this.$echarts.init(document.getElementById('mychar3'));
            var mychar4 = this.$echarts.init(document.getElementById('mychar4'));
            var mychar5 = this.$echarts.init(document.getElementById('mychar5'));
            var mychar6 = this.$echarts.init(document.getElementById('mychar6'));
            var mychar7 = this.$echarts.init(document.getElementById('mychar7'));
            mychar1.setOption({
              tooltip: {
                show: true,
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              title: {
                text: '矫正类型(合计35070人)',
                x: 'center'
              },
              series: [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: ['45%', '65%'],
                  avoidLabelOverlap: false,
                  data: [
                    {value: 94.72, name: '缓刑'},
                    {value: 126, name: '管制'},
                    {value: 618, name: '暂予监禁'},
                    {value: 1106, name: '假释'},
                  ]
                }
              ]
            });
            mychar2.setOption({
              title: {
                text: '年龄结构',
                x: 'center'
              },
              tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
              },
              series: [
                {
                  name: '访问来源(含35070人)',
                  type: 'pie',
                  radius: '65%',
                  data: [
                    {name: "40到89岁46.59%", value: 46.59},
                    {name: "30岁以下22.11%", value: 22.11},
                    {name: "30到39岁18.24%", value: 18.24},
                    {name: "50到59岁8.22%", value: 8.22},
                    {name: "年龄未知4.61%", value: 4.61},
                    {name: "60岁以上0.22%", value: 0.22},
                  ],
                  center: ['55%', '60%'],
                },
              ]
            });
            mychar3.setOption({
              title: {
                text: '在管分布人员(合计35707人)',
                x: 'center'
              },
              tooltip: {
                show: true,   // 是否显示提示框，默认为true
                trigger: 'axis', // 数据项图形触发
                axisPointer: {   // 指示样式
                  type: 'shadow',
                  axis: 'auto'
                },
                padding: 5,
                textStyle: {   // 提示框内容的样式
                  color: '#fff'
                },
                formatter: '{b0}: {c0}人'
              },
              xAxis: {
                data: ['广州市', '深圳市', '佛山市', '东莞市', '珠海市', '中山市', '惠州市', '江门市', '汕头市', '湛江市', '韶关市', '清远市', '肇庆市', '茂名市', '河源市', '梅州市'],
                axisLabel: {
                  formatter: function (value) {
                    return value.split("").join("\n");
                  }
                }
              },
              yAxis: {},
              series: [{
                name: '人数',
                type: 'bar',
                label: {   // 图形上的文本标签
                  show: true,
                  position: [15, -25], // 相对位置
                  rotate: 270,  // 旋转角度
                  color: '#2c343c',
                },
                data: [2366, 2151, 1960, 1854, 1489, 1281, 1279, 934, 630, 492, 474, 473, 420, 412, 315, 300],
              }]
              // 设置加载等待隐藏
            });

            //Map
            let geoCoordMap = {
              "广州":[113.73,36.03],
              "东莞":[113.75,23.04]
            };
            let convertData = function (data) {
              let res = [];
              for (let i = 0; i < data.length; i++) {
                let geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                  res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                  });
                  console.log(res);
                }
              }
              return res;
            };
            /**
             * 获取图表属性
             * @param name select的名称
             */
            function getChartOptions(name){
              return {
                geo: { //地图写在geo组件上
                  map: name, //更换的名称
                  // roam: true,
                  selectedMode: 'single',
                  layoutCenter: ['30%', '30%'],
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        color: 'rgba(0,0,0,0.4)'
                      }
                    }
                  },
                  tooltip: {
                    trigger: 'item'
                  },
                }
              };
            }
            //最初的属性
            mychar4.setOption({
              // // backgroundColor: 'transparent',
              // title: {
              //   text: '全国主要城市空气质量',
              //   subtext: 'data from PM25.in',
              //   sublink: 'http://www.pm25.in',
              //   x:'center',
              //   textStyle: {
              //     color: '#fff'
              //   }
              // },
              tooltip: {
                trigger: 'item',
                formatter: function (params) {
                  return params.name + ' : ' + params.value[2];
                }
              },
              legend: {
                orient: 'vertical',
                y: 'bottom',
                x:'left',
                data:['pm2.5'],
                textStyle: {
                  color: '#fff'
                }
              },
              // visualMap: {
              //   min: 0,
              //   max: 200,
              //   top: '50px',
              //   calculable: true,
              //   inRange: {
              //     color: ['#50a3ba', '#eac736', '#d94e5d']
              //   },
              //   textStyle: {
              //     color: '#fff'
              //   }
              // },
              geo: {
                map: '广东', //
                // roam: 'scale',
                // type: 'scatter',
                // layoutCenter: ['30%', '30%'],
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: 'rgba(0,0,0,0.4)'
                    }
                  }
                },
                // tooltip: {
                //   trigger: 'item',
                // },
                itemStyle: {
                  normal:{
                    borderColor: '#111',
                    areaColor: '#01B3FF',
                  },
                  emphasis:{
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'witch'
                  }
                }
              },

              server:[{
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',

                data: convertData([{name:"广州",value:"广州市天河区人民法院"},{name:"东莞",value:"大朗镇公安局"}]),
                symbolSize: 12,
                label: {
                  show:false,
//		                normal: {
//		                    show: true
//		                },
//		                emphasis: {
//		                    show: true
//		                },
                  formatter:'{b}',
                  offset:[15,-15],//文字的相对偏移
                },
                //标签的样式
                itemStyle: {
                  emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                  }
                }
              }],
            });
            //通过该事件进行底图的变换
            let mapID=1;
            mychar4.on('click', function (params) {
              if(mapID===1){
                console.log(mapID);
                mapID=2;
                mychar4.setOption(getChartOptions(params.name));
              }else{
                mapID=1;
                mychar4.setOption(getChartOptions('广东'));
              }
            });

            mychar5.setOption({
              tooltip: {
                show: true,
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              title: {
                text: '文化程度(合计35070人)',
                x: 'center'
              },
              series: [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: ['45%', '65%'],
                  avoidLabelOverlap: false,
                  data: [
                    {value: 46.98, name: '初中'},
                    {value: 9.27, name: '专及以上'},
                    {value: 23.58, name: '暂予监禁'},
                    {value: 8.33, name: '其他'},
                    {value: 29.87, name: '高中'},
                  ]
                }
              ]
            });
            mychar6.setOption({
              title: {
                text: '性别(合计35070人)',
                x: 'center'
              },
              tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
              },
              series: [
                {
                  name: '访问来源(含35070人)',
                  type: 'pie',
                  radius: '65%',
                  data: [
                    {name: "男", value: 30400},
                    {name: "女", value: 4670},
                    {name: "其他", value: 22},
                  ],
                  center: ['55%', '60%'],
                },
              ]
            });
            mychar7.setOption({
              title: {
                text: '工作情况',
                x: 'center'
              },
              tooltip: {
                show: true,   // 是否显示提示框，默认为true
                trigger: 'axis', // 数据项图形触发
                axisPointer: {   // 指示样式
                  type: 'shadow',
                  axis: 'auto'
                },
                padding: 5,
                textStyle: {   // 提示框内容的样式
                  color: '#fff'
                },
                formatter: '{b0}: {c0}人'
              },
              xAxis: {
                data: ['广州市', '深圳市', '佛山市', '东莞市', '珠海市', '中山市', '惠州市', '江门市', '汕头市', '湛江市', '韶关市', '清远市', '肇庆市', '茂名市', '河源市', '梅州市'],
                axisLabel: {
                  formatter: function (value) {
                    return value.split("").join("\n");
                  }
                }
              },
              yAxis: {},
              series: [{
                name: '人数',
                type: 'bar',
                label: {   // 图形上的文本标签
                  show: true,
                  position: [15, -25], // 相对位置
                  rotate: 270,  // 旋转角度
                  color: '#2c343c',
                },
                data: [2366, 2151, 1960, 1854, 1489, 1281, 1279, 934, 630, 492, 474, 473, 420, 412, 315, 300],
              }]
              // 设置加载等待隐藏
            });
          }
        }
    }
</script>

<style scoped>
  a{
    position: relative;
    padding-top: 20px;
  }

  .mgb20 {
    margin-bottom: 20px;
  }
</style>
