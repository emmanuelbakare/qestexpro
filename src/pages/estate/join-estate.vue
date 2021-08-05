<template>
  <div class="q-pa-md row" >
    <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-sx-12" >

          <!-- <q-select v-model="search" :options="options" label="Search" rounded outlined /> -->
          <!-- <q-banner class="bg-grey-3 q-mb-lg " rounded >
          <p>Type the name of your estate in the search bar to see our list of registered estates. Click the estate you want to join and confirm its your estate before joining.</p>
            <p>After Clicking join. The Estate admin will have to certify you as a member of the estate before you are allowed to join</p>
          </q-banner> -->
          <q-input v-model="searchText" type="text" label="Search for an estate"
            hint="Type the name of the estate you want to join. Select the estate you want to join from the displayed result"
            round outlined clearable
            :loading="loading"
             @input="searchDBTwo"
            @clear="clearSearch"
             >



          </q-input>
          <estate-list :estates="searchedEstates"  @estateJoiner="joinEstate" />
          <!-- <q-dialog v-model="showEstateForm" > -->
              <estate-resident :estateid="estateid"  />
          <!-- </q-dialog> -->
    </div>
  </div>

</template>
<script>
import debounce from 'lodash/debounce'
import {mapState, mapGetters,mapMutations, mapActions} from 'vuex'
import estateSamp from './../../store/db/estateList'

export default {
  components:{
    'estate-list':require('components/estate/estateList').default,
    'estate-resident':require('components/estate/resident-form').default,
  },
  data(){
    return{
    // showEstateForm:false,
      estateid:null,
      estates:[],
      loading:false,
      isSearching:false
    }
  },

  methods:{
    ...mapActions('estate',['setSearch','search_estate']),
    ...mapMutations('estate',['setEstates']),
    ...mapMutations('settings',['setJoinFormDiag']),
     searchDBTwo: debounce( function(e){
                            console.log('search for text now')
                             this.searchDB()
                        }
                          , 700),

    searchDB(){
      if(this.search){
        this.search_estate(this.searchText)
          .then(res=>{
            this.isSearching =true
          })



      } else {
        console.log('enter a search text')
        this.setEstates({})
      }
    },
    // populateEstates(){
    //    this.estates=estateSamp
    // },
    clearSearch(){
      this.searchText==''
      this.setEstates({})
      // this.populateEstates()
    },
    joinEstate(id){
      // This code is executed when you clicked Join in the search result (in page 'Join an Estate')
      this.estateid=id
      this.setJoinFormDiag(true)

      // window.$log=id
      // $emit('dialoger',true)
      // this.showEstateForm=true
      // bring out a dialog box resident form.
      // 1. Fill in name of Resident (firstname, lastname, phone - user model), address, active=0, is_admin=0
      // 2.

    },

  },
  computed:{
    ...mapState('estate', ['search']),
    ...mapGetters('estate', ['getEstates',]),


    searchText:{
      get(){
        return this.search
      },
      set(value){
         this.setSearch(value)
         this.setEstates({})
         this.isSearching=false
        //  setTimeout(this.runThis(value),2000)

      }
    },
    searchedEstates(){
      if(this.search){
        // this.isSearching=false
        return this.getEstates
      }else {
        return {}
      }
    },

    //

    loadingStatus(){
      if(this.searchText) {
        return true
      } else {
             return false
      }
    }
  },
   mounted(){
    // this.populateEstates()
  },

}

</script>

<style>

</style>
