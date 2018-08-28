<template>
  <div class="box">
    <div class="box-header">
      <legend >{{ title}}</legend>
    </div>
    <div class="box-body">
      <div class="row">
        <div class="col-sm-12">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Box",
        props:[
          'title'
        ]
    }
</script>

<style scoped>
  .box{
    position: relative;
    border-radius: 3px;
    background: #ffffff;
    border-top: 3px solid #d2d6de;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }
  .box-header {
    color: #444;
    display: block;
    padding: 10px;
    position: relative;
  }
  .box-title {
    display: inline-block;
    font-size: 18px;
    margin: 0;
    line-height: 1;
  }
  .box-body {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 10px;
  }
</style>
