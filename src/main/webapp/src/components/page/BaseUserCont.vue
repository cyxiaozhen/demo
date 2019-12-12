<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 值班管理平台-值班人员管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box" >
        <el-form :inline="true">
<!--          <el-form-item>-->
<!--            <el-select v-model="select_cate" placeholder="筛选职务" class="handle-select mr10">-->
<!--              <el-option key="1" label="广东省" value="广东省"></el-option>-->
<!--              <el-option key="2" label="湖南省" value="湖南省"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>-->
<!--            <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>-->
<!--          </el-form-item>-->
          <el-form-item>
            <el-button type="primary" @click="downloadTemplate">导出人员信息</el-button>
          </el-form-item>
          <el-form-item>
            <el-upload
              ref="upload"
              accept=".xls,.xlsx"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :auto-upload="true"
              :on-change="upload"
            >
              <el-button type="primary">导入人员信息</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <el-table id="outputs" :data="outputs" border class="table" ref="multipleTable" stripe>
<!--        @selection-change="handleSelectionChange"-->
        <el-table-column prop="id" label="序号" sortable width="120">
        </el-table-column>
        <el-table-column prop="name" label="人员姓名" width="150">
        </el-table-column>
        <el-table-column prop="position" label="职务" width="150">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话" width="150">
        </el-table-column>
        <el-table-column prop="room" label="处室" width="150">
        </el-table-column>
        <el-table-column prop="remark" label="备注">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :page-size="pagesize" :total="outputs.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
    import XLSX from 'xlsx'
    import FileSaver from 'file-saver'

    export default {
      name: "BaseUserCont",
      data() {
        return {
          pagesize: 10, //设置每页显示条目个数为10
          currentPage: 1, //设置当前页默认为1
          filterAutomobileInfs: [], //分页前的数据
          output: [
            {id:'100',name:'张三',position:'值班长',phone:'13535357889',room:'处室二',remark:'一米六'},
            {id:'100',name:'张三',position:'值班长',phone:'13535357889',room:'处室二',remark:'一米六'},
          ]
        }
      },
      computed: {
        //showTable计算属性通过slice方法计算表格当前应显示的数据
        outputs() {
          return this.output.slice(
            (this.currentPage - 1) * this.pagesize,
            this.currentPage * this.pagesize
          );
        }
      },
      mounted() {
      },
      methods: {
        // // 分页导航
        // handleCurrentChange(val) {
        //   this.currentPage = val;
        //   this.getData();
        // },
        // 获取 easy-mock 的模拟数据
        // getData() {
        //   outputs({
        //     page: this.currentPage
        //   }).then((res) => {
        //     this.outputs = res.list;
        //   })
        // },
        // 设置当前页为点击页
        handleCurrentChange(currentPage) {
          this.currentPage = 1;
          //筛选方法
          this.currentPage = currentPage;
        },
        downloadTemplate(){//导出excel
          let xlsxParam = { raw: true };// 导出的内容只做解析，不进行格式转换
          let wb = XLSX.utils.table_to_book(document.querySelector('#outputs'),xlsxParam);
          let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
          try {
            FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '值班人员信息.xlsx')
          } catch (e) {
            if (typeof console !== 'undefined')
              console.log(e, wbout)
          }
          return wbout
        },

        upload(file,fileList){
          // console.log("file",file);
          // console.log("fileList",fileList);
          let files = {0:file.raw};
          this.readExcel(files);
        },
        readExcel(files) {//表格导入
          var that = this;
          // console.log(files);
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
              // console.log(ws);
              // that.peopleArr = [];//清空接收数据
              // if(that.peopleArr.length == 1 && that.peopleArr[0].roleName == "" && that.peopleArr[0].enLine == ""){
              //     that.peopleArr = [];
              // }
              //重写数据
              try{
                for(let i=0;i<ws.length;i++){
                  const sheetData = {
                    id: ws[i].序号,
                    name: ws[i].人员姓名,
                    position: ws[i].职务,
                    phone: ws[i].联系电话,
                    room: ws[i].处室,
                    remark: ws[i].备注
                  };
                  this.output.push(sheetData);
                }
              }catch(err){
                console.log(err)
              }
              this.$refs.upload.value = '';

            } catch (e) {

              return false;
            }
          };
          fileReader.readAsBinaryString(files[0]);
        }
      },
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
