const dbConnect=require('./09_MongoDb_Connect');
dbConnect().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.warn(data);
    })
})
const main=async ()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.warn(data);
}
main()