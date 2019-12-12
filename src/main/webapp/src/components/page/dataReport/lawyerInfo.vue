<template>
  <div style="height: 100%; background-color: #2d8cf0">
    <div class="crumbs">
      <h1><i class="el-icon-lx-cascades"></i> 省司法厅-律师信息</h1>
    </div>
    <!--0000CD-->
    <el-row :gutter="20" style="height: 100%">
      <el-col :span="8" style="height: 100%">
        <el-row :gutter="20" class="mgb20" id="mychar1" style="height: 45%">
        </el-row>
        <el-row :gutter="20" class="mgb20" id="mychar2" style="height: 45%">
        </el-row>
      </el-col>
      <el-col :span="16" style="height: 100%">
        <el-row :gutter="20" class="mgb20" style="height: 100%" id="mychar3">
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "lawyerInfo.vue",
      data(){
        return {
          arrNum: [
            {name: "本科75.71%", value: 75.51},
            {name: "未知0.32%", value: 0.32},
            {name: "博士研究生1.03%", value: 1.03},
            {name: "本科(不含)以下4.98%", value: 4.98},
            {name: "硕士研究生18.16%", value: 18.16},
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
          mychar1.setOption({
            title: {
              text:'全省律师各学历层次占比情况',
              x:'center'
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius: '65%',
                data: this.arrNum,
                center:['60%','50%'],
              },
            ]
          });
          mychar2.setOption({
            title: {
              text:'各地市律师数量对比',
              x:'center'
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
              formatter:'{b0}: {c0}人'
            },
            xAxis: {
              data: ['广州市','深圳市','佛山市','东莞市','珠海市','中山市','惠州市','江门市','汕头市','湛江市','韶关市','清远市','肇庆市','茂名市','河源市','梅州市'],
              axisLabel:{
                formatter:function(value){
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
                position: [18,-25], // 相对位置
                rotate: 270,  // 旋转角度
                color: '#2c343c',
              },
              data: [13673,13341,3049,2944,1489,1281,1279,934,630,492,474,473,420,412,315,300],
            }]
            // 设置加载等待隐藏
          });
          mychar3.setOption({
            title: {
              text: '各地市律师机构所占比重',
              x: 'center'
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '75%',
                data: this.arrNum1,
                center: ['50%', '50%'],
              },
            ]
          })
        }
      }
    }
</script>

<style scoped>
  h1{
    text-align: center;
    color: white;
  }

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
