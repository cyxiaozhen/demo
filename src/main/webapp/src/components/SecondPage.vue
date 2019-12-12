<template>
  <div id="SecondPage">
<!--    <div id="myChart" :style="{width: echarWidth, height: echarHeight,'position': absolute, 'left':posLeft, 'top': posTop}"></div>-->
    <echarts
      :echar-width="echarWidth"
      :echar-height="echarHeight"
      :echarts-type="echartType"
      :pos-left="posLeft"
      :pos-top="posTop"
      :axis_data="axis_data"
      :series_data="series_data"
      :echarts-name="echarName"
    >
    </echarts>
  </div>
</template>

<script>
  import echarts from '../components/echarts';
  export default {
    name: 'SecondPage',
  components: {
      echarts
  },
  props:{
      ID:'',
  },
  data () {
    return {
      echartType:"bar",
      axis_data: [],
      series_data: [],
      echartID:this.ID,
      echarHeight:'',
      echarWidth:'',
      posLeft:'',
      posTop:'',
      echarName:'',
    }
  },
  mounted(){
    this.drawLine();
  },
  watch: {
    // axis_data: {
    //   handler(newval,oldval) {
    //     for(let i=0;i<this.axis_data.length;i++) {
    //       if (oldval[i] != newval[i]) {
    //         // 变化后的回调函数，这里我们再次调用getDataFromServer即可
    //         this.drawLine();
    //       }
    //     }
    //   },
    //   deep: true,
    //   // immediate: true,
    // },
    series_data: {
      handler(){
            // 变化后的回调函数，这里我们再次调用getDataFromServer即可
            this.drawLine();
      },
      deep: true,
      // immediate: true,
    },
    // echarHeight: {
    //   handler() {
    //     // 变化后的回调函数，这里我们再次调用getDataFromServer即可
    //     this.drawLine();
    //   },
    //   deep: true,
    //   immediate: true,
    // },
    // data: {
    //   handler() {
    //     // 变化后的回调函数，这里我们再次调用getDataFromServer即可
    //     this.drawLine();
    //   },
    //   deep: true,
    //   immediate: true,
    // }
  },
  methods: {
      drawLine(){
        console.log(this.echartID)
        this.$axios.get('/api/report/selectAll',{
              params: {
                echartsID:this.echartID,
              }
            }).then(res => {
                var productNames = [];
                    var productNums = [];
                    for(var i=0;i<res.data.length;i++){
                      productNames.push(res.data[i].productname);
                      productNums.push(res.data[i].productnum);
                    }
                    this.axis_data=productNames;
                    this.series_data=productNums;
                    this.echarHeight=res.data[0].echartsHeight+'px';
                    this.echarWidth=res.data[0].echartsWidth+'px';
                    this.posLeft=res.data[0].posLeft+'px';
                    this.posTop=res.data[0].posTop+'px';
                    this.echarName=res.data[0].echartsName;
                    // console.log(this.series_data+" "+this.axis_data)
                console.log(this.echarHeight+" "+this.echarWidth+" "+this.posTop+" "+this.posLeft+" "+this.axis_data+" "+this.series_data);
            }).catch(function(error){
                  console.log(error);
                });
            }
    // drawLine(){
    //   // 基于准备好的dom，初始化echarts实例
    //   var myChart = this.$echarts.init(document.getElementById('myChart'));
    //   // 设置加载等待显示
    //   myChart.showLoading();
    //   this.$axios.get('/api/report/selectAll',{
    //     params: {
    //       echartsID:this.echartID,
    //     }
    //   }).then(res => {
    //     var productNames = [];
    //     var productNums = [];
    //     for(var i=0;i<res.data.length;i++){
    //       productNames.push(res.data[i].productname);
    //       productNums.push(res.data[i].productnum);
    //     }
    //     this.msg=[productNums,productNames];
    //     this.echarHeight=res.data[0].echartsHeight+'px';
    //     this.echarWidth=res.data[0].echartsWidth+'px';
    //     this.posLeft=res.data[0].posLeft+'px';
    //     this.posTop=res.data[0].posTop+'px';
    //     console.log(this.echarHeight+" "+this.echarWidth+" "+this.posTop+" "+this.posLeft+" ");
    //     // 绘制图表
    //     myChart.setOption({
    //       title: { text: '在Vue中使用echarts' },
    //       tooltip: {},
    //       xAxis: {
    //         data: productNames
    //       },
    //       yAxis: {},
    //       series: [{
    //         name: '销量',
    //         type: 'bar',
    //         data: productNums
    //       }]
    //     })
    //   }).catch(function(error){
    //     console.log(error);
    //   });
    //   myChart.resize();//直接加这句即可;
    //   // 设置加载等待隐藏
    //   myChart.hideLoading();
    // },
  }
  }
</script>
