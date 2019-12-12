<template>
  <div style="overflow: scroll;height: 100%;width: 100% ">
    <div style="background-image: url(../../static/bg.png);height: 1350px;width: 4800px">
      <el-row class="inner">
        <el-col :span="2" :offset='21' style="text-align: right; font-size: 50px;height: 126px">{{dateFormat(date)}}</el-col>
        <el-col :span="1" style="text-align: center; font-size: 25px">{{date.getFullYear()}}/{{date.getMonth()+1}}/{{date.getDate()}}<br>星期{{"日一二三四五六".charAt(date.getDay())}}</el-col>
      </el-row>

      <el-row style="height: 89%; padding-left: 30px">
        <!--      左边数据展示栏-->
        <el-col :span="8" style="height: 100%">
          <Left></Left>
        </el-col>

        <!--        地图区域-->
        <el-col :span="8">
<!--          <Second v-bind:ID="2"></Second>-->
<!--          <div v-for="it in itmes">-->
<!--            <Second v-bind:ID=it></Second>-->
<!--          </div>-->


        </el-col>

        <!--      右边数据展示栏-->
        <el-col :span="8">

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Home from "../components/Home";
  import Left from "../components/leftBigPage"
  import Second from "../components/SecondPage"
  export default {
    name: "index.vue",
    components: {
      Left,
      Home,
      Second
    },
    data () {
      return {
        date:new Date(),
        name:"在押人数",
        itmes:[1,2,3,4],
      };
    },
    mounted () {
      var _this = this; //声明一个变量指向vue实例this,保证作用域一致
      this.timer = setInterval(function() {
        _this.date = new Date();//修改数据date
      }, 1000);
    },
    beforeDestroy () {
      if(this.timer) {
        clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
      }
    },
    methods:{
      //时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
      dateFormat(time) {
        var date=new Date(time);
        var year=date.getFullYear();
        /* 在日期格式中，月份是从0开始的，因此要加0
         * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
         * */
        var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
        var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
        var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
        var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
        var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
        var week = "星期" + "日一二三四五六".charAt(date.getDay());
        // 拼接
        return hours+":"+minutes+":"+seconds
      }
    }
  }
</script>

<style scoped>

  /*div{*/
  /*  height: 100%;*/
  /*  width: 100%;*/
  /*}*/
  .inner{
    color: #14b1eb;
    font-weight: bold;
  }

</style>
