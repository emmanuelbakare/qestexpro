import axios from 'axios'
// import { Notify } from 'quasar'
import Notifier from './../utils/notify'

const state={

}
const mutations={

}

const actions={ 
  list_onboardings({commit}, payload){
    console.log(' from ACTION',payload)
  }

}

const getters={


}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}
