<template>
<div class="container">
  <div>finished{{isComplete}}/total{{list.length}}</div>
  <div v-if="isComplete > 0" class="btn"><button @click="clear">clear finished</button></div>
</div>
</template>

<script>
import {defineComponent,ref,computed} from 'vue'
export default defineComponent({
  name:'Navfooter',
  props:{
    list:{
      type:Array,
      required:true
    }
  },
  setup(props,ctx){
    let isComplete = computed(()=>{
      let arr=props.list.filter(item=>{
        return item.complete

      })
      return arr.length
    })

    let clear=()=>{
      let arr=props.list.filter(item=>{
        return item.complete==false})
      console.log('clear')
      ctx.emit('clear',arr)
    }
    return{
      isComplete,

      clear
    }
  },

})
</script>

<style scoped lang="scss">
.container{
  display: flex;
  align-items: center;
}
.btn{
  margin-left: 10px;
}
</style>