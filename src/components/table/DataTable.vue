<template>
  <table class="table table-hover table-striped table-bordered">
    <thead>
    <tr>
      <th v-for="column in columns" v-if="!column.hidden" :key="column.id">{{column.title}}</th>
      <th style="width: 280px">操作</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="(rowData,index) in tableData" :key="rowData.id">
        <td v-for="column in columns" v-if="!column.hidden" v-bind:key="column.id"
            v-html="column.render?column.render(rowData[column.id],rowData,index,pageNumber,pageSize):rowData[column.id]">
        </td>
        <td>
          <div class="text-center">
            <button class="btn btn-sm btn-danger" @click="tableData.splice(index,1)"><i class="fa fa-trash-o fa-fw"></i><span>删除</span></button>
            <button class="btn btn-sm btn-success"><i class="fa fa-edit fa-fw"></i><span>修改</span></button>
            <button class="btn btn-sm btn-warning"><i class="fa fa-trash-o fa-fw"></i><span>详情</span></button>
          </div>
        </td>
      </tr>
      <tr v-if="tableData.length==0"><td :colspan="colLength+1" class="text-center">没有数据</td></tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</template>

<script>
    export default {
        name: "DataTable",
        props:[
          "columns","tableData","pageNumber","pageSize"
        ],
        computed:{
          colLength:function () {
            return this.columns.filter(function (col) {
                      return !col.hidden;
                    }).length;
          }
        }
    }
</script>

<style scoped>

</style>
