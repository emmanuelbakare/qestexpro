

var breakException={}

export const searchObj=(toSearch, fromArray)=>{
  let found=false
  fromArray.forEach(obj=>{
    if(obj.id==toSearch.id){
     found=true
    }
  })
  return found
}

const verifyArray=(obj)=> (Array.isArray(obj) ?  obj :[obj] )


export const searchObjIndex=(toSearch, fromArray)=>{
  let result=-1
  // let found=false

   let toSearch2=verifyArray(toSearch)
   for (let i = 0; i < fromArray.length; i++) {

    const element = fromArray[i];
    if(element.id==toSearch2[0].id){
      // return element
        result=i
        console.log('Search index ', result)
      // found=true
      break
    }
  }

  return result

}

export const objDelete=(todel, delFrom, ret=false)=>{
  let newArray={}
  let result=searchObjIndex(todel, delFrom)
   if(result >= 0){
     newArray =delFrom.splice(result, 1)
   }
   return (ret? newArray: delFrom)

  //  return delFrom
  //  return newArray


}
export const isEmpty = val => val == null || !(Object.keys(val) || val).length;
export const moveObj=(obj,moveTo={})=>{

  Object.keys(obj).forEach(key=>{
    moveTo[key]=obj[key]
    delete obj[key]
  })
  return moveTo

}

export const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};


export const objDeleteMult=(arrayToDel, arrayToDelFrom)=>{

  //pick each item to delete
   arrayToDel.forEach(objToDel=>{
     objDelete(objToDel, arrayToDelFrom)
   })
}

export const test=()=>{
  return "Testing Return from tools"
}



//  console.log(searchObj(est3, estates))      //foreach loop
// console.log(estates.length)
// console.log(objDelete(est3, estates))
// console.log(estates.length)
// console.log(estates)
//  console.log(searchObjIndex(est3, estates))   // for loop


// export findRemoveObj(toRemove, fromObjList,id){
//   return fromObjList.splice(fromObjList,1)
// }
