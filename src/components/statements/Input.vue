<template>
  <div class="input-group has-success">
    <div class="input-group-addon input-group-addon-90">
      <span  style="width:25px;">{{ label }}</span>
    </div>
    <input class="form-control"  autocomplete="off" :value="value" @input="$emit('input', $event.target.value)"
           type="text" :placeholder="ph" @keyup.enter="$emit('input-click')"/>
  </div>
</template>

<script>
    export default {
        name: "Input",
        props:[
          "label","ph","value",
        ]
    }
</script>

<style scoped>
  .input-group-addon-90 {
    min-width: 100px;
  }
</style>
