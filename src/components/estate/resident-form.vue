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
                  <q-input v-model="resident.firstname"     label="First Name" />
                  <q-input v-model="resident.lastname"    label="Last Name" />
                  <q-input v-model="resident.address"  autogrow   label="Address" hide-hint hint="Enter your address in the Estate" />
                  <q-input v-model="resident.comment"  autogrow  label="Comment"  hide-hint hint="Tell estate Admin more about yourself" />
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
import {mapGetters, mapMutations} from 'vuex'
export default {
  props:['estateid'],

  data(){
    return {
      showDialog:false,
      resident:{
        firstname:'',
        lastname:'',
        address:'',
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
    addResident(){
      // this.onReset()
      console.log('SELECTED ESTATE : ',this.getSelectedEstate())

    },
    getSelectedEstate(){
      let selectedEstate={}
      let estates=this.getEstates

      if(estates.length){
        // console.log('LENGHT ',estates.length );
        estates.find(estateObj=>{
          if(estateObj.id==this.estateid){
            console.log('FOUND IT ', estateObj);
            // selectedEstate=estateObj
              Object.assign(selectedEstate,estateObj)
              // return selectedEstate
            // console.log('SELECTED: ',selectedEstate)
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
