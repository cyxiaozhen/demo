<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 值班管理平台-当前值班信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-form ref="form" :model="form" label-width="80px">
        <h3>
          值班时间：
        </h3><br>
        <el-form-item label="日期:">
          <el-col :span="5">
            {{form.date1}}
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item label="星期:">
                {{form.date2}}
            </el-form-item>
          </el-col>
        </el-form-item>
        <h3>
          值班厅领导(指挥长):
        </h3><br>
        <el-form-item :inlist="true" label="姓名:">
          <el-col :span="5">
            {{form.name}}
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="职务:">
              {{form.job}}
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="联系方式:">
              {{form.phonum}}
            </el-form-item>
          </el-col>
        </el-form-item>

        <h3>
          值班处领导(值班长):
        </h3><br>
        <el-form-item :inlist="true" label="处室:">
          <el-col :span="5">
            {{form.office}}
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="姓名:">
              {{form.name}}
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="职务:">
              {{form.job}}
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="联系方式:">
              {{form.phonum}}
            </el-form-item>
          </el-col>
        </el-form-item>

        <h3>
          值班处领导(值班员):
        </h3><br>
        <el-form-item :inlist="true" label="姓名:">
          <el-col :span="5">
            {{form.name}}
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="联系方式:">
              {{form.phonum}}
            </el-form-item>
          </el-col>
        </el-form-item>

        <h3>
          一楼大堂值班:
        </h3><br>
        <el-form-item :inlist="true" label="白班:">
          <el-col :span="5">
            {{form.name}}
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="晚班:">
              {{form.name}}
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BaseShow",
        data() {
          return {
            form: {
              name: '张三',
              office: '1号厅',
              date1: '2019.8.13',
              date2: '星期三',
              job:'大堂经理',
              phonum:'13285339466',
            }
          }
        },
        methods: {
          onSubmit() {
            console.log('submit!');
          }
        }
    }
</script>

<style scoped>
  h3{
    color: #14b1eb;
  }
</style>
