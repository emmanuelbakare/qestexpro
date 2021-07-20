<template>
  <nav>
     <q-toolbar class="bg-grey-2 text-white">
       <q-input v-model="text" label="Search shots..." borderless  class="q-ml-md" outlined dense>
         <template #prepend >
           <q-icon name='search' />
         </template>
       </q-input>
       <q-space />
       <q-separator vertical/>
          <q-btn  dense flat round icon="notifications" class="q-mx-lg" color="grey-7" >
              <q-badge color="green" floating transparent label="3" />
          </q-btn>
       <q-separator vertical/>
        <q-avatar class="q-ml-lg">
          <img src="https://cdn.quasar.dev/img/avatar.png" alt="">
        </q-avatar>
        <q-btn class="text-grey-7" no-caps flat icon-right="chevron-down" label="Emmanuel Bakare"  />
     </q-toolbar>




    <q-drawer v-model="rightdrawer"  side="right" show-if-above bordered >
      <div class="q-mt-md q-ml-md ">
        <q-btn icon="lens" color="red" flat dense round  />
        <q-btn icon="lens" color="yellow" flat dense round   />
        <q-btn icon="lens" color="green" flat dense round  />
      </div>
        <div class="text-center q-py-md  ">
          <q-btn class="q-px-lg "  icon="cloud_upload" color="light-blue-8" label="Upload"  />
        </div>

        <q-item clickable active-class="my-menu-link" v-ripple
              :active="link==='My Page'" @click="link='My Page'">

              <q-item-section avatar>
                  <q-icon name="book" />
              </q-item-section>
              <q-item-section>
                <q-item-label> My Page</q-item-label>
              </q-item-section>
        </q-item>

        <q-item clickable active-class="my-menu-link" v-ripple
              :active="link==='Dashboard'" @click="link='Dashboard'">

              <q-item-section avatar>
                  <q-icon name="dashboard" />
              </q-item-section>
              <q-item-section>
                <q-item-label> Dashboard</q-item-label>
              </q-item-section>
        </q-item>
        <q-item clickable active-class="my-menu-link" v-ripple
              :active="link==='Edit'" @click="link='Edit'">

              <q-item-section avatar>
                  <q-icon name="edit" />
              </q-item-section>
              <q-item-section>
                <q-item-label> Edit</q-item-label>
              </q-item-section>
        </q-item>
        <q-item clickable active-class="my-menu-link" v-ripple
              :active="link==='Chat'" @click="link='Chat'">

              <q-item-section avatar>
                  <q-icon name="chat" />
              </q-item-section>
              <q-item-section>
                <q-item-label> Chat</q-item-label>
              </q-item-section>
        </q-item>
        <q-item clickable active-class="my-menu-link" v-ripple
              :active="link==='Settings'" @click="link='Settings'">

              <q-item-section avatar>
                  <q-icon name="settings" />
              </q-item-section>
              <q-item-section>
                <q-item-label> Settings</q-item-label>
              </q-item-section>
        </q-item>
        <q-item clickable active-class="my-menu-link" v-ripple
              :active="link==='Community'" @click="link='Community'">

              <q-item-section avatar>
                  <q-icon name="groups" />
              </q-item-section>
              <q-item-section>
                <q-item-label> Community</q-item-label>
              </q-item-section>
        </q-item>
        <q-item clickable active-class="my-menu-link" v-ripple
              :active="link==='Creators'" @click="link='Creators'">

              <q-item-section avatar>
                  <q-icon name="person_add" />
              </q-item-section>
              <q-item-section>
                <q-item-label> Creators</q-item-label>
              </q-item-section>
        </q-item>
        <q-item clickable active-class="my-menu-link" v-ripple
              :active="link==='User'" @click="link='User'">

              <q-item-section avatar>
                  <q-icon name="groups" />
              </q-item-section>
              <q-item-section>
                <q-item-label> User</q-item-label>
              </q-item-section>
        </q-item>
      <q-list>

      </q-list>
    </q-drawer>
  </nav>
</template>
<script>

export default {
  data(){
    return {
      rightdrawer:false,
      link:'My Page',
      text:'',
    }
  }

}
</script>

<style scope  >
 .my-menu-link {
  border-left:4px solid  #2498D6;
}
</style>
