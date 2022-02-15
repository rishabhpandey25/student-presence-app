const { MongoClient } = require("mongodb"); 

let userCredentialsCollection;
let userDataCollection;                                                                                                                                  
async function dataBaseConnect(url) {

    return new Promise( async (resolve,reject)=>{
        try {
            const client = new MongoClient(url);
            await client.connect();
            const attendenceApp =  client.db();
            userCredentialsCollection = attendenceApp.collection("userCredentials");
            userDataCollection = attendenceApp.collection("userData");
            resolve("Connected to database");
        } catch (err) {
            console.log(err);
            reject(err);
        }

        }
    )
}

function getUserCredentialsCollection(){
    return userCredentialsCollection;
}

function getUserDataCollection(){
    return userDataCollection;
}

module.exports = {
    dataBaseConnect,
    getUserCredentialsCollection,
    getUserDataCollection
}