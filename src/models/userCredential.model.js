const { getUserCredentialsCollection } =  require('./index.model');
// todo
async function databaseAuthUserInfo(userEmail, userPassword){
    const res = {
        exist: true,
        info : {
            email : userEmail,
            password: userPassword
        }
    }
    return res;
}

//todo
async function databaseCreateNewUser(userEmail, userPassword){
    return true;
}

module.exports = {
    databaseAuthUserInfo,
    databaseCreateNewUser
}