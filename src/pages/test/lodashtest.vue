<template>
  <q-page padding>
    <q-input v-model="dbouncer"  outlined type="text" label="Type something" />
       <h3>Lodash test</h3>
       <h3>Array {{arr }}</h3>
       <h3>Sum : {{sum}} </h3>
       <h3>Test : {{dbouncer}} </h3>
  </q-page>
</template>
<script>

import _ from 'lodash'

export default {


data(){
  return {
    arr:[1,3,4,3,2],
    test:''


  }
},
computed:{
    dbouncer:{
      get(){
        return "something"
      },
      set(val){
          _.debounce(function(val){
            // this.putsomething(e.target.value)
            this.test=e.target.value
          }, 2000)
      }
    }
},
method:{
  debtest: _.debounce(function(e){
    // this.putsomething(e.target.value)
    this.test=e.target.value
  }, 2000),
  // debtest(){
  //     _.debounce(this.putsomething(), 2000)
  // },
  putsomething(val){
    this.test=val
  }

},
computed:{

  sum(){

      return  _.sum(this.arr)
      // return  lsum(this.arr)
      // return  lodash.chunk(this.arr,2)
      // return "Something there"
  },


},





}
</script>

<style>

</style>
