<template>
  <q-page class="bg-grey-3 ">
       <h3 >Random Sample 1</h3>
       <div class="row q-pa-lg   ">
         <q-list>
           <q-item>
             <q-item-section>
                   <q-card class="my-card">
                     <q-card-section>
                       <div class="text-h6">Our Changing Planet</div>
                       <div class="text-subtitle2">by John Doe</div>
                     </q-card-section>
                     <q-card-section>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit
                     </q-card-section>
                   </q-card>
             </q-item-section>
             <q-item-section>

                <q-card class="my-card">
                     <q-card-section>
                       <div class="text-h6">Our Changing Planet</div>
                       <div class="text-subtitle2">by John Doe</div>
                     </q-card-section>
                     <q-card-section>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit
                     </q-card-section>
                   </q-card>
             </q-item-section>
           </q-item>
         </q-list>

       </div>



       <q-footer reveal bordered>
       <q-tabs class="lt-md">
           <q-route-tab name="mails" icon="mail" label="Mails" to="/estate/join/"   />
           <q-route-tab name="alarms" icon="alarm" label="Alarms" to="/estate/join/" />
           <q-route-tab name="sample" icon="event" label="Join" to="/estate/join/" />
       </q-tabs>
       </q-footer>
  </q-page>
</template>
<script>

export default {

}
</script>

<style>

</style>
