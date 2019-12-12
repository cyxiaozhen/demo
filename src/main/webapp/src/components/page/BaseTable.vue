<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 值班报表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
              <el-form :inline="true">
<!--                <el-form-item>-->
<!--                  <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">-->
<!--                      <el-option key="1" label="广东省" value="广东省"></el-option>-->
<!--                      <el-option key="2" label="湖南省" value="湖南省"></el-option>-->
<!--                  </el-select>-->
<!--                </el-form-item>-->
<!--                <el-form-item>-->
<!--                  <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>-->
<!--                  <el-button type="primary" icon="el-icon-search" @click="">搜索</el-button>-->
<!--                </el-form-item>-->
                <el-form-item>
                  <el-upload
                    accept=".xls,.xlsx"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :auto-upload="true"
                    :on-change="upload"
                  >
                    <el-button type="primary">导入值班信息</el-button>
                  </el-upload>
                </el-form-item>
                <el-form-item>
                  <el-upload
                    accept=".xls,.xlsx"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :auto-upload="true"
                    :on-change="cityUpload"
                  >
                    <el-button type="primary">导入地市值班信息</el-button>
                  </el-upload>
                </el-form-item>
              </el-form>
            </div>
            <el-table id="tableData" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border class="table" ref="multipleTable">
                <el-table-column prop="时间" align="center" label="时间" sortable>
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="100"
                    :formatter="timestampToTime"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="week"
                    label="星期"
                    width="100">
                  </el-table-column>
                </el-table-column>
                <el-table-column prop="ZHZ" align="center" label="值班厅领导(指挥长)">
                  <el-table-column
                    prop="zhzName"
                    label="姓名"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="zhzPosition"
                    label="职务"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="zhzPhone"
                    label="联系方式"
                    width="120">
                  </el-table-column>
                </el-table-column>
              <el-table-column prop="ZBZ" align="center" label="值班厅领导(值班长)">
                <el-table-column
                  prop="zbzRoom"
                  label="处室">
                </el-table-column>
                <el-table-column
                  prop="zbzName"
                  label="姓名"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="zhzPosition"
                  label="职务"
                  >
                </el-table-column>
                <el-table-column
                  prop="zbzPhone"
                  label="联系方式"
                  width="120">
                </el-table-column>
              </el-table-column>
              <el-table-column prop="ZBY" align="center" label="值班厅领导(值班员)">
                <el-table-column
                  prop="zbyName"
                  label="姓名"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="zbyPhone"
                  label="联系方式"
                  width="150">
                </el-table-column>
              </el-table-column>
              <el-table-column prop="DT" align="center" label="一楼大堂值班">
                <el-table-column
                  prop="whiteShift"
                  label="白班"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="nightShift"
                  label="夜班"
                  width="100">
                </el-table-column>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length">
              </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
<!--        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">-->
<!--            <el-form ref="form" :model="form" label-width="50px">-->
<!--                <el-form-item label="日期">-->
<!--                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="姓名">-->
<!--                    <el-input v-model="form.name"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="地址">-->
<!--                    <el-input v-model="form.address"></el-input>-->
<!--                </el-form-item>-->

<!--            </el-form>-->
<!--            <span slot="footer" class="dialog-footer">-->
<!--                <el-button @click="editVisible = false">取 消</el-button>-->
<!--                <el-button type="primary" @click="saveEdit">确 定</el-button>-->
<!--            </span>-->
<!--        </el-dialog>-->

        <!-- 删除提示框 -->
<!--        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>-->
<!--            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>-->
<!--            <span slot="footer" class="dialog-footer">-->
<!--                <el-button @click="delVisible = false">取 消</el-button>-->
<!--                <el-button type="primary" @click="deleteRow">确 定</el-button>-->
<!--            </span>-->
<!--        </el-dialog>-->
    </div>
</template>

