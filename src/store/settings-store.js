import axios from 'axios'
// import { Notify } from 'quasar'
import Notifier from './../utils/notify'

const state={
  joinFormDiag:false,
  onBoardFormDiag:false,
}
const mutations={
    setJoinFormDiag(state, payload){
      state.joinFormDiag=payload
    },
    setOnBoardFormDiag(state,val){
      state.onBoardFormDiag=val
    },

}

const actions={

}

const getters={

  getJoinFormDiag(state){
    return state.joinFormDiag
  },
  getOnBoardFormDiag(state){
    return state.onBoardFormDiag
  },


}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}
