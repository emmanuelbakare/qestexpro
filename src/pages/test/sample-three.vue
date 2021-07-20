<template>
  <q-page padding>
       <h3> Sample 3</h3>

        <q-btn color="primary" icon="check" label="Add" @click="confirm=true" />
        <q-list bordered separator dense>
         <q-item clickable v-ripple
          v-for=" data  in getEstate"
          :key="data.id"
         >
         <q-item-section side>
           <q-badge color="green-7" text-color="white" :label="count" rounded />
            <q-separator  vertical />
         </q-item-section>
           <q-item-section>
              <q-item-label> {{ data.name}} </q-item-label>
              <q-item-label caption>{{ data.address}}</q-item-label>
             </q-item-section>
         </q-item>
       </q-list>

       <q-dialog v-model="confirm" persistent>
           <q-card class="my-card">

             <q-card-section class="q-gutter-md">
                <q-input v-model="info.name" type="text" label="Estate name" outlined />
                <q-input v-model="info.address" type="text" label="Estate address" outlined />
             </q-card-section>
             <q-card-section>
                <q-btn color="primary" icon="check" label="Submit" @click="addNew()"  />
             </q-card-section>

           </q-card>
       </q-dialog>
  </q-page>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import {uid} from 'quasar'

export default {
  data(){
    return {
      count:0,
      result:'something',
      confirm:false,
      info:{
        name:'',
        address:''
      }
    }
  },
  methods:{
    ...mapMutations('test_store',['addEstate']),
    addNew(){

      let payload={
        id:uid(),
        name:this.info.name,
        address:this.info.address
      }
      this.confirm=false;
      this.addEstate(payload)

    }
  },
  computed:{
    ...mapGetters('test_store',['getEstate'])
  },
  mounted(){
    // this.getEstate
  }

}
</script>

<style>

</style>
