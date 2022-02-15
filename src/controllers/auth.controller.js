const {
    databaseAuthUserInfo,
    databaseCreateNewUser
} = require('../models/userCredential.model');

async function authUserInfo(userEmail,userPassword){
   try{ 
        const res =  await databaseAuthUserInfo(userEmail,userPassword);
        return res;
        
   }
   catch(err){
       throw err;
   }
}

async function createNewUser(userEmail,userPassword){
    try{
        const userCreated = await databaseCreateNewUser(userEmail,userPassword);
        return userCreated;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    authUserInfo,
    createNewUser
}
