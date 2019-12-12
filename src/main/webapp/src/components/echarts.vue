<template>
  <div :id="echartsName" class="echarts" :style="{
  width: echarWidth,
  height: echarHeight,
  left: posLeft,
  top: posTop
  }">
  </div>
</template>

<script>
  export default {
    name: "echarts",
    props: {
      echartsType: String,
      echarHeight: String,
      echarWidth: String,
      posLeft: String,
      posTop: String,
      axis_data:Array,
      series_data:Array,
      echartsName:String,
    },
    data () {
      return {
        posLeft: '',
        posTop: '',
        axis_data: [],
        series_data: [],
        echarHeight: "",
        echarWidth: "",
      }
    },
    mounted(){
      // this.echarInit();
    },
    methods: {
      echarInit() {
        // 基于准备好的dom，初始化echarts实例
        // console.log(this.echarHeight+" "+this.echarWidth+" "+this.posTop+" "+this.posLeft+" "+this.axis_data+" "+this.series_data);
        var myChart = this.$echarts.init(document.getElementById(this.echartsName));
        // 设置加载等待显示
        if(this.echartsType=="bar") {
          myChart.showLoading();
          myChart.setOption({
            title: {text: '在Vue中使用echarts'},
            tooltip: {},
            xAxis: {
              data: this.axis_data
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: this.echartsType,
              data: this.series_data,
            }]
          });
          myChart.resize();//直接加这句即可;
          // 设置加载等待隐藏
          myChart.hideLoading();
        }
        else if(this.echartsType=="pie") {
          var arrNum = [];
          for(var i=0; i<this.series_data.length; i++){
            arrNum.push({"value":this.series_data[i],"name":this.axis_data[i]});

          }
          console.log(arrNum);
          myChart.showLoading();
          myChart.setOption({
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                // roseType: 'angle',
                data: arrNum,
              }
            ]
          });

          myChart.resize();//直接加这句即可;
          // 设置加载等待隐藏
          myChart.hideLoading();
        }
      }
    },
    watch: {
      series_data: {
        handler(){
          // 变化后的回调函数，这里我们再次调用getDataFromServer即可
          this.echarInit();
        },
        deep: true,
        // immediate: true,
      },
    },

    // methods: {
    //   init() {
    //     if (this.chart) return;
    //     let chart = echarts.init(this.$el);
    //     this.chart = chart;
    //   }
    // },
    // mounted() {
    //   if (this.option) this.init();
    //   this.chart.setOption(this.option);
    //   this.chart.resize(null, null);
    // },
    // watch: {
    //   option: {
    //     deep: true,
    //     handler: function(newVal) {
    //       this.chart.setOption(newVal);
    //     }
    //   }
    // }
  };
</script>
<style>
  .echarts {
    position: absolute;
  }
</style>
