<template>
  <q-page padding>
    <pre>{{ getOnBoardFormDiag}}</pre>
    <pre>{{ info}}</pre>
    <q-btn color="primary" icon="check" label="Create Onboading" @click="getOnBoardFormDiag=true" />
       <q-dialog v-model="getOnBoardFormDiag"  >
        <q-card class="my-card" style="min-width:300px">
          <q-toolbar class="bg-secondary text-white">
            <q-toolbar-title>
             New OnBoading Message
            </q-toolbar-title>
              <q-space />
              <q-btn flat  fab-mini icon="close"  @click="getOnBoardFormDiag=false" />
          </q-toolbar>
          <q-form
            @submit.prevent="createOnBoarding"
            @reset="onReset" persistent class="q-gutter-md"

            autofocus
             >

            <q-card-section  >
                  <q-input v-model="info.title"    label="Title" class="q-mb-md" />
                  <q-editor v-model="info.message" min-height="5rem"  class="q-mb-md"/>
                  <q-file  v-model="info.attachment"  use-chips outlined label="attach a file"  >
                      <template #prepend >
                         <q-icon name="attach_file" />
                      </template>
                  </q-file>

            </q-card-section>
            <q-card-actions>
              <q-space/>
                  <q-btn label="Create" type="submit" color="primary"/>
                  <q-btn label="Reset" type="reset" color="primary"  outline class="q-ml-sm" />
              </q-card-actions>
          </q-form>
        </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import {mapActions} from 'vuex'
export default {

  data(){
    return {
      getOnBoardFormDiag:false,
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
    // ...mapGetters('settings', ['getOnBoardFormDiag']),

  },
  methods:{
    ...mapActions('estate_onboarding',['post_onboardings']),

    createOnBoarding(){
      console.log('create a new onboarding')
      this.post_onboardings({info:this.info, estate:this.estate})
      window.$board=this.info
      console.log(this.info)
      this.onReset()
      this.getOnBoardFormDiag=false
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
