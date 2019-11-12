import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     advancedSearchFlag : false,

  },
  mutations: {
 //aca se usa sincronas, palabra clave será commit
     setAdvancedSearchFlag(state, advancedSearchFlag){
       state.advancedSearchFlag= advancedSearchFlag;
     }
  },
  actions: {
// llamadas asincronas, palabra clave dispatch
  }
})