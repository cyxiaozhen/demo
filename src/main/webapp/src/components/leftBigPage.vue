<template>
  <div>
    <el-row style="height: 20%">
      <el-col :span="24" style="height: 100%">
        <div style="background-image: url('../../static/image/legislation.png'); width:1432px;height: 409px">
        </div>
      </el-col>
    </el-row>
    <el-row style="padding-top: 30px">
      <el-col :span="24" style="height: 100%">
        <div style="background-image: url('../../static/image/leftBottom.png'); width:1432px;height: 774px">
          <el-row style="padding-top: 115px">
            <el-col :span="3" :offset="2">
              <Title v-bind:num="230" tname="在押犯数" :oldnum="236">
              </Title>
            </el-col>
            <el-col :span="3">
              <Title v-bind:num="310" tname="现押犯数" :oldnum="320">
              </Title>
            </el-col>
            <el-col :span="3">
              <Title v-bind:num="150" tname="暂予监外执行犯数" :oldnum="450">
              </Title>
            </el-col>
            <el-col :span="3">
              <Title v-bind:num="140" tname="监外住院" :oldnum="56">
              </Title>
            </el-col>
            <el-col :span="3">
              <Title v-bind:num="190" tname="新收押罪犯" :oldnum="89">
              </Title>
            </el-col>
            <el-col :span="3">
              <Title v-bind:num="256" tname="执勤警力" :oldnum="320">
              </Title>
            </el-col>
            <el-col :span="3">
              <Title v-bind:num="186" tname="备勤警力" :oldnum="320">
              </Title>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Title from "../components/page/titlePage";

  export default {
        name: "leftBigPage.vue",
        components:{
          Title
        }
    }
</script>

<style scoped>

</style>
