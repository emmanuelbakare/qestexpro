const  sidebarLinks={
  "Testing":{
    name:"Testing Stuff",
    caption:"All pages here are for testing",
    component:"settings",
    icon:"settings",
    links:  [
      {name:"Sample  1", url:'/test/sample-one/', icon:'dashboard', description:"Just some random works 1"},
      {name:"Sample 2", url:'/test/sample-two/', icon:'dashboard', description:"Just some random works 2"},
      {name:"Sample 3", url:'/test/sample-three/', icon:'dashboard', description:"Just some random works 3"},
      {name:"Sample 4", url:'/test/sample-four/', icon:'dashboard', description:"Just some random works 3"},
      {name:"Composition API", url:'/test/composition-api/', icon:'add', description:"Vue 3 composition API"},
      {name:"Ajax Loading", url:'/test/ajaxloading/', icon:'event', description:"Using the Ajax Loader"},
      {name:"Floating Action", url:'/test/floatingAction/', icon:'settings', description:"using stick page and Float action component"},
      {name:"Dialog", url:'/test/dialog/', icon:'dashboard', description:"Dialog Box Example"},
      {name:"Lodash Test", url:'/test/lodashtest/', icon:'dashboard', description:"Lodash Test"},
      {name:"Dashboard", url:'/test/dashboard/', icon:'dashboard', description:"Admin Dashboard"},

      // {name:"Ajax Loading", url:'/test/ajaxloading/', icon:'event', description:"Page to test and research stuff"},
    ] },
  "myaccount":{
    name:"My Dashboard",
    caption:"See everything you do in one place",
    component:"dashboard",
    icon:"dashboard",
    links:  [
      {name:"Login", url:'/auth/', icon:'logout', description:"To become a resident or ask for service, you have to join us"},
    ] },
  "joinus":{
    name:"Join Us",
    caption:"Sign up and Sign in App",
    component:"authlinks",
    icon:"people",
    links:  [
      {name:"Login", url:'/auth/', icon:'logout', description:"To become a resident or ask for service, you have to join us"},
      {name:"Register an Estate", url:'/estate/register/', icon:'login'},
      {name:"Register an Estate 2", url:'/estate/register2/', icon:'login'},
      {name:"Join your Estate", url:'/estate/join/', icon:'door_back'},
      {name:"Be a Provider", url:'/auth/', icon:'room_preferences'},
    ] },

  "myestate":{
    name:"My Estate",
    caption:"Estate Management",
    url:"/api/estate/",
    component:"residentlinks",
    icon:"apartment",
    links:  [
      // {name:"Home", url:'/resident-home/', icon:'villa'},
      {name:"Onboarding", url:'/estate/onboarding/', icon:'skateboarding'},
      {name:"Payments", url:'/estate/payments/', icon:'money'},
      {name:"My Requests", url:'/estate/requests/', icon:'phone'},
      {name:"Mails", url:'/estate/mails/', icon:'email'},
      {name:"Downloads", url:'/estate/downloads/', icon:'download'},
    ] },

  "service":{
    name:"Service",
    caption:"Request for service in your estate",
    url:"/service/",
    component:"servicelinks",
    icon:"construction",
    links:  [
      {name:"Dashboard", url:'/resident-home/', icon:'dashboard'},
      {name:"Make Requests", url:'/service-request/', icon:'engineering'},
      {name:"My Service Requests", url:'/service-myrequest/', icon:'perm_phone_msg'},
      {name:"Join a Service Provider", url:'/service-myrequest/', icon:'perm_phone_msg'},
    ] },

}

export default sidebarLinks
