const {
    dataBaseAuthUserInfo,
    dataBaseCreateNewUser
} = require('../models/userCredential.model');

function authUserInfo(userEmail,userPassword){
   try{ 
        const res =  dataBaseAuthUserInfo(userEmail,userPassword);
        return res;
   }
   catch(err){
       throw err;
   }
}

function createNewUser(userEmail,userPassword){
    try{
        const userCreated = dataBaseCreateNewUser(userEmail,userPassword);
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
