<template>
<div><button @click="start">Start</button></div>
</template>

<script>
import {defineComponent,ref} from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
  name:'Start',
  setup(){
    let router=useRouter()
    let name=ref('jack')
    let start =()=>{
      router.push('/home')
    }
    return{
      start
    }
  }
})
</script>

<style scoped>

</style>