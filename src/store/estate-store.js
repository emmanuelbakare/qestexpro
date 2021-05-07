import axios from 'axios'
// import { Notify } from 'quasar'
import Notifier from './../utils/notify'

const state={
  search:'',
  estates:{}

}
const mutations={

  setSearch(state, value){
    state.search=value
  },
  setSearchResult(state, result){
    state.result=estates
  }

}

const actions={
  searched_estate({comit, getters}, payload){
    let key = localStorage.getItem('loggedIn')
    let current_user=JSON.parse(localStorage.getItem('user'))
    let config={
        headers:{
          'Authorization':`Token ${key}`
        },
    }
    let url=`http://localhost:8000/api/estate/?status=1&search=${getters.getSearch}`
    console.log('Search Link : ', url)

    axios.get(url)
      .then(result=>{
        console.log('RESULT : ', result.data)
        commit('setSearchResult', result.data)
      })
      .catch(error=>{
        console.log('THERE IS AN : ', error.message)
      })

  },
  register_estate({commit},payload){
      let key = localStorage.getItem('loggedIn')
      let current_user=JSON.parse(localStorage.getItem('user'))
      let config={
          headers:{
            'Authorization':`Token ${key}`
          },
      }
      let data={
        'name':payload.name,
        'total_house':payload.total_house,
        'street1':payload.street1,
        'city':payload.city,
        'state_region':payload.city,
        'country':payload.country,
        'comment':payload.comment,
        'admin':current_user.pk,
      }

      let url ='http://localhost:8000/api/estate/' //url for estate registration
      console.log('URL : ', url,' DATA : ',data,'CONFIG : ',config)
      if(key){
        axios.post(url,data,config)
          .then(res=>{
              console.log('New Estate Successfully registered ', res.data)
              Notifier ('New Estate Successfully Registered','secondary')
          })
          .catch(error=>{
            console.log('THERE IS AN ERROR:', error.message)

          })
      } else {
        console.log('You are not logged in')
      }

  },
  setSearch({commit}, value){
    commit('setSearch', value)
  }
}

const getters={
  getSearch(state){
    return state.search

  }

}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}
