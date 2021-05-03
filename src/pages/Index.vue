<template>
  <q-page class="flex flex-center">
    <getPerson></getPerson>
    WELCOME TO ESTEX STATE MANAGEMENT

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components:{
    'getPerson':require('./account/getAxiosUser').default
  },

}
</script>
