<template>
  <div>
    <strong>Onboarding List</strong>

      <q-list bordered separator dense >
        <q-item clickable v-ripple
          v-for="(result,index) in getOnboardingList"
          :key="index"
        >
          <q-item-section avatar >
            <q-icon  name="chevron_right" />
          </q-item-section  >
          <q-item-section >{{result.title}}</q-item-section>
          <q-item-section>
            <!-- <editbar /> -->
             <div>
                <q-btn color="green" flat dense icon="draw"  @click="editOB(result)" />
                <q-btn color="red" flat dense icon="event"  @click="deleteOB(result)" />
               </div>
          </q-item-section>
        </q-item>
      </q-list>
  </div>
</template>


<script>

 import {mapGetters, mapActions} from 'vuex';
 import Notify from './../../utils/notify'


 export default {
   components:{
    //  'editbar':require('../editbar').default
   },
   data(){
    return {
       result:[],
    }
   },
   computed: {
     ...mapGetters('estate_onboarding',['getOnboardingList']),
   },
   methods:{
     ...mapActions('estate_onboarding',['list_onboardings']),
     editOB(result){
         console.log('Edit this OB', result)
         Notify("Edit This "+result.title,"green",  "bottom")
     },
     deleteOB(result){
       console.log('Delete this '+result, result)
         Notify(result.title+"- Deleted","red",  "bottom")
     }
   },
   mounted(){
     this.list_onboardings()
   },







 };
</script>

<style>

</style>
