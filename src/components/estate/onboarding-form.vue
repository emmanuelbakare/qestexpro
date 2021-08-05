<template>
  <div padding>
    <q-btn color="primary" icon="check" label="Create Onboading" @click="createNewDialog()" />
       <q-dialog v-model="obForm"  >
        <q-card class="my-card" style="min-width:300px">
          <q-toolbar class="bg-secondary text-white">
            <q-toolbar-title>
             New OnBoading Message
            </q-toolbar-title>
              <q-space />
              <q-btn flat  fab-mini icon="close"  @click="obForm=false" />
          </q-toolbar>
          <q-form

            @reset="onReset" persistent class="q-gutter-md"
            @submit.prevent="getOBcreate? createOnboarding(): editOnboarding()"

            autofocus
             >

            <q-card-section  >
                  <q-input v-model="infoData.title"    label="Title" class="q-mb-md" />
                  <q-editor v-model="infoData.message" min-height="5rem"  class="q-mb-md"/>
                  <q-file  v-model="infoData.attachment"  use-chips outlined label="attach a file"  >
                      <template #prepend >
                         <q-icon name="attach_file" />
                      </template>
                  </q-file>

            </q-card-section>
            <q-card-actions>
              <q-space/>
                  <!-- <q-btn label="Create" type="submit" color="primary" /> -->
                  <q-btn label="Create" type="submit" color="primary" v-if="getOBcreate"  />
                  <q-btn label="Update" type="submit" color="primary" v-if="!getOBcreate"   />
                  <q-btn label="Reset" type="reset" color="primary"  outline class="q-ml-sm" />
              </q-card-actions>
          </q-form>
          <pre>
           <div>Edit OB : {{getEditOB}}</div>
           <div>Create: {{getOBcreate}} </div>
          </pre>
        </q-card>
    </q-dialog>
  </div>
</template>
<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'
import _ from 'lodash'
import {moveObj, deepClone} from './../../utils/tools'
export default {

  data(){
    return {
      // getOnBoardFormDiag:false,\
      info:{
        title:'',
        message:'',
        attachment:[],
      },

      estate:{
        id:67
      }
    }
  },
   computed:{
    ...mapGetters('settings', ['getOnBoardFormDiag']),
    ...mapGetters('estate_onboarding', ['getEditOB','getOBcreate']),
    obForm:{
      get(){
        return this.getOnBoardFormDiag
      }, set(val){
        this.setOnBoardFormDiag(val)
      }
    },

    infoData(){
      return this.confirmAction()

    },
    resetOB(){
      return {
            id:'',
           title:'',
            message:'',
            attachment:''
         }
    }

  },
  methods:{
    ...mapActions('estate_onboarding',['post_onboardings','edit_onboarding']),
    ...mapMutations('settings', ['setOnBoardFormDiag']),
    ...mapMutations('estate_onboarding', ['setEditOB','setOBcreate']),

    createNewDialog(){
      // onclicking  'create onboarding'
      this.onReset()
      this.setOBcreate(true)  //setOBcreate to true to signify that you are doing create and not edit
      this.obForm=true  // open the dialog
      this.info=this.resetOB
      this.setEditOB(this.info) //initialize the data in
    },
    confirmAction(){

        if(this.getOBcreate){
          console.log('Create New ', this.info)
          return this.info

        } else {
          console.log('Edit a new one')
          this.info=this.getEditOB
          // this.setOBcreate(true)  // after
          return this.info
        }
    },

    createOnboarding(){
        console.log('Create NEW OB FORM')
        this.post_onboardings({info:this.info, estate:this.estate})
        this.onReset()
         this.setOnBoardFormDiag(false)
    },
    editOnboarding(){
      console.log('Edit OB FORM')
      this.edit_onboarding(this.info)
      this.onReset()
      this.setOnBoardFormDiag(false)

    },



    onReset(){
      this.info={
        title:'',
        message:'',
        attachment:''
      }
    }
  },



}
</script>

<style>

</style>
