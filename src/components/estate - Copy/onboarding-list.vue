<template>
  <div>

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

             <div>
                <q-btn color="orange" flat dense icon="edit" size="13px" @click.stop="editOB(result)" title="Edit" />
                <q-btn color="red" flat dense icon="delete_forever"  size="13px"  title="delete"  @click.stop="deleteOB(result)" />

               </div>
          </q-item-section>
        </q-item>
      </q-list>
  </div>
</template>


<script>

 import {mapGetters, mapActions, mapMutations} from 'vuex';
 import Notify from './../../utils/notify'
//  import Notify from './../../utils/tools'



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
     ...mapActions('estate_onboarding',['list_onboardings','delete_onboarding']),
     ...mapMutations('settings', ['setOnBoardFormDiag']),
     editOB(result){
         console.log('Edit this OB',result )

         this.$emit('fillInfo', result)
        this.setOnBoardFormDiag(true)
        //  Notify("Edit This "+result.title,"green",  "bottom")
     },
     deleteOB(result){
       this.delete_onboarding(result)
        //  Notify(result.title+"- Deleted","red",  "bottom")
     }
   },
   mounted(){
     this.list_onboardings()
   },







 };
</script>

<style>

</style>
