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
         <!-- <component :is="data.component"  /> -->
         <sidebarlinks :links="data.links" />
        </q-expansion-item>
      </q-list>
</template>
<script>
import Authlink from './links/authlink.vue'
import sidebarData from './../store/db/links'
export default {
  components:{
    'sidebarlinks':require('./links/sidelinks').default,

  },
  data(){
    return {
      expstate:false,
      num:5,
      info:sidebarData
      // info:{
      //   id1:{name:"Join Us",caption:"Sign up and Sign in App",component:"authlinks", icon:"people" },
      //   id2:{name:"My Estate",caption:"Estate Management",url:"/api/estate/", component:"residentlinks", icon:"apartment", },
      //   id3:{name:"Service",caption:"Request for service in your estate",url:"/service/", component:"servicelinks",icon:"construction" },
      // },

    }
  }

}
</script>

<style scoped>

</style>
