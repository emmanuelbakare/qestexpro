<template>
  <q-page padding>
       <h3>Floating Action</h3>
     <q-page-sticky position="bottom"
     :offset="fabPosition"
     expand>
            <q-bar dark
            class="bg-0 text-white"
               v-touch-pan.prevent.mouse="moveFab"

            >
                <q-fab color="primary" :icon="sidebar.icon" direction="up"
                class="q-pa-md"

                v-for="(sidebar,key) in sidebars"
                :key="key"
                :disable="draggingFab"



              >
                    <q-fab-action color="purple" 
                      :label="link.name"
                      :to="link.url"
                      external-label
                        label-class="text-grey-10 bg-white"
                      label-position="left"
                      :icon="link.icon"
                      v-for="(link,key) in sidebar.links"
                      :key="key"

                    />
              </q-fab>
            </q-bar>
     </q-page-sticky>
  <pre>
    {{links}}
  </pre>
  </q-page>
</template>
<script>
import sidebarLinks from '../../store/db/links'
export default {

  data(){
    return {
      sidebars:sidebarLinks,
      fabPosition:[18,18],
      draggingFab:false,

    }
  },
  methods:{
    moveFab(evt){
      console.log(evt)
      this.draggingFab= evt.isFirst !== true && evt.isFinal !==true
      this.fabPosition=[
        this.fabPosition[0] - evt.delta.x,
        this.fabPosition[1] - evt.delta.y
      ]
    }
  }


}
</script>

<style>

</style>
