<template>
  <q-page padding>
       <q-btn color="primary" icon="check" label="Open" @click="showDialog=true" />

       <q-dialog v-model="showDialog" persistent>




         <q-card>
            <q-toolbar class="bg-green-3 text-white">

                <q-toolbar-title>
                 Toolbar
                </q-toolbar-title>
                <q-space />
                <q-btn dark flat icon="close"  v-close-popup />
             </q-toolbar>

           <q-card-section class="row items-center">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi provident magni aliquid. Similique reprehenderit iusto dolor rerum labore? Beatae quibusdam optio ut nobis perspiciatis dolores quidem accusantium dolore iure tempora?
           </q-card-section>
           <!-- <q-card-actions align="right">
             <q-btn flat label="Cancel" color="primary" v-close-popup />
             <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
           </q-card-actions> -->
         </q-card>
       </q-dialog>

  </q-page>
</template>
<script>

export default {
  data(){

    return {
      showDialog:false,

    }
  },




}
</script>

<style>

</style>
