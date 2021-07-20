<template>
  <q-page padding>
       <h3>Random Sample 2</h3>
       <q-input v-model="url" type="text" label="Label" />
       <q-btn color="primary" icon="check" label="OK" @click="getUrl" />
       <pre> 
         {{ $data}}
         </pre>
  </q-page>
</template>
<script>
import set from '../../utils/settings'
export default {

  data(){
    return {
       set,
       url:''
       
  
    }
  }, 
  methods:{

    getUrl(){
      this.set.url=this.url
    }
    
  },
  computed:{

    

  }
  
   
}
</script>

<style>
   
</style>