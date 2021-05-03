import axios from 'axios'
import {LocalStorage} from 'quasar'
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

    // console.log('FROM AUTH ACTION [LOGIN] ',payload )
      var credentials={
        "email":payload.email,
        "password":payload.password1
      }

      // let url='http://localhost:8000/api/rest-auth/login/' // for restsample login
      let url='http://localhost:8000/rest-auth/login/' // for Estex login
      axios.post(url,credentials)
      .then(res=>{
        let token=res.data.key
        localStorage.setItem('loggedIn',token)

        dispatch('user_info',token)
        commit('setLoggedIn',{success:true, data:token})
        this.$router.replace('/')


      })
      .catch(error=>{
        console.log(error.message)
      })
  },

  user_info({commit},payload){

      // let url='http://localhost:8000/api/rest-auth/login/' // for restsample login
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
