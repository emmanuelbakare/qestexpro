<template>

<q-page  padding color="cyan">
  <h4>  Sample 4</h4>
  <q-btn color="primary"   label="Change Name: Sola" @click="changeName" />
  <div>  name: {{ name}}</div>
  <div class="row">
    <div class="col-6"> <Sedit   :name="name" @resetName="nameReset" /></div>
    <div class="col-6"><Sdetails :name="name"  @resetName="nameReset"/></div>
  </div>


</q-page>
</template>
<script>
export default{
    components:{
      'Sdetails':require('./s4-details.vue').default,
      'Sedit':require('./s4-edit.vue').default,
    },
    data(){
      return {
        name:'Segun'
      }
    },
    methods:{
      changeName(){
        this.name='Sola'
      },
      nameReset(event){
        this.name=event
        console.log('name reset emitted' ,event)
      }
    }
}

</script>
<style scoped>
.s4{
  background-color: aqua;
}

</style>
