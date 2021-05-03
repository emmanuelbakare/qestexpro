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
        {name:"Login", url:'/auth/', icon:'logout', description:"To become a resident or ask for service, you have to join us"},
        {name:"Register an Estate", url:'/auth/', icon:'login'},
        {name:"Join your Estate", url:'/auth/', icon:'door_back'},
        {name:"Be a Provider", url:'/auth/', icon:'room_preferences'},
      ]
    }
  }
   
}
</script>

<style scoped>
   
</style>