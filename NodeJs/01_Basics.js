const fs=require('fs');
const arr=[1,2,3,1,4,4,5];
// for(var i=0;i<5;i++)
//     console.log(arr[i]);
var x=arr.filter((item)=>{
    return (item<5);
})
console.log(x);