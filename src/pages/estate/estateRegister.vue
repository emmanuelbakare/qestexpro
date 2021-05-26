<template>
  <q-page  class="row q-mt-lg" padding>
       <q-card class="my-card offset-md-3 offset-sm-2 col-md-6 col-sm-8   ">
         <q-toolbar class="bg-secondary text-white">
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
              class="q-gutter-md q-pa-md"
            >
            <q-input v-model="estate.name" type="text" label="Estate Name"    />
            <q-select v-model="estate.type"
                  :options="getEstateType" option-value="id" option-label="name"
                   emit-value  map-options label="Type"    />
            <q-input v-model="estate.total_house" type="number" label="Total Number of Houses"    />
            <q-input v-model="estate.street1" type="text" label="Street"    />
            <q-input v-model="estate.city" type="text" label="City"    />
            <q-input v-model="estate.state_region" type="text" label="State or Region"    />
            <!-- <q-input v-model="estate.country" type="text" label="Country" outlined  /> -->
            <!-- <q-select v-model="estate.country"  label="Countries"
                  :options="countryList" option-value="name" option-label="name"
                  emit-value map-options
               /> -->
            <q-select v-model="estate.country"  label="Countries" :options="countryList"/>

            <q-input v-model="estate.comment" autogrow label="comment" dense      />
            <q-space/>
              <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </q-form>

         </q-card-section>

       </q-card>
       <estate-resident  :estateid="estateid" />
         <pre>
              <h5>Estate Types</h5>
              {{estate}}
            </pre>
  </q-page>
</template>
<script>
import { mapActions, mapGetters,mapMutations } from 'vuex';
import {countryTwo} from '../../store/db/countries'


export default {
  components:{
    'estate-resident':require('components/estate/resident-form').default

  },

  data(){

    return {
      countryList:countryTwo,
      estateType:[],
      estateid:'',
      estate:{
        name:'',
        total_house:'',
        street1:'',
        city:'',
        state_region:'',
        country:'',
        type:'',
        comment:'',
        // admins:JSON.parse(localStorage.getItem('user')).pk
      }
    }
  },
  methods:{
    ...mapActions('estate',['register_estate','estate_type']),
    ...mapMutations('settings',['setJoinFormDiag']),
    ...mapMutations('estate',['setEstates']),
    // ...mapActions('settings',['setJoinFormDiag']),
      onSubmit () {
          this.register_estate(this.estate)
            .then ((res)=>{
              // after registering completed the add user(admin) as first resident
              // after registration
              console.log('Registration Done', res.data)
              this.setEstates([res.data])
              this.estateid = res.data.id
              console.log('Estate ID', res.data.id);
              this.setJoinFormDiag(true)
            }).catch(error=>{
              console.log('ERROR: Registration not Completed')
            })

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
        type:'',
        comment:'',
        admin:''
      }
    }
  },
  computed:{
       ...mapGetters('estate',['getEstateType']),


  },
  mounted(){
    this.estate_type()
    // console.log('THE HOUSE TYPES',this.getEstateType )
    // this.estateType=this.getEstateType
  },


}
</script>

<style  >





</style>
