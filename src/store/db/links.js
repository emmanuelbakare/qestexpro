const  sidebarLinks={
  "joinus":{
    name:"Join Us",
    caption:"Sign up and Sign in App",
    component:"authlinks",
    icon:"people",
    links:  [
      {name:"Login", url:'/auth/', icon:'logout', description:"To become a resident or ask for service, you have to join us"},
      {name:"Register an Estate", url:'/estate-register/', icon:'login'},
      {name:"Join your Estate", url:'/auth/', icon:'door_back'},
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
      {name:"Onboarding", url:'/home-onboarding/', icon:'skateboarding'},
      {name:"Payments", url:'/home-payment/', icon:'money'},
      {name:"My Requests", url:'/home-request/', icon:'phone'},
      {name:"Mails", url:'/home-mail/', icon:'email'},
      {name:"Downloads", url:'/home-download/', icon:'download'},
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
