import axios from 'axios'
import { Notify } from 'quasar'
import Vue from 'vue'
// import { Notify } from 'quasar'
import Notifier from './../utils/notify'
import set from './../utils/settings'
import {objDelete, ojbDelete} from  './../utils/tools'

const state={
  onboardingList:'',
  OBcreate:true,
  editOB:{
    title:'',
    message:'',
    attachment:[],
  },

}
const mutations={
  addOnboarding(state, payload){
    // state.onboardingList.push(payload)  // add to botton/end of array
    state.onboardingList.unshift(payload) // add to  top of array
  },

  setOnboardingList(state, payload){
    state.onboardingList=payload
  },

  deleteOB(state, objToDel){
    // console.log('about to delete ',objToDel, 'FROM : ', state.onboardingList )
    state.onboardingList= objDelete(objToDel, state.onboardingList)
    // state.onboardingList= state.onboardingList.splice(state.onboardingList[objToDel.id],1)

  },
  setEditOB(state, result){
    state.editOB=result
    console.log('Edit OB in State from mutation', state.editOB)
  },
  setOBcreate(state, result){
    state.OBcreate=result
  }

}

const actions={
  post_onboardings({commit}, payload){
    let fdata =new FormData()
    fdata.append('title', payload.info.title)
    fdata.append('message', payload.info.message)
    fdata.append('attachment', payload.info.attachment)
    set.url=`http://localhost:8000/api/estate/${payload.estate.id}/onboarding/`
    console.log('DATA ', payload, 'SETTING ', set, 'FORM DATA' , fdata, 'URL', set.url);
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
      Notifier('Onboarding ' +onboarding.title+ " successfully deleted ", 'red', 'bottom')
      commit('deleteOB', onboarding)


    })
    .catch(error=>{
      console.log('ERROR OCCURRED', error)
    })
  },
  edit_onboarding({commit},editedData){


    set.url=`http://localhost:8000/api/estate/onboarding/${editedData.id}/`
    console.log('edit URL ',set.url)
    console.log('Onboarding Data ', editedData)

    axios.patch(set.url,editedData,set.config)
    .then(result=>{
      // commit('addOnboarding', result.data)
      Notifier (editedData.title + 'UPDATED','positive', 'bottom')
    // return result
    }).catch(error=>{
      console.log('THERE IS AN ERROR:', error.response)
      Notifier('CANNOT UPDATE ONBOARDING : ', error.response)
    })



  }

}

const getters={
  getOnboardingList(state){
    return state.onboardingList
  },
  getEditOB(state){
    return state.editOB
  },
  getOBcreate(state){
    return state.OBcreate
  }

}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}
