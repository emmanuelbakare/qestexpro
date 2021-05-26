<template>
  <q-page padding class="row">
    <q-form  @submit.prevent="onSubmit"
              @reset="resetForm"  >
         <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
      class="  fixed-center"

    >
      <q-step
        :name="1"
        title="Estate Info"
        icon="house"
        :done="step > 1"

      >
        <div class="text-h5 q-pb-lg text-green-10   ">Estate Details</div>
         <q-input v-model="estate.name" type="text" label="Estate Name"  class="q-pb-md" outlined  />
            <q-select v-model="estate.estate_type_id"
                  :options="getEstateType" option-value="id" option-label="name" class="q-pb-md"
                   emit-value  map-options label="Type"   outlined />
          <q-input v-model="estate.total_house" type="number" label="Total Number of Houses" outlined   />
      </q-step>

      <q-step
        :name="2"
        title="Address"
        icon="place"
        :done="step > 2"

      >
       <div class="q-gutter-md  ">
         <div class="text-h5  items-center text-green-10">Estate Address</div>

              <q-input v-model="estate.street1" type="text" label="Street"  outlined />
            <q-input v-model="estate.city" type="text" label="City" outlined />
            <q-input v-model="estate.state_region" type="text" label="State or Region"  outlined  />
            <!-- <q-input v-model="estate.country" type="text" label="Country" outlined  /> -->
            <q-select v-model="estate.country"  label="Countries"
                  :options="countryList" option-value="name" option-label="name"
                  emit-value map-options outlined
               />
            </div>
      </q-step>

       <q-step
        :name="3"
        title="User Info"
        icon="place"
        :done="step > 3"
        :disable="namesEmpty"
      >
       <div class="q-gutter-md">
          <div class="text-h5  items-center text-green-10">Your Personal Info</div>
              <q-input v-model="estate.account.first_name"     label="First Name"  outlined  />
              <q-input v-model="estate.account.last_name"    label="Last Name" outlined  />
              <q-input v-model="estate.account.phone"    label="Phone Number"  outlined />
              <!-- <q-input v-model="resident.comment"    label="Comment" type="textarea"
              hint="To help estate admin quickly approve your request to join this estate, kindly give more detail about yourself" outlined  /> -->
        </div>
      </q-step>

      <q-step
        :name="4"
        title="comment"
        icon="assignment"
      >
      <div class="q-gutter-md">
        <q-input v-model="estate.resident.house_address"    label="Your address in the estate eg. block 1 house 2"  outlined />
        <q-input v-model="estate.comment" type="textarea" label="what would you like to say to new residents joining in" dense   outlined   />
      </div>
      </q-step>



      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()"  v-if="step < 4" color="primary" label="Next >>" />
          <q-btn type="submit" v-if="step > 3" color="primary" label="Submit" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label=" << Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>


    </q-form>
    <!-- <q-page-sticky position="top-right" :offset="[8,8]" expand>
        <q-card class="my-card">
          <q-card-section>
            <pre>
              Estate
              -------
              {{estate}}
              Resident
              --------
              {{estate.resident}}
              account
              -------
              {{estate.account}}

            </pre>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
        </q-card>
    </q-page-sticky> -->
  </q-page>
</template>
<script>
import { mapActions, mapGetters,mapMutations } from 'vuex';
import {countryOne} from '../../store/db/countries'
export default {
  data(){
    return {
      step:1,
      storedUser:'',
      allObjs:[],
      namesEmpty:false,
      countryList:countryOne,
      estateType:[],
      estateid:'',
      estate:{
        name:'',
            total_house:'',
            street1:'',
            city:'',
            state_region:'',
            country:'',
            estate_type_id:'',
            comment:'',
            resident:{
              house_address:'',
              comment:'',
            },
            account:{
              last_name:'',
              first_name:'',
              phone:''
            },

      }

    }
  },
  methods:{
    ...mapActions('estate',['register_estate','register_estate_resident','estate_type']),
    onSubmit(){

      let newestate=this.register_estate_resident(this.estate)
      console.log('REGISTERED ESTATE AND ADMIN ', newestate)

    },
    resetForm(){
          estate={
            resident:{
            house_address:'',
            comment:'',

          },
          account:{
            last_name:'',
            first_name:'',
            phone:''
          },
            name:'',
            total_house:'',
            street1:'',
            city:'',
            state_region:'',
            country:'',
            estate_type_id:'',
            comment:'',
      }


    },
    isEmpty(val){
      return (val === undefined || val == null || val.length <= 0) ? true : false;
    }
  },
   computed:{
       ...mapGetters('estate',['getEstateType']),

  },
   mounted(){
    this.estate_type()
    this.storedUser=JSON.parse(localStorage.getItem('user'))
    console.log('STORE USER', this.storedUser);
    if(this.storedUser.first_name.length!=0){
      this.namesEmpty=true
    }

  },
}
</script>

<style>
.my-card {
  margin:0 auto
}

</style>
