import axios from 'axios'
import { Notify } from 'quasar'
import Vue from 'vue'
// import { Notify } from 'quasar'
import Notifier from './../utils/notify'
import set from './../utils/settings'
import {objDelete, ojbDelete} from  './../utils/tools'

const state={
  onboardingList:'',

}
const mutations={
  addOnboarding(state, payload){
    // state.onboardingList.push(payload)  // add to botton/end of array
    state.onboardingList.unshift(payload) // add to  top of array
  },

  setOnboardingList(state, payload){
    state.onboardingList=payload
  },
  deleteOB(state, ObtoDelete){
    objDelete(ObtoDelete, state.onboardingList)
  }

}

const actions={
  post_onboardings({commit}, payload){
    let fdata =new FormData()
    fdata.append('title', payload.info.title)
    fdata.append('message', payload.info.message)
    fdata.append('attachment', payload.info.attachment)
    window.$fdata=fdata
    set.url=`http://localhost:8000/api/estate/${payload.estate.id}/onboarding/`
    console.log('DATA ', payload, 'SETTING ', set, 'FORM DATA' , fdata);
    if(set.key){
      axios.post(set.url,fdata,set.config)
        .then(result=>{
          // commit('setOnboardingList', result.data)
          commit('addOnboarding', result.data)
          Notifier ('New Onboarding created','positive', 'bottom')
        // return result
        }).catch(error=>{
          console.log('THERE IS AN ERROR:', error.response)
          Notifier('CANNOT CREATE ONBOARDING : ', error.response)
        })
    }

  },
  list_onboardings({commit}){
    set.url=`http://localhost:8000/api/estate/67/obList/`
    axios.get(set.url)
    .then(result=>{
      console.log('LIST OF ONBOARDINGS ',result.data)
      commit('setOnboardingList', result.data)
      // return result.data


    })
    .catch(error=>{
      console.log('ERROR OCCURRED', error.response)
    })
  },
  delete_onboarding({commit},onboarding){
    set.url=`http://localhost:8000/api/estate/onboarding/${onboarding.id}/`
    console.log('IN ACTION: DELETE OBJECT ',onboarding,' USING ',set.url)
    axios.delete(set.url)
    .then(result=>{
      console.log('Onboarding', onboarding.title, "successfully deleted ", result.data)
      commit('deleteOB', onboarding)
      Notify('Onboarding' +onboarding.title+ "successfully deleted ", 'red', 'bottom')


    })
    .catch(error=>{
      console.log('ERROR OCCURRED', error.response)
    })
  }

}

const getters={
  getOnboardingList(state){
    return state.onboardingList
  },


}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}
