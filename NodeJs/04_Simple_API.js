const http=require('http');

http.createServer((req,res)=>{
    // res.writeHead(200,{'Content -Type':'application\json'});
    res.write(JSON.stringify({name:'Anshu Kumar',email:'ajha5593@gmail.com'}));
    res.end();
}).listen(5500);

// const fs=require('fs');
// const log=process.argv;
// if(log[2]=='add'){
//     fs.writeFileSync(log[3],log[4]);
// }
// else if(log[2]=='remove'){
//     fs.unlinkSync(log[3],log[4]);
// }
// else {
//     console.log("Invalid Output");
// }