<template>
  <div style="height: 100%; background-color: #2d8cf0">
    <!--0000CD-->
    <div class="crumbs">
        <h1><i class="el-icon-lx-cascades"></i> 省司法厅-司法信息</h1>
    </div>
    <el-row :gutter="20" style="height: 100%">
      <el-col :span="8" style="height: 100%">
        <el-row :gutter="20" class="mgb20" id="mychar1" style="height: 45%">
        </el-row>
        <el-row :gutter="20" class="mgb20" id="mychar2" style="height: 45%">
        </el-row>
      </el-col>
      <el-col :span="16" style="height: 100%">
        <el-row :gutter="20" class="mgb20" style="height: 45%" id="mychar3">
        </el-row>
        <el-col :span="12" style="height: 100%">
          <el-row :gutter="20" class="mgb20" style="height: 45%" id="mychar4">
          </el-row>
        </el-col>
        <el-col :span="12" style="height: 100%">
          <el-row :gutter="20" class="mgb20" style="height: 45%" id="mychar5">
          </el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "jedInfo.vue",
        data(){
          return {
            arrNum: [
              {name: "大学本科52.10%", value: 52.10},
              {name: "大学专科37.25%", value: 37.25},
              {name: "博士研究生1.68%", value: 1.68},
              {name: "大专以下8.12%", value: 8.12},
              {name: "硕士研究生0.84%", value: 0.84},
            ],
            arrNum1: [
              {name: "深圳市26.22%", value: 26.22},
              {name: "广州市23.53%", value: 23.53},
              {name: "佛山市9.50%", value: 9.50},
              {name: "东莞市6.98%", value: 6.98},
              {name: "中山市3.17%", value: 3.17},
              {name: "惠州市3.11%", value: 3.11},
              {name: "珠海市2.93%", value: 2.93},
              {name: "汕头市2.73%", value: 2.73},
              {name: "江门市2.61%", value: 2.61},
            ],
            arrNum2: [
              {name: "40到89岁46.59%", value: 46.59},
              {name: "30岁以下22.11%", value: 22.11},
              {name: "30到39岁18.24%", value: 18.24},
              {name: "50到59岁8.22%", value: 8.22},
              {name: "年龄未知4.61%", value: 4.61},
              {name: "60岁以上0.22%", value: 0.22},
            ],
            arrNum3: [
              {name: "中共党员53.38%", value: 53.38},
              {name: "群众37.60%", value: 37.60},
              {name: "共青团7.50%", value: 7.50},
              {name: "中共预备党员0.98%", value: 0.98},
              {name: "无党派民主人士0.17%", value: 0.17},
              {name: "民盟盟员0.11%", value: 0.11},
              {name: "台盟盟员0%", value: 0},
            ],
          }
        },
        mounted() {
          this.drawLine();
        },
        methods: {
          drawLine() {
            var mychar1 = this.$echarts.init(document.getElementById('mychar1'));
            var mychar2 = this.$echarts.init(document.getElementById('mychar2'));
            var mychar3 = this.$echarts.init(document.getElementById('mychar3'));
            var mychar4 = this.$echarts.init(document.getElementById('mychar4'));
            var mychar5 = this.$echarts.init(document.getElementById('mychar5'));
            mychar1.setOption({
              title: {
                text:'司法所人员民族情况',
                x:'center'
              },
              legend: {
                top: 10,
                right: '40',
                orient: 'vertical',
                data:['汉族','未知','瑶族'],

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
                // formatter:'{b0}: {c0}人',
                feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
                }
              },
              xAxis: {
                type:'category',
                data: ['广州市','深圳市','佛山市','东莞市','珠海市','中山市','惠州市','江门市','汕头市','湛江市','韶关市','清远市','肇庆市','茂名市','河源市','梅州市'],
                axisLabel:{
                  formatter:function(value){
                    return value.split("",4).join("\n");
                  }
                }
              },
              yAxis: [
                {},
              ],
              series: [
                {
                  name: '汉族',
                  type: 'bar',
                  stack: '总数',
                  label: {   // 图形上的文本标签
                    show: true,
                    },
                  data: [600,400,320,420,588,754,455,633,421,752,198,401,652,588,631,854],
                  axisLabel:{
                    formatter:'{c0}人'
                  }
                },
                {
                  name: '未知',
                  type: 'bar',
                  stack: '总数',
                  label: {
                    normal: {
                      show: true,
                      position: 'insideRight'
                    }
                  },
                  data: [300,155,63,223,233,243,451,422,189,198,631,50,35,312,321,423],
                  axisLabel:{
                    formatter:'{c0}人'
                  }
                },{
                  name: '瑶族',
                  type: 'bar',
                  stack: '总数',
                  label: {
                    normal: {
                      show: true,
                      position: 'insideRight'
                    }
                  },
                  data: [30,15,63,23,33,43,51,42,89,98,63,25,15,31,21,42],
                  axisLabel:{
                    formatter:'{c0}人'
                  }
                },
              ]
            });
            mychar2.setOption({
              title: {
                text:'司法所人员学历情况',
                x:'center'
              },
              tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
              },
              series : [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: '65%',
                  data: this.arrNum,
                  center:['50%','50%'],
                },
              ]
            });
            mychar3.setOption({
              title: {
                text:'各地市司法所数量对比',
                x:'center'
              },
              legend: {
                top: 10,
                right: '40',
                orient: 'vertical',
                data:['人数','增长率'],
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
                formatter:'{b0}: {c0}家',
                feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
                }
              },
              xAxis: {
                // type:'category',
                data: ['广州市','深圳市','佛山市','东莞市','珠海市','中山市','惠州市','江门市','汕头市','湛江市','韶关市','清远市','肇庆市','茂名市','河源市','梅州市'],
                axisLabel:{
                  formatter:function(value){
                    return value.split("").join("\n");
                  }
                }
              },
              yAxis: [
                {},
                {}
              ],
              series: [
                {
                  name: '人数',
                  type: 'bar',
                  label: {   // 图形上的文本标签
                    show: true,
                    // position: [15,-25], // 相对位置
                    // rotate: 270,  // 旋转角度
                    // color: '#2c343c',
                  },
                  data: [171,109,74,24,69,32,76,119,110,105,74,112,56,100,48,86],
                  axisLabel:{
                    formatter:'{c0}家'
                  }
                },
                {
                  name: '增长率',
                  type: 'line',
                  // label: {   // 图形上的文本标签
                  //   show: true,
                  //   position: [15,-25], // 相对位置
                  //   rotate: 270,  // 旋转角度
                  //   color: '#2c343c',
                  // },
                  label: {   // 图形上的文本标签
                    show: true,
                    position: [0,-15], // 相对位置
                    rotate: 0,  // 旋转角度
                    color: '#2c343c',
                  },
                  yAxisIndex: 1,
                  data: [10.48,6.68,4.54,1.47,4.23,1.96,4.66,7.3,6.74,6.44,4.36,5.31,6.54,6.62,7.74,8.56],
                  axisLabel:{
                    formatter:'{c0}%'
                  }
                },
              ]
            });
            mychar4.setOption({
              title: {
                text:'司法所人员年龄结构',
                x:'center'
              },
              tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
              },
              series : [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: '65%',
                  data: this.arrNum2,
                  center:['55%','50%'],
                },
              ]
            });
            mychar5.setOption({
              title: {
                text:'司法所人员政治面貌',
                x:'center'
              },
              tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
              },
              series : [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: '65%',
                  data: this.arrNum3,
                  center:['50%','50%'],
                },
              ]
            });
          }
        }
    }
</script>

<style scoped>
  h1{
    text-align: center;
    color: white;
  }

</style>
