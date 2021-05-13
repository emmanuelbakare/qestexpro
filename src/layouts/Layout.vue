<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Estex App
        </q-toolbar-title>
        <div class="text-grey-4" v-if="getLoggedIn">
            {{getEmail}}
          <q-btn class="text-orange-1" icon="logout"
          label="logout" no-caps unelevated @click="logout" />
        </div>
       <q-btn v-else  class="text-green-2" icon="login"
       label="login" no-caps unelevated @click="login" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
     <div elevated class="text-h5 q-pa-md text-white shadow-4 bg-blue-3">
       Estex Pro
     </div>
      <!-- DRAWER LIST HERE -->
      <sidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


import {mapMutations, mapGetters} from 'vuex'
export default {
  name: 'MainLayout',
  components:{
    // 'expander':require('components/collapseLinks').default
    'sidebar':require('components/sidebar').default
  },
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  methods:{
      ...mapMutations('auth',['setLogout']),
      logout(){
        this.setLogout()
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('user')
        this.$router.replace('/auth')

      },
      login(){
        this.$router.push('/auth')
      }
  },
  computed:{
    ...mapGetters('auth',['getKey','getLoggedIn', 'getUser']),
    getEmail(){
      let email=''
      let userInfo=localStorage.getItem('user')
      if(userInfo){
        let userObj=JSON.parse(userInfo)
        email= userObj.email
      }
      return email
    }
  }
}
</script>
