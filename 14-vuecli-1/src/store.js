import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
   state: {
     numero: 10
   },
   mutations: {
     cambiarModo(state){
      if(state.value == true) state.value = false
      else state.value = true
     },
     aumentar(state){
        state.numero++
     }
   }
 })
