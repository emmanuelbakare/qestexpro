<template>
 <div  >

    <q-list separator
    v-for="link in links"
    :key="link.name"

    >
      <q-item clickable v-ripple  :to="link.url" >
        <q-item-section avatar>
          <q-icon color="primary" :name="link.icon" />
        </q-item-section>
        <q-item-section>{{link.name}}</q-item-section>
      </q-item>
    </q-list>
 </div>
</template>
<script>

export default {
  data(){
    return {
      links:  [
        {name:"Home", url:'/resident-home/', icon:'villa'},
        {name:"Onboarding", url:'/home-onboarding/', icon:'skateboarding'},
        {name:"Payments", url:'/home-payment/', icon:'money'},
        {name:"My Requests", url:'/home-request/', icon:'phone'},
        {name:"Mails", url:'/home-mail/', icon:'email'},
        {name:"Downloads", url:'/home-download/', icon:'download'},
      ]
    }
  }

}
</script>

<style scoped>

</style>
