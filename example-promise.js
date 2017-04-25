/*
function getTempCallback(location,callback){
  callback(undefined,78);
  callback('City not found')
}

getTempCallback('yancheng',function(err,temp){
  if(err){
    console.log('error',err);
  } else{
    console.log('success',temp);
  }
});


function getTempPromise(location){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(79);
      reject('City not found');
    },1000);
  });
}

getTempPromise('yancheng').then((temp)=>{
  console.log('Promise success',temp);
},(err)=>{
  console.log('Promise error',err);
});




function addPromise(a,b){
  return new Promise((resolve,reject)=>{
      if(typeof a==='number' && typeof b==='number'){
        resolve(a+b);
      }else{
        reject("Not a number");
      }
  });
}


addPromise(1,2).then((res)=>{
  console.log(res);
},(err)=>{
  console.log('promise err',err);
});



addPromise(1,'2').then((res)=>{
  console.log(res);
},(err)=>{
  console.log('promise err',err);
});
*/
