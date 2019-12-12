<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt="">
                        <div class="user-info-cont">
                            <div class="user-info-name">{{name}}</div>
                            <div>{{role}}</div>
                        </div>
                    </div>
                    <div class="user-info-list">上次登录时间：<span>2018-08-15</span></div>
                    <div class="user-info-list">上次登录地点：<span>佛山</span></div>
                </el-card>
                <el-card shadow="hover" style="height:252px;">
                    <div slot="header" class="clearfix">
                        <span>语言详情</span>
                    </div>
                    Vue
                    <el-progress :percentage="71.3" color="#42b983"></el-progress>
                    JavaScript
                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
                    CSS
                    <el-progress :percentage="3.7"></el-progress>
                    HTML
                    <el-progress :percentage="0.9" color="#f56c6c"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height:403px;">
                    <div slot="header" class="clearfix">
                        <span>待办事项</span>
                        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
                    </div>
                    <el-table :data="todoList" :show-header="false" height="304" style="width: 100%;font-size:14px;">
                        <el-table-column width="40">
                            <template slot-scope="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column width="60">
                            <template slot-scope="scope">
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <div shadow="hover">
                  <div id="MapChar" class="schart">
                  </div>
                </div>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
<!--                    <schart ref="line" class="schart" canvasId="line" :data="data" type="line" :options="options2"></schart>-->
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // import Schart from 'vue-schart';
    import guangdong from "../../../static/map/json/province/guangdong.json";
    import bus from '../common/bus';
    import chinajson from "../../../node_modules/echarts/map/json/china.json"
    import china from "../../../node_modules/echarts/map/js/china.js"
    export default {
        name: 'dashboard',
        data() {
            return {
                name: localStorage.getItem('ms_username'),
                todoList: [{
                        title: '今天要修复100个bug',
                        status: false,
                    },
                    {
                        title: '今天要修复100个bug',
                        status: false,
                    },
                    {
                        title: '今天要写100行代码加几个bug吧',
                        status: false,
                    }, {
                        title: '今天要修复100个bug',
                        status: false,
                    },
                    {
                        title: '今天要修复100个bug',
                        status: true,
                    },
                    {
                        title: '今天要写100行代码加几个bug吧',
                        status: true,
                    }
                ],
                data: [{
                        name: '2018/09/04',
                        value: 1083
                    },
                    {
                        name: '2018/09/05',
                        value: 941
                    },
                    {
                        name: '2018/09/06',
                        value: 1139
                    },
                    {
                        name: '2018/09/07',
                        value: 816
                    },
                    {
                        name: '2018/09/08',
                        value: 327
                    },
                    {
                        name: '2018/09/09',
                        value: 228
                    },
                    {
                        name: '2018/09/10',
                        value: 1065
                    }
                ],
                options: {
                    title: '最近七天每天的用户访问量',
                    showValue: false,
                    fillColor: 'rgb(45, 140, 240)',
                    bottomPadding: 30,
                    topPadding: 30
                },
                options2: {
                    title: '最近七天用户访问趋势',
                    fillColor: '#FC6FA1',
                    axisColor: '#008ACD',
                    contentColor: '#EEEEEE',
                    bgColor: '#F5F8FD',
                    bottomPadding: 30,
                    topPadding: 30
                }
            }
        },
        components: {
            // Schart
        },
        computed: {
            role() {
                return this.name === 'admin' ? '超级管理员' : '普通用户';
            }
        },
        created(){
            this.handleListener();
            this.changeDate();
        },
        activated(){
            this.handleListener();
        },
        deactivated(){
            window.removeEventListener('resize', this.renderChart);
            bus.$off('collapse', this.handleBus);
        },
        mounted(){
          this.loadMap();
        },
        methods: {
            changeDate(){
                const now = new Date().getTime();
                this.data.forEach((item, index) => {
                    const date = new Date(now - (6 - index) * 86400000);
                    item.name = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
                })
            },
            handleListener(){
                bus.$on('collapse', this.handleBus);
                // 调用renderChart方法对图表进行重新渲染
                window.addEventListener('resize', this.renderChart)
            },
            handleBus(msg){
                setTimeout(() => {
                    this.renderChart()
                }, 300);
            },
            renderChart(){
                this.$refs.bar.renderChart();
                this.$refs.line.renderChart();
            },
            loadMap(){
              // var geoCoordMap = {
              //           '珠海市':[113.353986,21.924979]
              //          ,'广州市':[113.480637,23.125178]
              //          ,'湛江市':[110.264977,21.274898]
              //          ,'茂名市':[110.919229,21.659751]
              //          ,'阳江市':[111.825107,21.859222]
              //          ,'云浮市':[112.044439,22.629801]
              //          ,'肇庆市':[112.472529,23.051546]
              //          ,'江门市':[112.894942,22.090431]
              //          ,'中山市':[113.382391,22.321113]
              //          ,'佛山市':[113.022717,22.828762]
              //          ,'清远市':[113.051227,23.685022]
              //          ,'韶关市':[113.591544,24.501322]
              //          ,'河源市':[114.897802,23.746266]
              //          ,'梅州市':[116.117582,24.099112]
              //          ,'潮州市':[116.692301,23.661701]
              //          ,'揭阳市':[116.255733,23.143778]
              //          ,'汕头市':[116.708463,22.87102]
              //          ,'汕尾市':[115.364238,22.774485]
              //          ,'深圳市':[114.085947,22.347]
              //          ,'东莞市':[113.746262,22.746237]
              //          ,'惠州市':[114.412599,23.079404]
              //          };
              var MapChar = this.$echarts.init(document.getElementById('MapChar'));

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
                // geo: {
                //   map: '广东',
                //   label: {
                //     emphasis: {
                //       show: true
                //     }
                //   },
                //   itemStyle: {
                //     normal: {
                //       areaColor: '#323c48',
                //       borderColor: '#111'
                //     },
                //     emphasis: {
                //       areaColor: '#2a333d'
                //     }
                //   }
                // },
                series: [{
                  name: '随机数据',
                  type: 'map',
                  // map:'广东',
                  mapType: '广东',
                  roam: 'scale',
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
                  data: [{name: '珠海市',value:130},
                             {name: '广州市',value: 50},
                             {name: '中山市',value:30},
                             {name: '佛山市',value: 50},
                             {name: '清远市',value:30},
                             {name: '梅州市',value: 50},
                             {name: '汕头市',value:30},
                             {name: '东莞市',value: 50},
                             {name: '惠州市',value:30},
                             {name: '深圳市',value: 50}
                  ]
                }],
              });

              MapChar.on("click",function (params) {
                $.get('../../../static/map/json/province/guangdong.json').then(res =>{
                  echarts.registerMap(params.name,res.data);
                  MapChar.setOption(option);
                }).catch(function(error){
                  console.log(error);
                });
                // var mapname=params.name+"json";
              });
            }

        }
    }

</script>


<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

    .schart {
        width: 100%;
        height: 250px;
    }

</style>
