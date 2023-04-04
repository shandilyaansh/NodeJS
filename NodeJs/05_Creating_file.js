const fs=require('fs');
const path=require('path');

// const dirPath=path.join(__dirname,'Files');
// for(let i=0;i<5;i++){
//     fs.writeFileSync(dirPath+'/hello'+i+'.txt',"Welcome to file number "+i+" Anshu.");
// }

const dirPath=path.join(__dirname,"Files");
var SourcePath=dirPath+'/ans.txt';
// console.log(SourcePath);
// fs.writeFileSync(SourcePath,"Hello Anshu Kumar.");
// fs.appendFileSync(SourcePath," Welcome to coding world.");
// fs.rename(SourcePath,dirPath+'/anshu.txt',()=>{
//     console.log("File name is updated.");
// })