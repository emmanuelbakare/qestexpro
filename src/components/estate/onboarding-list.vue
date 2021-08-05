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



 export default {

   data(){
    return {
       result:[],
    }
   },
   computed: {
     ...mapGetters('estate_onboarding',['getOnboardingList']),
    //  ...mapGetters('estate',['getEditInfo']),
   },
   methods:{
     ...mapActions('estate_onboarding',['list_onboardings','delete_onboarding']),
     ...mapMutations('settings', ['setOnBoardFormDiag']),
     ...mapMutations('estate_onboarding', ['setEditOB','setOBcreate']),

     editOB(result){
        console.log('(editOB func in onboarding-list ', result)
        // this.$emit('fillInfo', result)
        this.setOBcreate(false)  ///state that you dont want to create. which means you want to edit
        console.log('FORM RESULT ',result )
        this.setEditOB(result)   // send what to edit to editOB in vuex state
        this.setOnBoardFormDiag(true) // open the Onboarding form dialog
     },
     deleteOB(result){
       this.delete_onboarding(result)
     }
   },
   mounted(){
     this.list_onboardings()
   },







 };
</script>

<style>

</style>
