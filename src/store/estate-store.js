import axios from 'axios'
// import { Notify } from 'quasar'
import Notifier from './../utils/notify'

const state={
  search:'',
  estates:{},
  estateType:[],

  // joinDiag:false,
  // testval:'Something Fromo State',

}
const mutations={

  setSearch(state, value){
    state.search=value
  },
  setEstates(state, result){
    state.estates=result
  },
  setEstateType(state, result){
    state.estateType=result
  },

}

const actions={
  search_estate({commit, getters}, payload){
    let key = localStorage.getItem('loggedIn')
    let current_user=JSON.parse(localStorage.getItem('user'))
    let config={
        headers:{
          'Authorization':`Token ${key}`
        },
    }
    let url=`http://localhost:8000/api/estate/?status=1&search=${getters.getSearch}`

    axios.get(url)
      .then(result=>{
        console.log('RESULT : ', result.data)
        commit('setEstates', result.data)
      })
      .catch(error=>{
        console.log('THERE IS AN : ', error.message)
      })

  },
  estate_type({commit}){
    let key = localStorage.getItem('loggedIn')
    let current_user=JSON.parse(localStorage.getItem('user'))
    let config={
        headers:{
          'Authorization':`Token ${key}`
        },
    }

    let url="http://localhost:8000/api/estate/type/"

    axios.get(url)
      .then(result=>{
        commit('setEstateType', result.data)
      })
      .catch(error=>{
        console.log('THERE IS AN ERROR : ', error.message)
    })



  },
  register_estate({commit},payload){
      let key = localStorage.getItem('loggedIn')

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
        'estate_type':payload.type,
        // 'admin':[payload.admin],
      }

      let url ='http://localhost:8000/api/estate/' //url for estate registration
      console.log('URL : ', url,' DATA : ',data,'CONFIG : ',config)
      if(key){
        return axios.post(url,data,config)
          .then(res=>{
              console.log('New Estate Successfully registered ', res.data)
              Notifier ('New Estate Successfully Registered','positive', 'bottom')
              return res
              //initiate the Create Resident and create the admin's resident record

          })
          .catch(error=>{
            console.log('THERE IS AN ERROR : ', error.message)
          })
      } else {
        console.log('You are not logged in')
      }

  },
  register_estate_resident({commit},payload){
    let key = localStorage.getItem('loggedIn')
    let current_user=JSON.parse(localStorage.getItem('user'))
    let config={
        headers:{
          'Authorization':`Token ${key}`
        },
    }


    let url ='http://localhost:8000/api/estate/resident2/' //url for estate registration
    console.log('URL : ', url,' DATA : ',payload,'CONFIG : ',config)
    if(key){
      return axios.post(url,payload,config)
        .then(result=>{
            console.log('New Estate Successfully registered ', result.data)
            Notifier ('New Estate Successfully Registered','positive', 'bottom')
            return res

        })
        .catch(error=>{
          console.log('THERE IS AN ERROR:', error.message)

          Notifier('THERE IS AN ERROR: ', error.message)

        })
    } else {
      Notifier('You are not Logged in')
    }

},

  setSearch({commit}, value){
    commit('setSearch', value)
  }
}

const getters={
  getSearch(state){
    return state.search
  },
  getEstates(state){
    return state.estates
  },
  getEstateType(state){
    return state.estateType
  }

}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}
