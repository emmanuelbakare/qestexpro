<template>

<div class="q-pa-md edit">
  <h4> Edit sample 4</h4>
  <div> Name {{name}}</div>
  <q-btn color="primary"   label="Change to : Martins" @click="changeName" /> <br>
  <q-btn color="primary"   label="Change All Names" @click="$emit('rechangeName','All Name Change')" />
</div>
</template>
<script>
export default({
  props:{
    name:String,
  },
   methods:{
     changeName(){
       console.log('About to set name to Martins')
       this.$emit('resetName','Martins')
     }
   }
})
</script>
<style scoped>
.edit {
  background-color: blueviolet;
  color:white;

}

</style>
