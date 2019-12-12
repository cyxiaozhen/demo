<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 排班管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-form ref="form" :model="form" label-width="80px">
        <h3>
          值班时间：
        </h3><br>
        <el-form-item label="日期">
          <el-col :span="5">
            <el-date-picker type="date" placeholder="选择日期" :picker-options="pickerOptions" v-model="form.date1" value-format="yyyy-MM-dd" style="width: 100%;">
            </el-date-picker>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item label="星期">
              <el-select v-model="form.date2" placeholder="选择周">
                <el-option label="星期一" value="Monday"></el-option>
                <el-option label="星期二" value="Tuesday"></el-option>
                <el-option label="星期三" value="Wednesday"></el-option>
                <el-option label="星期四" value="Wednesday"></el-option>
                <el-option label="星期五" value="Thursday"></el-option>
                <el-option label="星期六" value="Friday"></el-option>
                <el-option label="星期日" value="Sunday"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-form-item>
        <h3>
          值班厅领导(指挥长):
        </h3><br>
        <el-form-item :inlist="true" label="姓名:" prop="">
          <el-col :span="5">
            <el-input v-model="form.name" placeholder="填写姓名"></el-input>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="职务:" prop="">
              <el-select v-model="form.job" placeholder="选择职位">
                <el-option label="大堂经理" value="1"></el-option>
                <el-option label="保安" value="2"></el-option>
                <el-option label="巡警" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="联系方式:" prop="">
              <el-input v-model="form.phonum" placeholder="电话号码"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>

        <h3>
          值班处领导(值班长):
        </h3><br>
        <el-form-item :inlist="true" label="处室:" prop="">
          <el-col :span="5">
            <el-input v-model="form.office" placeholder="选择处室"></el-input>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="姓名:" prop="">
              <el-input v-model="form.name" placeholder="填写姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="职务:" prop="">
              <el-select v-model="form.job" placeholder="选择职位" prop="">
                <el-option label="大堂经理" value="1"></el-option>
                <el-option label="保安" value="2"></el-option>
                <el-option label="巡警" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="联系方式:" prop="">
              <el-input v-model="form.phonum" placeholder="电话号码"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>

        <h3>
          值班处领导(值班员):
        </h3><br>
        <el-form-item :inlist="true" label="姓名:" prop="">
          <el-col :span="5">
            <el-input v-model="form.name" placeholder="填写姓名"></el-input>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="联系方式:" prop="">
              <el-input v-model="form.phonum" placeholder="电话号码"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>

        <h3>
          一楼大堂值班:
        </h3><br>
        <el-form-item :inlist="true" label="白班:" prop="">
          <el-col :span="5">
            <el-input v-model="form.name" placeholder="填写姓名"></el-input>
          </el-col>
          <el-col class="line" :span="1">&nbsp;</el-col>
          <el-col :span="5">
            <el-form-item :inlist="true" label="晚班:" prop="">
              <el-input v-model="form.name" placeholder="填写姓名"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即保存</el-button>
          <el-button @click="clearFrom">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BaseSet",
        data() {
          return {
            pickerOptions: {
              disabledDate(time) {
                return time.getTime() < Date.now();
              },
              shortcuts: [{
                text: '今天',
                onClick(picker) {
                  picker.$emit('pick', new Date());
                }
              }, {
                text: '明天',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() + 3600 * 1000 * 24);
                  picker.$emit('pick', date);
                }
              }, {
                text: '后天',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() + 3600 * 1000 * 24 * 2);
                  picker.$emit('pick', date);
                }
              }, {
                text: '一周后',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
                  picker.$emit('pick', date);
                }
              }]
            },
            form: {
              name: '',
              office: '',
              date1: '',
              date2: '',
              job:'',
              phonum:'',
            }
          }
        },
        methods: {
          onSubmit() {
            console.log('submit!');
          },
          clearFrom() {
            for(var name in this.$data.form) {
              this.$data.form[name] = ""
            }
          }
        }
    }
</script>

<style scoped>
  h3{
    color: #14b1eb;
  }
</style>
