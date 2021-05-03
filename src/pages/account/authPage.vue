<template>
  <q-page  padding class="row">

    <div class=" col-md-6 col-xs-8" style="margin:0 auto">
        <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="signin" icon="login" label="Sign In" />
      <q-tab name="signup" icon="people" label="Sign Up" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="signin">
       
        <loginRegister heading="Login" /> 
      </q-tab-panel>
      <q-tab-panel name="signup">
       
        <loginRegister heading="Register" /> 

      </q-tab-panel>

    </q-tab-panels>
    </div>  
  </q-page>
</template>
<script>

export default {
  components:{
    'loginRegister':require('components/loginRegister').default

  },
  data(){
    return{
      tab:'signin',
    }
  }
   
}
</script>

<style>
   
</style>