<template>
  <div class="row">
       <q-card class="my-card offset-md-3 offset-sm-2 col-md-6 col-sm-8 ">
         <q-toolbar class="bg-purple text-white">
           <q-toolbar-title>
             Register A New Estate

           </q-toolbar-title>

         </q-toolbar>
         <q-banner class="bg-grey text-white q-ma-md ">
          Register a new estate to create it in our system. If you are looking to joining an already
          existing estate please use JOIN ESTATE

         </q-banner>
         <q-card-section>
            <q-form
              @submit.prevent="onSubmit"
              @reset="resetForm"
              class="q-gutter-md"
            >
            <q-input v-model="estate.name" type="text" label="Estate Name" outlined  />
            <q-input v-model="estate.total_house" type="number" label="Total Number of house" outlined  />
            <q-select v-model="estate.type" :options="options" label="Standard" filled />
            <q-input v-model="estate.street1" type="text" label="Street" outlined  />
            <q-input v-model="estate.city" type="text" label="City" outlined  />
            <q-input v-model="estate.state_region" type="text" label="State or Region" outlined  />
            <!-- <q-input v-model="estate.country" type="text" label="Country" outlined  /> -->
            <q-select v-model="estate.country" :options="countryTwo" label="Standard" filled />
            <q-input v-model="estate.comment" type="textarea" label="comment" dense outlined  multiline />
            <q-space/>
              <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </q-form>
            <pre>
              <h5>Estate Types</h5>
              {{ getEstateType}}
            </pre>
         </q-card-section>

       </q-card>

  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import {countryTwo } from '../../store/db/countries'


export default {

  data(){
    return {
      options:'',
      estate:{
        name:'',
        total_house:'',
        street1:'',
        city:'',
        state_region:'',
        country:'',
        comment:'',
        type:'',
        admin:'',
      }
    }
  },
  methods:{

    ...mapActions('estate',['register_estate','estate_type']),
    onSubmit() {
       this.register_estate(this.estate)
        this.resetForm
    },
    resetForm(){
      this.estate={
        name:'',
        total_house:'',
        street1:'',
        city:'',
        state_region:'',
        country:'',
        comment:'',
        type:'',
        admin:''
      }
    }
  },
  computed:{
    ...mapGetters('estate',['getEstateType'])

  },
  mount(){
    this.estate_type
  },

}
</script>

<style  >





</style>
