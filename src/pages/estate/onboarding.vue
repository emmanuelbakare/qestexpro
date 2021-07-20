<template>
  <q-page padding>
       <h3>Estate Onboarding</h3>
       <!-- if you are an admin then show the create onboarding message else just list all the onboarding messages titles -->

       <list-onboarding/>

       <create-onboarding/>


  </q-page>
</template>
<script>

export default {
  components:{
    'create-onboarding':require('components/estate/onboarding-form').default,
    'list-onboarding':require('components/estate/onboarding-list').default,
  }

}
</script>

<style>

</style>
