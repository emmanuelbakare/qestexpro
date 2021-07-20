
const settings={
  current_user:JSON.parse(localStorage.getItem('user')),
  key:localStorage.getItem('loggedIn'),
  config:{
      headers:{
        'Authorization':"Token "+localStorage.getItem('loggedIn')
      },
  },
  url:'',
}
// console.log(settings)
 
 export default settings


 