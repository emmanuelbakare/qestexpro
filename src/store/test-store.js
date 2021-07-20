import axios from 'axios'
// import { Notify } from 'quasar'
import Notifier from './../utils/notify'
import Estate from './db/estateList'
import Vue from 'vue'

const state={
 estate:Estate
}
const mutations={

  addEstate(state, payload){
    state.estate.unshift(payload)  // add to begining of array
    // state.estate.push(payload) // add to end of array
  }

}

const actions={

}

const getters={

    getEstate(state){
      console.log('about to get estate')
      return state.estate
    }


}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}
