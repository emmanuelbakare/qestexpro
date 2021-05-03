<template>
  <div class="row">
       <q-card class="my-card offset-md-3 col-md-6 col-sm-10 ">
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
            <q-input v-model="estate.name" type="text" label="Estate Name" outlined dense />
            <q-input v-model="estate.total_house" type="text" label="Total Number of house" outlined dense />
            <q-input v-model="estate.street1" type="text" label="Street" outlined dense />
            <q-input v-model="estate.city" type="text" label="City" outlined dense />
            <q-input v-model="estate.state_region" type="text" label="State or Region" outlined dense />
            <q-input v-model="estate.country" type="text" label="Country" outlined dense />
            <q-input v-model="estate.comment" type="text" label="comment" outlined dense />
              <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </q-form>
         </q-card-section>

       </q-card>

  </div>
</template>
<script>
import { mapActions } from 'vuex';


export default {

  data(){
    return {
      estate:{
        name:'',
        total_house:'',
        street1:'',
        city:'',
        state_region:'',
        country:'',
        comment:'',
        admin:[],
      }
    }
  },
  methods:{
    ...mapActions('estate',['register_estate']),
    onSubmit(){
      console.log('Submiting Form....')
      this.register_estate(this.estate)
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
        admin:[]
      }
    }
  }

}
</script>

<style>

</style>
