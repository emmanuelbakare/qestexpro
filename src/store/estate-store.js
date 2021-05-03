import axios from 'axios'
const state={

}
const mutations={


}

const actions={
  register_estate({commit},payload){
      let key = localStorage.getItem('loggedIn')
      let current_user=JSON.parse(localStorage.getItem('user'))
      console.log('CURRENT USER : ',current_user)
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
        'admin':[ current_user.pk ]
      }

      let url ='http://localhost:8000/api/estate/' //url for estate registration
      console.log('URL : ', url,' DATA : ',data,'CONFIG : ',config)
      if(key){
        axios.post(url,data,config)
          .then(res=>{
            console.log('New Estate Successfully registered ', res.data)
          })
          .catch(error=>{
            console.log('THERE IS AN ERROR:', error.message)
          })
      } else {
        console.log('You are not logged in')
      }

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
