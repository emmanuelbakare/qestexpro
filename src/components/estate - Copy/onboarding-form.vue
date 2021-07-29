<template>
  <div padding>
    <q-btn color="primary" icon="check" label="Create Onboading" @click="obForm=true" />
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
            @submit.prevent="createOnBoarding"
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
                  <q-btn label="Create" type="submit" color="primary" />
                  <!-- <q-btn label="Create" type="submit" color="primary" v-if="create"  /> -->
                  <!-- <q-btn label="Update" type="submit" color="primary" v-if="!create"  @submit.prevent="editOnBoarding"/> -->
                  <q-btn label="Reset" type="reset" color="primary"  outline class="q-ml-sm" />
              </q-card-actions>
          </q-form>
          <pre>
            {{$data}}
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
  props:{
    'editdata':{
      type:Object,
      default:function(){
          return {
          title:'',
          message:'',
          attachment:''
         }
      }
    }
  },

  data(){
    return {
      // getOnBoardFormDiag:false,\
      create:true,
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
    obForm:{
      get(){
        return this.getOnBoardFormDiag
      }, set(val){
        this.setOnBoardFormDiag(val)
      }
    },
    infoData(){
      return this.confirmAction()

    }

  },
  methods:{
    ...mapActions('estate_onboarding',['post_onboardings']),
    ...mapMutations('settings', ['setOnBoardFormDiag']),

    confirmAction(){

         if(_.isEmpty(this.editdata)){ // if this.editdata is empty then it means we are Creating
          console.log('Create New Onboading')
          this.create=true
          this.onReset()
          return this.info
        } else { // if this.editdata is NOT empty then it means we are editing
          console.log('Edit New Onboading')
          this.create=false
          // this.info=_.cloneDeep(this.editdata)
          // this.info=deepClone(this.editdata)
          window.$data2=Object.assign({}, this.editdata)

          this.info=moveObj(this.editdata)
          window.$editdata=this.editdata
          window.$info=this.info
          console.log('new EDIT data', this.editdata)
          // return this.editdata
          // this.$emit('cleanData')
          return this.info
        }
    },
    createOnBoarding(){
      console.log('create Onboarding')

      // if(this.create){
      //   // this.post_onboardings({info:this.info, estate:this.estate})
      //   // this.onReset()
      //   // this.setOnBoardFormDiag(false)
      //   console.log('create data')
      // } else {
      //   console.log('edit data')
      // }

    },
    editOnBoarding(){
      console.log('edit Onboarding')
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
