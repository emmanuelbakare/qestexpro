<template>
  <q-page padding>

    <q-dialog v-model="getJoinFormDiag"  ref="residentDiag" >
        <q-card class="my-card" style="min-width:300px">
          <q-toolbar class="bg-secondary text-white">
            <q-toolbar-title>
              Join Estate
            </q-toolbar-title>
              <q-space />
              <q-btn flat  fab-mini icon="close"  @click="closeDiag" />
          </q-toolbar>
          <q-form @submit.prevent="addResident"   @reset="onReset" persistent class="q-gutter-md" >

            <q-card-section>
                  <!-- insert all form elements -->
                  <!-- <q-input v-model="resident.userinfo.firstname"     label="First Name" />
                  <q-input v-model="resident.userinfo.lastname"    label="Last Name" /> -->
                  <q-input v-model="resident.house_address"  autogrow   label="Address"  hint="Enter your address in the Estate" />
                  <q-input v-model="resident.comment"  autogrow  label="Comment"   hint="Tell estate Admin more about yourself" />
            </q-card-section>
            <q-card-actions>
              <q-space/>
                  <q-btn label="Join" type="submit" color="primary"/>
                  <q-btn label="Reset" type="reset" color="primary"  outline class="q-ml-sm" />
              </q-card-actions>
          </q-form>
        </q-card>
    </q-dialog>
  </q-page>

</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  props:['estateid'],

  data(){
    return {
      showDialog:false,
      resident:{
        house_address:'',
        comment:'',
      }

    }
  },
  computed:{
    ...mapGetters('settings', ['getJoinFormDiag']),
    ...mapGetters('estate',['getEstates']),

  },
  methods:{
    ...mapMutations('settings', ['setJoinFormDiag']),
    ...mapActions('estate',['join_estate']),

    async addResident(){
      let  estate=this.getSelectedEstate()
      // this.resident.estate_id=estate.id  //add the selected estate id to the resident info
      let user=JSON.parse(localStorage.getItem('user'))
      // this.resident.user_id=current_user.pk
      this.resident.estate=estate
      // this.resident.user=user

      let joinedEstate=await this.join_estate(this.resident)
      // reset the form and deactivate it
    },
    getSelectedEstate(){
      //from the lists gotten in the result of search, pick the estate that was selected for used
      // need to work on this so that there wont be loop through all search result
      // instead when the button is clicked put the id in the button and pass it.
      let selectedEstate={}
      let estates=this.getEstates
      if(estates.length){ // check if there are results in the search else return {} -nothing
        estates.find(estateObj=>{
          if(estateObj.id==this.estateid){
              Object.assign(selectedEstate,estateObj)
            }
        })
      }
        return selectedEstate

    },


    closeDiag(){
        // console.log('close the dialog now')
        this.setJoinFormDiag(false)
    },
    onReset(){
      this.resident={
        firsname:'',
        lastname:'',
        address:'',
        comment:'',
      }
    }
  }

}
</script>

<style>

</style>
