<template>
  <div>
    <tophead />
    <div class="q-pa-lg">

        <div class="row q-col-gutter-md">
            <div class="col-md-4 col-12">
                <q-card class="q-py-sm my-card">
                    <q-item>
                        <q-item-section avatar>
                          <avatar square size="14px">
                            <img src="https://cdn.quasar.dev/img/avatar.png" />
                          </avatar>

                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Emmanuel Bakare</q-item-label>
                          <q-item-label caption> Admin</q-item-label>
                        </q-item-section>
                        <q-item-section>
                          <q-btn icon="edit"  flat dense  class="" />
                        </q-item-section>
                    </q-item>
                    <q-separator />

                    <q-item>
                      <q-item-section>
                        <q-item-label class="text-center text-weight-bold">60</q-item-label>
                        <q-item-label>Shots</q-item-label>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label class="text-center text-weight-bold">2749</q-item-label>
                        <q-item-label>Followers</q-item-label>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label class="text-center text-weight-bold">678</q-item-label>
                        <q-item-label>Following</q-item-label>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label class="text-center text-weight-bold">79</q-item-label>
                        <q-item-label>Lithning</q-item-label>
                      </q-item-section>
                      
                    </q-item>

                    <q-separator />
                    <q-item>
                      <q-item-section>
                        <q-btn  unelevated color="green-7" label="message" icon="mail" />
                      </q-item-section>
                      <q-item-section>
                        <q-btn  unelevated color="grey" label="follow" icon="group"/>
                      </q-item-section>
                    </q-item>

                    



                </q-card>
            </div> <!-- col-md-4 col-12 end -->
            <div class="col-md-4 col-12">
              <q-card class="my-card">
                  <q-item>
                  <q-item-section>
                    <q-item-label class="text-weight-bold"> Give your support</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item>
                  <q-item-section avatar>
                    <q-btn round class="bg-blue-2 text-blue-8"  icon="bolt"/>
                  </q-item-section>
                  <q-item-section>
                    <q-badge color="white text-black">Quantity</q-badge>
                    <q-slider 
                      v-model="value" 
                      :min="-20" 
                      :max="40" 
                      :step="4" 
                      label 
                      color="light-green" />
                  </q-item-section>
                </q-item>
                <q-separator/>
                <q-item>
                  <q-item-section>
                    <q-btn label="Support" icon="chevron_right" outline color="blue-5"/>
                  </q-item-section>
                </q-item>
              </q-card>
            </div><!-- col-md-4 col-12 end -->
            <div class="col-md-4 col-12">
              <q-card class="my-card">
                  <q-item>
                    <q-item-section>
                      <q-btn icon="facebook" label="Follow on Facebook" color="blue-7" dense />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-btn icon="fab fa-twitter" label="Tweet on Twitter" outline dense />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    
                    <q-item-section>
                      <q-btn icon="fa fa-pinterest-p " label="Save with Pinterest" outline dense />
                    </q-item-section>
                  </q-item>
              </q-card>
            </div>
            
            
        </div> <!-- row end -->
        <q-separator spaced class="q-gutter-none" />
        <div class="row q-col-gutter-md">
              <div class="col-8">
                <q-toolbar>
                  <q-toolbar-title class="text-overline">ACTIVE PROJECTS</q-toolbar-title>
                <q-btn color="light-blue-8" flat icon="arrow_forward_ios" label="Show All" />
                </q-toolbar>
                
                <q-card class="my-card">
                  <q-item>
                      <q-item-section avatar>
                        <q-btn class="bg-blue-2 text-blue-8" icon="bolt" round />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label><strong>Solar Management Dashboard</strong></q-item-label>
                        <q-item-label caption>UX/UI Designer</q-item-label>
                        <q-item-label><strong>4 Weeks</strong></q-item-label>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label class="text-green "> <strong> Budget $24</strong></q-item-label>
                      </q-item-section>
                      <q-item-section>
                        <q-btn class="bg-light-blue-8 text-white  q-mb-md"   label="Deliver"  />
                        <q-btn class="black"    label="Cancel" outline />
                      </q-item-section>
                  </q-item>
                </q-card>
              </div> <!-- col-8 end -->
              <div class="col-md-4 col-12">
                <q-toolbar>
                  <q-toolbar-title class="text-overline">AVAILABLE WORK</q-toolbar-title>
                  <q-btn flat icon-right="arrow_forward_ios" label="Show" color="blue-8"  />
                </q-toolbar>
                <q-card class="q-mb-md my-card-half">
                   <q-item>
                     <q-item-section avatar>
                        <q-btn  icon="grass" class="bg-green-3 text-green-10" round flat />
                     </q-item-section>
                     <q-item-section >
                       <q-item-label ><strong>Starbuks </strong></q-item-label>
                       <q-item-label caption>Website UI Redesign</q-item-label>
                     </q-item-section>
                     <q-item-section avatar>
                        <q-btn label="Quote" outline />
                     </q-item-section>
                     
                   </q-item>
                </q-card>
                <q-card class="my-card-half">
                   <q-item>
                     <q-item-section avatar>
                        <q-btn  icon="restaurant" class="bg-yellow-2 text-yellow-10" round flat />
                     </q-item-section>
                     <q-item-section >
                       <q-item-label class="font-weight-bolder"><strong>Untapped</strong></q-item-label>
                       <q-item-label caption>Website Design</q-item-label>
                     </q-item-section>
                     <q-item-section avatar>
                        <q-btn label="Quote" outline />
                     </q-item-section>
                     
                   </q-item>
                </q-card>
              </div>
        </div><!-- row end -->
    </div>
  </div>
</template>
<script>

export default {
  components:{
    'tophead':require('./topbar').default,
  },

data(){
  return {
    value:10,

  }
}
}
</script>


<style>

.my-card {
  min-height: 170px;
}
.my-card-half {
  min-height: 80px;
}
</style>
