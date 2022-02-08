<template>
<div>
  <input placeholder="spell your num" v-model="value" @keydown.enter="enter">
</div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: "NavHeader",
  setup(props,ctx){
    let value = ref('')
    let enter = ()=>{
      ctx.emit('add',value.value)
      value.value=''
      console.log(value.value)
    }
    return{
      value,
      enter
    }
  }
})
</script>

<style scoped>
input{
  margin-bottom: 10px;
}
</style>