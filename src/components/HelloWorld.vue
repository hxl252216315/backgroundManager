<template>
  <div class="sidebar">
    awefawefa
  </div>
</template>

<script>

  export default {
    data() {
      return {
        collapse: false,
        items: [
          {
            icon: 'el-icon-setting',
            index: 'dashboard',
            title: '系统首页'
          },
          {
            icon: 'el-icon-tickets',
            index: 'table',
            title: '基础表格'
          },
          {
            icon: 'el-icon-message',
            index: 'tabs',
            title: 'tab选项卡'
          },
          {
            icon: 'el-icon-date',
            index: '3',
            title: '表单相关',
            subs: [
              {
                index: 'form',
                title: '基本表单'
              },
              {
                index: 'editor',
                title: '富文本编辑器'
              },
              {
                index: 'markdown',
                title: 'markdown编辑器'
              },
              {
                index: 'upload',
                title: '文件上传'
              }
            ]
          },
          {
            icon: 'el-icon-star-on',
            index: 'charts',
            title: 'schart图表'
          },
          {
            icon: 'el-icon-rank',
            index: 'drag',
            title: '拖拽列表'
          },
          {
            icon: 'el-icon-warning',
            index: 'permission',
            title: '权限测试'
          },
          {
            icon: 'el-icon-error',
            index: '404',
            title: '404页面'
          }
        ]
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    },
    created(){


    }
  }
</script>

<style scoped>
  .sidebar{
    height: 100%;
  }

</style>
