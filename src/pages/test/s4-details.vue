<template>

<div class="q-pa-md details">
  <h4> sample 4 details</h4>
  <q-btn color="primary" icon="" label="Change to : Andrew" @click="changeName2" />
  Username: {{ name }}
</div>
</template>
<script>

export  default{
  props:{
    name:String,
  },
  data(){
    return {

    }
  },
  methods:{
     changeName2(){
      this.$emit('resetName', "Andrew")
    }
  }
}

</script>
<style scoped>

.details{
  background-color:brown;
  color:white;
}
</style>
