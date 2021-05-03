<template>
 <div class="q-pa-md " >

      <q-form
        @submit.prevent="onSubmit"
        class="q-gutter-md"
      >
        
       <q-card>
         <q-card-section class="text-h4 text-blue-10"> {{heading }}</q-card-section>
         <q-card-section>
             <q-input v-model="form.email" type="email" label="Email"  />
             <q-input v-model="form.phone" type="text" label="phone" v-if="heading=='Register'"/>
             <q-input v-model="form.password1" type="password" label="Enter Password" />
             <q-input v-model="form.password2" type="password" label="Enter Same Password Again" v-if="heading=='Register'"  />
         </q-card-section>
         <q-card-actions class="q-pb-lg">
         <q-space />
            <q-btn type="submit" color="primary" icon="check" :label="heading"  />
         </q-card-actions>
       </q-card>
      </q-form>
 </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props:['heading'],
  data(){
    return {
      form:{
        email:'',
        phone:'',
        password1:'',
        password2:'',
      } 

    }
  },
  methods:{
    ...mapActions('auth', ['login', 'register']),
    onSubmit(){
     
      if(this.heading=="Login"){
          this.login(this.form)
          // console.log('ready to LOGIN inside loginRegister')
      }else if(this.heading=="Register"){
          // console.log('ready to REGISTER inside loginRegister')
          this.register(this.form)

      }
    }
  }
   
}
</script>

<style>
   
</style>