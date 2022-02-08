<template>
  <div class="joe">
    <nav-header @add='add'></nav-header>
    <nav-main :list="list" @del='del'>
    </nav-main>
    <navfooter :list="list" @clear="clear"></navfooter>
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader/NavHeader.vue'
import NavMain from '@/components/NavMain/NavMain.vue'
import Navfooter from '@/components/Navfooter/Navfooter.vue'
import {defineComponent, computed,ref,onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRouter,useRoute} from 'vue-router'
export default defineComponent({
  name:'Home',
  components:{
    NavHeader,
    NavMain,
    Navfooter
  },
  setup(){
    let store=useStore()
    let list=computed(()=>{
      return store.state.list
    })
    let value=ref('')
    let add=(val)=>{
      value.value=val
      let flag=true
      list.value.map((item)=>{
        if (item.title===value.value){
          flag=false
          alert("the mission have added")
        }
      })
      if (flag){
        store.commit('add',{
          title:value.value,
          complete:false
        })
      }

      console.log(val)
    }
    let del=(val)=>{
      store.commit('delete',val)
    }
    let clear=(val)=>{
      store.commit('clear',val)
    }
    return{
      add,
      value,
      list,
      del,
      clear
    }
  }
})

</script>

<style scoped lang="scss">
.joe{
  position: absolute;
  margin: 0 auto;
}
</style>