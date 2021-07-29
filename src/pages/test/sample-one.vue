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
         <h3>working with array</h3>

         <q-separator spaced/>
         <pre>
            {{ delObj()}}
         </pre>


  </q-page>
</template>
<script>
import estates from './../../store/db/estateList'
import {objDelete,searchObj,searchObjIndex}  from './../../utils/tools'
export default {


  data(){
    return{
      estates,
      estate:{
              id:8,
              "name": "Philkruz Estate",
              "address": "Opposite Apostolic Church, by Christ Embassy, Dakibiyu, Jabi FCT. Abuja, Nigeria",
          },



    }
  },
  methods:{
    delObj(){
      // let result= tools.objDelete(this.estate, estates)
      // return result
      return   objDelete(this.estate, this.estates)
    }
  }

}
</script>

<style>

</style>