<script>
    // import { fetchData } from '../../api/index';
    import XLSX from 'xlsx'
    import FileSaver from 'file-saver'

    export default {
        name: 'basetable',
        data() {
            return {
                tableData: [
                ],
                currentPage:1, //初始页
                pagesize:10,    //    每页的数据
                userList: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                editVisible: false,
                delVisible: false,
                form: {
                    name: '',
                    date: '',
                    address: ''
                },
                idx: -1,
                id: -1,
                cityName: '',
            }
        },
        created() {
            this.getData();
        },
        // computed: {
        //     data() {
        //         return this.tableData.filter((d) => {
        //             let is_del = false;
        //             for (let i = 0; i < this.del_list.length; i++) {
        //                 if (d.name === this.del_list[i].name) {
        //                     is_del = true;
        //                     break;
        //                 }
        //             }
        //             if (!is_del) {
        //                 if (d.address.indexOf(this.select_cate) > -1 &&
        //                     (d.name.indexOf(this.select_word) > -1 ||
        //                         d.address.indexOf(this.select_word) > -1)
        //                 ) {
        //                     return d;
        //                 }
        //             }
        //         })
        //     }
        // },
        methods: {
            timestampToTime (row, column) {
              let date = new Date(parseInt(row.date));
              let Y = date.getFullYear() + '-';
              let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '月' : date.getMonth() + 1 + '月';
              let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
              let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
              let m = date.getMinutes()  < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
              let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
              return M + D + "日";

            },
            // 初始页currentPage、初始每页数据数pagesize和数据data
            handleSizeChange: function (size) {
              this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
              this.currentPage = currentPage;
            },
            getData() {
              this.$axios.get('/api/onDuty/selectAllOnDuty',{
              }).then(res => {
                this.tableData=res.data;
              }).catch(function(error){
                console.log(error);
              });
            },
            upload(file,fileList){
              let files = {0:file.raw};
              this.readExcel(files);
            },
            readExcel(files) {//表格导入
              if(files.length<=0){//如果没有文件名
                return false;
              }else if(!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())){
                this.$Message.error('上传格式不正确，请上传xls或者xlsx格式');
                return false;
              }

              const fileReader = new FileReader();
              fileReader.onload = (ev) => {
                try {
                  const data = ev.target.result;
                  const workbook = XLSX.read(data, {
                    type: 'binary'
                  });
                  const wsname = workbook.SheetNames[0];//取第一张表
                  const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);//生成json表格内容

                  //重写数据
                  try{
                    for(let i=3;i<ws.length-1;i++){
                      this.$axios.post('/api/onDuty/insOnDuty', {
                          day: ws[i].广东省司法厅值班安排表,
                          week: ws[i].__EMPTY,
                          zhzName: ws[i].__EMPTY_1,
                          zhzPosition: ws[i].__EMPTY_2,
                          zhzPhone: ws[i].__EMPTY_3,
                          zbzRoom: ws[i].__EMPTY_4,
                          zbzName: ws[i].__EMPTY_5,
                          zbzPosition: ws[i].__EMPTY_6,
                          zbzPhone: ws[i].__EMPTY_7,
                          zbyName: ws[i].__EMPTY_8,
                          zbyPhone: ws[i].__EMPTY_9,
                          whiteShift: ws[i].__EMPTY_10,
                          nightShift: ws[i].__EMPTY_11,
                      }).then(res => {
                        console.log(res);
                      }).catch(function(error){
                        console.log(error);
                      });
                      // this.tableData.push(onDuty);
                    }
                  }catch(err){
                    console.log(err)
                  }
                  // this.$refs.upload.value = '';
                } catch (e) {
                  return e;
                }
              };
              fileReader.readAsBinaryString(files[0]);
            },


            cityUpload(file,fileList){
              let files = {0:file.raw};
              this.cityReadExcel(files);
            },
            cityReadExcel(files) {//表格导入
              if(files.length<=0){//如果没有文件名
                return false;
              }else if(!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())){
                this.$Message.error('上传格式不正确，请上传xls或者xlsx格式');
                return false;
              }

              const fileReader = new FileReader();
              fileReader.onload = (ev) => {
                try {
                  const data = ev.target.result;
                  const workbook = XLSX.read(data, {
                    type: 'binary'
                  });
                  const wsname = workbook.SheetNames[0];//取第一张表
                  const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);//生成json表格内容

                  //重写数据
                  try{
                    console.log(ws[0]);
                    this.cityName=ws[0].值班安排表;
                    for(let i=3;i<ws.length-1;i++){
                      // console.log(ws[i])
                      this.$axios.post('/api/onDuty/insCityOnDuty', {
                        day: ws[i].值班安排表,
                        week: ws[i].__EMPTY,
                        name: ws[i].__EMPTY_1,
                        position: ws[i].__EMPTY_2,
                        phone: ws[i].__EMPTY_3,
                        userId:1,
                        cityId:this.cityName,
                      }).then(res => {

                        console.log(res);
                      }).catch(function(error){
                        console.log(error);
                      });
                      this.$axios.post('/api/onDuty/insCityOnDuty', {
                        day: ws[i].值班安排表,
                        week: ws[i].__EMPTY,
                        room: ws[i].__EMPTY_4,
                        name: ws[i].__EMPTY_5,
                        position: ws[i].__EMPTY_6,
                        phone: ws[i].__EMPTY_7,
                        userId:2,
                        cityId:this.cityName,
                      }).then(res => {
                        console.log(res);
                      }).catch(function(error){
                        console.log(error);
                      });
                      this.$axios.post('/api/onDuty/insCityOnDuty', {
                        day: ws[i].值班安排表,
                        week: ws[i].__EMPTY,
                        name: ws[i].__EMPTY_8,
                        phone: ws[i].__EMPTY_9,
                        userId:3,
                        cityId:this.cityName,
                      }).then(res => {
                        console.log(res);
                      }).catch(function(error){
                        console.log(error);
                      });
                      // this.tableData.push(onDuty);
                    }
                  }catch(err){
                    console.log(err)
                  }
                  // this.$refs.upload.value = '';
                } catch (e) {
                  return e;
                }
              };
              fileReader.readAsBinaryString(files[0]);
            }

        //     // 获取 easy-mock 的模拟数据
        //     getData() {
        //         fetchData({
        //             page: this.cur_page
        //         }).then((res) => {
        //             this.tableData = res.list;
        //         })
        //     },
        //     search() {
        //         this.is_search = true;
        //     },
        //     formatter(row, column) {
        //         return row.address;
        //     },
        //     filterTag(value, row) {
        //         return row.tag === value;
        //     },
        //     handleEdit(index, row) {
        //         this.idx = index;
        //         this.id = row.id;
        //         this.form = {
        //             id: row.id,
        //             name: row.name,
        //             date: row.date,
        //             address: row.address
        //         }
        //         this.editVisible = true;
        //     },
        //     handleDelete(index, row) {
        //         this.idx = index;
        //         this.id = row.id;
        //         this.delVisible = true;
        //     },
        //     delAll() {
        //         const length = this.multipleSelection.length;
        //         let str = '';
        //         this.del_list = this.del_list.concat(this.multipleSelection);
        //         for (let i = 0; i < length; i++) {
        //             str += this.multipleSelection[i].name + ' ';
        //         }
        //         this.$message.error('删除了' + str);
        //         this.multipleSelection = [];
        //     },
        //     handleSelectionChange(val) {
        //         this.multipleSelection = val;
        //     },
        //     // 保存编辑
        //     saveEdit() {
        //         this.editVisible = false;
        //         this.$message.success(`修改第 ${this.idx+1} 行成功`);
        //         if(this.tableData[this.idx].id === this.id){
        //             this.$set(this.tableData, this.idx, this.form);
        //         }else{
        //             for(let i = 0; i < this.tableData.length; i++){
        //                 if(this.tableData[i].id === this.id){
        //                     this.$set(this.tableData, i, this.form);
        //                     return ;
        //                 }
        //             }
        //         }
        //     },
        //     // 确定删除
        //     deleteRow(){
        //         this.$message.success('删除成功');
        //         this.delVisible = false;
        //         if(this.tableData[this.idx].id === this.id){
        //             this.tableData.splice(this.idx, 1);
        //         }else{
        //             for(let i = 0; i < this.tableData.length; i++){
        //                 if(this.tableData[i].id === this.id){
        //                     this.tableData.splice(i, 1);
        //                     return ;
        //                 }
        //             }
        //         }
        //     }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: #ff0000;
    }
    .mr10{
        margin-right: 10px;
    }
</style>
