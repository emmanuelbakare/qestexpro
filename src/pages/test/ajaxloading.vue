<template>
  <q-page padding>
       <q-ajax-bar 
        position="bottom"
        size="16px"
        color="green"

       />

       <q-btn color="primary" icon="check" :loading="waiter" label="Get Posts" @click="fakeAjaxRequest" />
       <pre>
         {{result}}
       </pre>
  </q-page>
</template>
<script>
import axios from 'axios'
export default {

  data(){
    return{
      result:'',
      waiter:false
    }
  },
  methods:{
    fakeAjaxRequest(){
      this.waiter=true
      let url='https://jsonplaceholder.typicode.com/posts'
      axios.get(url)
      .then(response=>{
        this.waiter=false
        this.result=response.data
      })
    }
  }
   
}
</script>

<style>
   
</style>