import axios from 'axios'
// import { Notify } from 'quasar'
import Notifier from './../utils/notify'

const state={
  joinFormDiag:false,
}
const mutations={
  setJoinFormDiag(state, payload){
    state.joinFormDiag=payload
  }


}

const actions={

}

const getters={

  getJoinFormDiag(state){
    return state.joinFormDiag
  }


}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}
