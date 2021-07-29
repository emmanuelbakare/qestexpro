import axios from 'axios'
// import { Notify } from 'quasar'
import Notifier from './../utils/notify'
import set from './../utils/settings'

const state={
  search:'',
  estates:{},
  estateType:[],
 

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

    // let url=`http://localhost:8000/api/estate/?status=1&search=${getters.getSearch}`
    set.url=`http://localhost:8000/api/estate/?status=1&search=${getters.getSearch}`
    // console.log('NEW SETTINGS', set)
    axios.get(set.url)
      .then(result=>{
        console.log('RESULT : ', result.data)
        commit('setEstates', result.data)
      })
      .catch(error=>{
        console.log('THERE IS AN : ', error.message)
      })

  },
estate_type({commit}){
  set.url="http://localhost:8000/api/estate/type/"

  axios.get(set.url)
    .then(result=>{
      commit('setEstateType', result.data)
    })
    .catch(error=>{
      console.log('THERE IS AN ERROR : ', error.message)
  })



},
  register_estate({commit},payload){

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

      set.url ='http://localhost:8000/api/estate/' //url for estate registration
      console.log('URL : ', set.url,' DATA : ',data,'CONFIG : ',config)
      if(key){
        return axios.post(set.url,data,set.config)
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
  register_estate_resident222({commit},payload){
   set.url ='http://localhost:8000/api/estate/resident/' //url for estate registration
    // let url ='http://localhost:8000/api/estate/' //url for estate registration
    // let url = `http://localhost:8000/api/estate/` //url for estate registration
    console.log('URL : ', set.url,' DATA : ',payload,'CONFIG : ',set.config)
    if(set.key){
      return axios.post(set.url,payload,set.config)
        .then(result=>{
            console.log('New Estate Successfully registered ', result.data)
            Notifier ('New Estate Successfully Registered','positive', 'bottom')
            return result

        })
        .catch(error=>{
          console.log('THERE IS AN ERROR:', error.message)

          Notifier('THERE IS AN ERROR: ', error.message)

        })
    } else {
      Notifier('You are not Logged in')
    }

 },

 register_estate_resident({commit},payload){
  set.url ='http://localhost:8000/api/estate/' //url for estate registration

  console.log('URL : ', set.url,' DATA : ',payload,'CONFIG : ',set.config)
  if(set.key){
    return axios.post(set.url,payload,set.config)
      .then(result=>{
          console.log('New Estate Successfully registered ', result.data)
          Notifier ('New Estate Successfully Registered','positive', 'bottom')
          return result

      })
      .catch(error=>{
        console.log('THERE IS AN ERROR:', error.response)

        Notifier('CANNOT CREATE RESIDENT : ', error.response)

      })
  } else {
    Notifier('You are not Logged in')
  }

},

 join_estate({commit},resident){
  //  let current_user=JSON.parse(localStorage.getItem('user'))
   set.url= `http://localhost:8000/api/estate/${estate.id}/resident/`
    console.log('URL : ',  set.url)
    let estate=resident.estate  //assign estate obj to estate
    delete resident.estate //remove estate obj from resident
   if( set.key){
        return axios.post( set.url,resident, set.config)
        .then(result=>{
            console.log('New Resident Added to Estate', result.data)
            Notifier ('You have been Added to the Estate as a Resident','positive', 'bottom')
            return result

        })
        .catch(error=>{
          console.log('ERROR DATA:', error.response.data, 'STATUS :', error.response.status)
          var errorMsg=''
          error.response.data["non_field_errors"].forEach(err=>{
            if (err.includes('unique')) {
                errorMsg+='You have already been registered in this estate \n'
            }else {
              errorMsg+='Some Error Occurred \n'
            }})
          window.$error=error.response
          Notifier(errorMsg,'deep-orange-14')

        })

   }

  // //  Resident(id, user, estate, house_address, status, created_date, comment)
  //  let data={
  //    'user':current_user,
  //    'estate':estate,




  //  }


 },
 join_estate_admin({commit}, payload){
  set.url="http://localhost:8000/api/estate/admin/"
  console.log('URL : ', set.url, 'payload ', payload, )
  let estate=payload.estate  //assign estate obj to estate
  let resident= payload.resident  // assign resident data to resident var
   if(set.key){
        return axios.post(set.url,payload,set.config)
        .then(result=>{
            console.log('Estate Joined To Resident in ESTATEADMIN Model', result.data)
            Notifier ('Resident Joined to Estate','positive', 'bottom')
            return result

        })
        .catch(error=>{
          console.log('THERE IS AN ERROR:', error.message)

          Notifier('THERE IS AN ERROR: ', error.message)

        })
    }


 },
 join_estate_as_admin_resident({commit},payload){
  //  let current_user=JSON.parse(localStorage.getItem('user'))
  let estate=payload.estate  //assign estate obj to estate
  let resident= payload.resident  // assign resident data to resident var

  set.url= `http://localhost:8000/api/estate/${estate.id}/resident/`
   console.log('URL : ', set.url, 'estate ', set.estate, 'RESIDENT ', set.resident)
   if(set.key){
        return axios.post(set.url,resident,set.config)
        .then(result=>{
            console.log('New Resident Added to Estate', result.data)
            Notifier ('You have been Added to the Estate as a Resident','positive', 'bottom')
            return result

        })
        .catch(error=>{
          console.log('THERE IS AN ERROR:', error.message)

          Notifier('THERE IS AN ERROR: ', error.message)

        })

   }

  // //  Resident(id, user, estate, house_address, status, created_date, comment)
  //  let data={
  //    'user':current_user,
  //    'estate':estate,




  //  }


 },
 update_first_last_name({commit}, payload){
  set.url= `http://localhost:8000/api/accounts/${payload.id}/`
   if(set.key){
        return axios.patch(set.url, {
          first_name:payload.first_name,
          last_name:payload.last_name,
        },set.config)
        .then(result=>{
            console.log('USER RECORD HAVE BEEN UPATED', result.data)
            Notifier ('User Firstname and Lastname is updated','positive', 'bottom')
            // let current_user=JSON.parse(localStorage.getItem('user'))
            // update the record in the localstorage
            console.log('CURRENT USER ', set.current_user)
            set.current_user.first_name=payload.first_name
            set.current_user.last_name=payload.last_name
            console.log('CURRENT USER AFTER NAME CHANGE', set.current_user)
            var updated_user=JSON.stringify(set.current_user)
            localStorage.setItem('user', updated_user)
            return result

        })
        .catch(error=>{
          console.log('THERE IS AN ERROR:', error.message)

          Notifier('THERE IS AN ERROR: ', error.message)

        })
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
  },


}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}
