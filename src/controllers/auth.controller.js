const {
    databaseAuthUserInfo,
    databaseCreateNewUser
} = require('../models/userCredential.model');



/**
 * function to  check authentication of user credentials
 * @param {string} userEmail - email of user
 * @param {string} userPassword - password of user
 * @returns {authResponse} 
 */

async function authUserInfo(userEmail,userPassword){
   try{ 
        const res =  await databaseAuthUserInfo(userEmail,userPassword);
        return res;
        
   }
   catch(err){
       throw err;
   }
}

/**
 * function to  create user credentials and return conformation as boolean
 * @param {string} userEmail - email of user
 * @param {string} userPassword - password of user
 * @returns {boolean}
 */

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
