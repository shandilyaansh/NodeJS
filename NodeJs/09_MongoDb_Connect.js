const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const database='e-commerse-product';

async function dbConnect(){
    await client.connect();
    const db=client.db(database);
    return db.collection('myProject');
}
module.exports=dbConnect;