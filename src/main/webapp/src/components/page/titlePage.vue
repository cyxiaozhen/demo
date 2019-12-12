<template>
  <div style="height: 165px;width: 95px;">
    <div class="titleBg">
      <div class="fontStyle">
        {{num}}
      </div>
    </div>
    <div class="title" style="padding-top: 13px">
      {{tname}}
    </div>
    <div class="bot">
      {{oldnum}}<font style="font-size: 9px">人</font>
    </div>
  </div>
</template>

<script>
    export default {
        name: "titlePage.vue",
        props: ['num', 'tname', 'oldnum'],
        data  () {
          return{
            // num:'',
            // name:'',
            // oldnum:'',
          }
        }
    }
</script>

<style scoped>
  .titleBg{
    height: 95px;
    width: 93px;
    background-image: url("../../../static/image/tab.png");
  }
  .fontStyle{
    font-size: 37px;
    color: #00faa8;
    font-weight: bold;
    text-align: center;
    line-height:95px;
  }
  .title{
    font-size: 22px;
    color: #00CAFF;
    text-align: center;
  }
  .bot{
    background-image: url("../../../static/image/bottom.png");
    height: 30px;
    width: 100px;
    font-size: 15px;
    text-align: right;
    line-height:30px;
    color: #FFD74A;
  }
</style>
