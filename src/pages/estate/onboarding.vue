<template>
  <q-page padding>
       <h3>Estate Onboarding</h3>
       <!-- if you are an admin then show the create onboarding message else just list all the onboarding messages titles -->

       <create-onboarding

       />


  </q-page>
</template>
<script>

export default {
  components:{
    'create-onboarding':require('components/estate/onboarding-form').default,
  }

}
</script>

<style>

</style>
