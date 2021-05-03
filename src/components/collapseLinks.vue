<template>
      <q-list  >
        <q-expansion-item
          expand-separator
          :icon="data.icon"
          :label="data.name"
          :caption="data.caption"
          v-for="(data,key) in info"
          :key="key"
          group="test"

        >
         <component :is="data.component"  />
        </q-expansion-item>
      </q-list>
</template>
<script>
import Authlink from './links/authlink.vue'

export default {
  components:{
    'authlinks':require('./links/authlink').default,
    'residentlinks':require('./links/residentlinks').default,
    'servicelinks':require('./links/servicelinks').default

  },
  data(){
    return {
      expstate:false,
      num:5,
      info:{
        id1:{name:"Join Us",caption:"Sign up and Sign in App",component:"authlinks", icon:"people" },
        id2:{name:"My Estate",caption:"Estate Management",url:"/api/estate/", component:"residentlinks", icon:"apartment", },
        id3:{name:"Service",caption:"Request for service in your estate",url:"/service/", component:"servicelinks",icon:"construction" },
        // id4:{name:"TestSet",caption:"All the people to see",url:"/api/people/", icon:"perm_identity" },
        // id5:{name:"Service Booking",caption:"Pending service requests",url:"/api/pending-services/", icon:"event" },

      },
      links:  [
        {name:"Login", url:'/auth/', icon:'login'},
        {name:"Logout", url:'/auth/', icon:'logout'},
      ],
    }
  }

}
</script>

<style scoped>

</style>
