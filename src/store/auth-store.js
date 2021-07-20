import axios from 'axios'
import {LocalStorage} from 'quasar'
import Vue from 'vue'
import set from './../utils/settings'
// import { Notify } from 'quasar'
// import {notify} from 'src/utils/dialogs'

const state={
  loggedIn:false,
  key:'',
  user:''
}
const mutations={
  setKey(state, payload){
  },
  setLoggedIn(state, loggedIn){
    console.log(loggedIn)
    // Vue.set(state.loggedIn,'loggedin', loggedIn.success)
    // Vue.set(state.key,'key', loggedIn.data)
    // Vue.set(state.user,'user', loggedIn.user)
    state.loggedIn=loggedIn.success
    state.key=loggedIn.data
    state.user=loggedIn.user
  },
  setLogout(state){
    state.key=''
    state.loggedIn=false
  },
  setUser(state, user){
    state.user=user
  }

}

const actions={

  register({commit},payload){
    var credentials={
      "email":payload.email,
      "phone":payload.phone,
      "password1":payload.password1,
      "password2":payload.password2,
    }


    let url ='http://localhost:8000/api/registration/' //url for restsamp registration

    axios.post(url,credentials)
    .then(res=>{
      console.log('New User Successfully registered ', res.data)


    })
    .catch(error=>{
      console.log('THERE IS AN ERROR:', error.message)

    })

  },

  login({commit, dispatch},payload){

   // retrieve login credential from payload
      var credentials={
        "email":payload.email,
        "password":payload.password1
      }

      let url='http://localhost:8000/rest-auth/login/' // for Estex login
      axios.post(url,credentials)
      .then(res=>{
        let token=res.data.key  // return token data
        localStorage.setItem('loggedIn',token)  //store token in localstorage

        dispatch('user_info',token)
        commit('setLoggedIn',{success:true, data:token})
        this.$router.replace('/')
        // this.$router.replace('/test/dashboard/')


      })
      .catch(error=>{
        console.log(error.message)
      })
  },

  user_info({commit},payload){

      let url='http://localhost:8000/rest-auth/user/' // Get the logged in User
      console.log('get User from : ', url)
      let config={
        headers:{
          'Authorization': `Token ${payload}`
        }
      }
      axios.get(url, config)
      .then(res=>{

        let user=res.data
        localStorage.setItem('user', JSON.stringify(user))
        commit('setUser', user)
        return user


      })
      .catch(error=>{
        console.log(error.message)
        return error.message
      })
  }

}

const getters={
    getKey(state){
      return state.key
    },
    getLoggedIn(state){
      return state.loggedIn
    },
    getUser(state){
      return state.user
    }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}
