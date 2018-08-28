<template>
  <div class="div-container">
    {{abc}}
    <!--<div class="content-body">
      <div class="row">
        <div class="col-xs-12">
          <v-box title="查询条件">
            <div class="row form-horizontal">
              <fieldset>
                <div class="form-group">
                  <div class="col-md-4">
                    <v-input label="结算单号" v-model="queryCondition.accNo" ph="请输入结算单号" @input-click="queryLists(pageNumber,pageSize)"></v-input>
                  </div>
                  <div class="col-md-4">
                    <v-input label="车牌号码" v-model="queryCondition.carCard" ph="请输入车牌号码" @input-click="queryLists(pageNumber,pageSize)"></v-input>
                  </div>
                  <div class="col-md-4">
                    <v-input label="客户名称" v-model="queryCondition.custName" ph="请输入客户名称" @input-click="queryLists(pageNumber,pageSize)"></v-input>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-4">
                    <v-input label="电话号码" v-model="queryCondition.custTel" ph="请输入电话号码" @input-click="queryLists(pageNumber,pageSize)"></v-input>
                  </div>
                  <div class="col-md-4">
                    <v-input label="接单人" v-model="queryCondition.jdr" ph="请输入接单人" @input-click="queryLists(pageNumber,pageSize)"></v-input>
                  </div>
                  <div class="col-md-4">
                    <v-input-dropdown label="结算状态" v-model="queryCondition.status"  @input-click="queryLists(pageNumber,pageSize)"></v-input-dropdown>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="text-center">
              <button class="btn btn-primary btn-fw" @click="queryLists(pageNumber,pageSize)">查询</button>
              <button class="btn btn-primary btn-fw" @click="resetQuery">重置</button>
            </div>
          </v-box>
          <v-box title="结算单" style="position: relative">
            <div v-show="popShow" style="position: absolute;top:-30px;"><i class="fa fa-snowflake-o fa-spin"></i></div>
            <v-table :tableData="statementData"  :columns="columns" :pageNumber="pageNumber" :pageSize="pageSize"></v-table>
            <v-pagination :propPageNumber="pageNumber" :total="total" @changePageNumber="queryLists($event,pageSize)"></v-pagination>
          </v-box>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
  import DataTable from "@/components/table/DataTable"
  import Box from "@/components/box/Box"
  import Input from "@/components/statements/Input"
  import InputDropDown from "@/components/statements/InputDropDown"
  import Pagination from "@/components/statements/pagination"
    export default {
        name: "list",
        components:{
          "v-table":DataTable,
          "v-box":Box,
          "v-input":Input,
          "v-pagination":Pagination,
          "v-input-dropdown":InputDropDown
        },
      data:function () {
        return {
          abc:"efaefawe",
          queryCondition:{

          },
          statementData:[],
          pageSize:2,
          pageNumber:1,
          total:0,
          popShow:false,
          columns:[
            { title:"序号",id:"index",render:function (value,row,index,_pageNumber,_pageSize) {
                return (_pageNumber-1)*_pageSize+index+1;
              }},
            { title:"结算单号",id:"accNo",hidden:true},
            { title:"客户名称",id:"custName"},
            { title:"联系人",id:"lxr" },
            { title:"电话号码",id:"custTel" },
            { title:"车牌号",id:"carCard"},
            { title:"发动机号",id:"fdjh"},
            { title:"开始日期",id:"startDate"},
            { title:"结算日期",id:"endDate"},
            { title:"实收金额(￥)",id:"ssje"},
            { title:"接单人",id:"jdr"},
            { title:"是否结算",id:"balanceStatus"}
          ]
        }
      },
      methods:{
        queryLists:function (pageNumber,pageSize) {
          this.popShow = true;
          this.pageNumber = pageNumber;
          let me = this;
          $.ajax({
            type:"get",
            url:this.global.restfulBasePath+"/accoutaut",
            data:{
              pageNumber:pageNumber,
              pageSize:pageSize,
              condition:JSON.stringify(me.queryCondition)
            },
            async:true,
            success:function (res) {
              me.statementData = res.result;
              me.total = res.total;
            },
            error:function (error) {
              console.log(error);

              console.log("错误");
            },
            complete:function () {
              me.popShow = false;
            },
            timeout:30000
          });
        },
        resetQuery:function () {
          this.queryCondition = {};
        }
      },
      created:function () {
        this.queryLists(this.pageNumber,this.pageSize);
      }
    }
</script>

<style scoped>
.content-body{
  padding: 15px 15px 0 15px;
}
.content-header>h1{
  font-size:24px;
}
.form-horizontal{
  margin-left: 0;
  margin-right: 0;
}
</style>
