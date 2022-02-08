import { createStore } from 'vuex'
import {ref} from "vue";

export default createStore({
  state: {
    list:[
      { title: 'eat',
        complete:false},
      { title: 'sleep',
        complete:false},
      { title: 'drink',
        complete:true},

    ]
  },
  mutations: {
    add(state,payload){
      state.list.push(payload)
    },
    delete(state,payload){
      state.list.splice(payload,1)
    },
    clear(state,payload){
      state.list=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
