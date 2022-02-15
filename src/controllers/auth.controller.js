const {
    dataBaseAuthUserInfo,
    dataBaseCreateNewUser
} = require('../models/userCredential.model');

function authUserInfo(userEmail,userPassword){
    const userInfo =  dataBaseAuthUserInfo(userEmail,userPassword);
    return userInfo;
}

function createNewUser(userEmail,userPassword){
    try{
        const userInfo = dataBaseCreateNewUser(userEmail,userPassword);
        return userInfo;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    authUserInfo,
    createNewUser
}
