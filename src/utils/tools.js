const estates= [
  {
    id:1,
    "name": "JIKSYS ESTATE PHASE 1",
    "address": "JIKSYS Software Close, No 3, MTN boulevard Houston Texas",
  },
  {
    id:2,
    "name": "Moorland Estate",
    "address": "JIKSYS ESTATE, Lamide Close, Isolo Ikeja. Lagos, Nigeria",
  },
  {
    id:3,
    "name": "TPumpy Phase 1",
    "address": "CD 24, Behind Living Faith Church, New Lugbe Extension, Lugbe FCT.Abuja Nigeria",
  },
  {
    id:4,
    "name": "Convenant Estate",
    "address": "CD 34, Behind Living Faith Church, New Lugbe Extension, Lugbe FCT.Abuja Nigeria",
  },
  {
    id:5,
    "name": "Philkruz Estate",
    "address": "Opposite Apostolic Church, by Christ Embassy, Dakibiyu, Jabi FCT. Abuja, Nigeria",
  },
  {
    id:6,
    "name": "Dove Court Estate",
    "address": "Estate 1, Dove Court Crescent, Behind Utako Ultra Modern Market Utako FCT. Abuja, Nigeria",
  },
  {
    id:7,
    "name": "Bilaad Realty",
    "address": "Suite 205, Shashilga Court, Plot 111&112, Sector A, 900211, Abuja",
  },
  {
    id:8,
    "name": "Manreng Estate",
    "address": "Life Camp Road, Kafe District, Olu Awotesu St, Abuja",
  },
  {
    id:9,
    "name": "JIKSYS ESTATE PHASE 3",
    "address": "JIKSYS ESTATE, Lamide Close, Isolo Ikeja. Lagos, Nigeria",
  },

]

let est3={
  id:2,
  "name": "Moorland Estate",
  "address": "JIKSYS ESTATE, Lamide Close, Isolo Ikeja. Lagos, Nigeria",
}

var breakException={}

const searchObj=(toSearch, fromArray)=>{
  let found=false
  fromArray.forEach(obj=>{
    // console.log('is', obj.id, 'same as ',toSearch.id, '?')
    if(obj.id==toSearch.id){
     found=true
    }
  })
  return found
}

const searchObjIndex=(toSearch, fromArray)=>{
  let result=null
  // let found=false
   for (let i = 0; i < fromArray.length; i++) {

    const element = fromArray[i];
    if(element.id==toSearch.id){
      // return element
        result=i
        console.log('Search index ', result)
      // found=true
      break
    }
  }

  return result

}

const objDelete=(todel, delFrom)=>{
  let result=null
  let newArray={}
   if(result=searchObjIndex(todel, delFrom)){
    let newArray =delFrom.splice(result, 1)

   }

   return newArray


}

const objDeleteMult=(arrayToDel, arrayToDelFrom)=>{

  //pick each item to delete
   arrayToDel.forEach(objToDel=>{
     objDelete(objToDel, arrayToDelFrom)
   })
}

//  console.log(searchObj(est3, estates))      //foreach loop
console.log(estates.length)
console.log(objDelete(est3, estates))
console.log(estates.length)
console.log(estates)
//  console.log(searchObjIndex(est3, estates))   // for loop


// export findRemoveObj(toRemove, fromObjList,id){
//   return fromObjList.splice(fromObjList,1)
// }
