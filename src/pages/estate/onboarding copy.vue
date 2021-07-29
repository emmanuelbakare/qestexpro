<template>
  <q-page padding>
       <h3>Estate Onboarding</h3>
       <!-- if you are an admin then show the create onboarding message else just list all the onboarding messages titles -->
      <onboarding-form :editdata="infoData"  />
      <q-card>
       <list-onboarding @fillInfo="editForm"/>
      </q-card>




  </q-page>
</template>
<script>

export default {
  components:{
    'onboarding-form':require('components/estate/onboarding-form').default,
    'list-onboarding':require('components/estate/onboarding-list').default,
  },
  data(){
    return {
      infoData:{}
    }
  },
  methods:{
    editForm(event){
      this.infoData=event
    }
  }

}
</script>

<style>

</style>
