<template>
  <div class="q-pa-md row" >
    <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3" >

          <!-- <q-select v-model="search" :options="options" label="Search" rounded outlined /> -->
          <!-- <q-banner class="bg-grey-3 q-mb-lg " rounded >
          <p>Type the name of your estate in the search bar to see our list of registered estates. Click the estate you want to join and confirm its your estate before joining.</p>
            <p>After Clicking join. The Estate admin will have to certify you as a member of the estate before you are allowed to join</p>
          </q-banner> -->
          <q-input v-model="searchText" type="text" label="Search for an estate"
          hint="Type the name of the estate you want to join. Select the estate you want to join from the displayed result"
          round outlined clearable :loading="loading"
          @clear="clearSearch">

                <template #append>
                   <q-icon name="search" class="text-blue"/>
                </template>



          </q-input>

             <pre>
          {{ searchText }}
          <!-- {{getEntry}} -->
        </pre>


          <q-list bordered separator class="q-mt-lg ">
            <q-item  v-for="estate in getEntry" :key="estate.id">

            <q-item-section  >
              <q-item-label class="text-h6 text-grey-8">{{estate.name}}</q-item-label>
              <q-item-label caption lines="2">{{estate.address}}</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-btn color="secondary"   label="Join" @click="joinEstate" />
            </q-item-section>
          </q-item>
          </q-list>
          <!-- <q-select v-model="searchText" :options="result" label="Search"
          outlined rounded clearable
          hint="Type the estate you want to search"
          use-input fill-input
            >

              <template #before>
                <q-icon name="search" />
              </template>

          </q-select> -->

    </div>
  </div>

</template>
<script>
import {mapState, mapActions} from 'vuex'
import estateSamp from './../../store/db/estateList'
export default {
  data(){

    return{
      result:['one','two','three'],
      estates:[],
      loading:false
    }
  },

  methods:{
    ...mapActions('estate',['setSearch','search_estate']),

    populateEstates(){
       
       this.estates=estateSamp
    },
    clearSearch(){
      this.searchText=='',
      this.populateEstates()
    },
    joinEstate(){
      console.log('Join this Estate')
    },

  },
  computed:{
    ...mapState('estate', ['search']),

    searchText:{
      get(){
        return this.search
      },
      set(value){
         this.setSearch(value)
      }
    },
     getEntry: {

       get(){
       let result=[]
          console.log(this.searchText)
        if(this.searchText){
          // this.loading=true
          this.estates.forEach(estate=>{

            if(estate.name.toLowerCase().includes(this.searchText.toLowerCase())){
              result.push(estate)
            }
          })
        } else {
          result=estateSamp
        }
          // this.loading=false
          return result
       },
       set(value){

       }
     },
    loadingStatus(){
      if(this.searchText) {
        return true
      } else {
        return false
      }
    }
  },
   mounted(){
   //this.populateEstates()
  },

}

</script>

<style>

</style>
