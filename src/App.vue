<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  name: 'App',

  methods:{
      ...mapMutations('auth',['setLoggedIn'])
  },

  mounted(){
    let  key=''
    if(key=localStorage.getItem('loggedIn')){
      this.setLoggedIn({success:true, data:key})
    }else {
      this.setLoggedIn({success:false, data:''})
    }
  }
}
</script>
