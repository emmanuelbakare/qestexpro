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
        {name:"Dashboard", url:'/resident-home/', icon:'dashboard'},
        {name:"Make Requests", url:'/service-request/', icon:'engineering'},
        {name:"My Service Requests", url:'/service-myrequest/', icon:'perm_phone_msg'},
        {name:"Join a Service Provider", url:'/service-myrequest/', icon:'perm_phone_msg'},
      ]
    }
  }
   
}
</script>

<style scoped>
   
</style>