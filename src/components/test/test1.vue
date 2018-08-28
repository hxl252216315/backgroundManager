<template>
  <div>{{result}}</div>
</template>

<script>
    export default {
        name: "test1",
        data(){
          return {
            result:""
          }
        },
        created:function () {
          this.$http.get("/test/index")
            .then(response=>{
              this.result = response.data;
            }).catch(error=>{

          });
        }
    }
</script>

<style scoped>

</style>
