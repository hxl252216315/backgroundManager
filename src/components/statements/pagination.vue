<template>
  <div>
      <ul class="pagination">
        <li><a @click.prevent="firstPageClick">首页</a></li>
        <li :class="{disabled:pageNumber==1}"><a @click.prevent="lastPageClick">上一页</a></li>
        <li v-for="num in size<total?size:total" :class="{active:(num+start) == pageNumber}"><a @click.prevent="pageNumber = num+start">{{ num+start }}</a></li>
        <li :class="{disabled:pageNumber==total}"><a @click.prevent="nextPageClick">下一页</a></li>
        <li ><a @click.prevent="finalPageClick">尾页</a></li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "pagination",
        data:function () {
          return {
            start:0,
            size:5,
            pageNumber:this.propPageNumber
          }
        },
        props:{
          propPageNumber:Number,
          total:Number
        },
        watch:{
          pageNumber:function (newValue, oldValue) {
            this.$emit("changePageNumber",newValue);
          }
        },
        methods:{
          firstPageClick:function(){
            this.pageNumber = 1;
            this.start = 0;
          },
          finalPageClick:function(){
            this.start = this.total>this.size?(this.total - this.size):0;
            this.pageNumber = this.total;
          },
          nextPageClick:function () {
            if(this.pageNumber == this.total){
              return;
            }
            this.pageNumber++;
            if(this.pageNumber>(this.start+this.size)){
              this.start++;
            }
          },
          lastPageClick:function () {
            if(this.pageNumber == 1){
              return;
            }
            this.pageNumber--;
            if(this.pageNumber<(this.start+1)){
              this.start--;
            }
          }
        }
    }
</script>

<style scoped>

.pagination:after{
  content: " ";
  display: table;
  clear: both;
}
.pagination{
  margin-left: 15px;
  margin-right: 15px;
}
.pagination:before{
  content: " ";
  display: table;
}
ul.pagination>li{
  display: inline;
}
.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
   z-index: 3;
   color: #fff;
   cursor: default;
   background-color: #337ab7;
   border-color: #337ab7;
 }
.pagination>li>a {
  background: #fafafa;
  color: #666;
  display: block;
}
.pagination>li>a, .pagination>li>span {
  position: relative;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
.pagination>li:first-child>a, .pagination>li:first-child>span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination>.disabled>a, .pagination>.disabled>a:focus, .pagination>.disabled>a:hover, .pagination>.disabled>span, .pagination>.disabled>span:focus, .pagination>.disabled>span:hover {
  color: #777;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
ul.pagination {
  margin: 2px 0;
  white-space: nowrap;
}
.pagination>li>a:hover{
  background-color: #cccccc;
  cursor: pointer;
}
</style>
