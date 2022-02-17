const {authUserInfo} = require('./auth.controller');
const {
    databaseGetUserData,
    databaseEditUserData
} = require('../models/userData.model');

async function httpGetUserInfo(req,res){
    try{
        const  reqData = req.body;
        const user = await authUserInfo(reqData.email,reqData.password);
        if(user.info){
            const userData = await databaseGetUserData(user.info.email);
            return res.status(200).json(userData);
        }else{
            return res.status(400).json({error : user.error});
        }
    }catch(err){
        console.log(err);
        return res.status(500);
    }
}
async function httpEditUserInfo(req,res){
    try{
        const userCredentials = req.body.userCredentials;
        const updatedUserData = req.body.updatedUserData;
        const user = await authUserInfo(userCredentials.email,userCredentials.password);
        if(user.info){
            const userData =  await databaseEditUserData(updatedUserData);
            return res.status(201).json(userData);
        }
        else{
            return res.status(400).json({error : user.error});
        }
    }
    catch(err){
        console.log(err);
        return res.status(500);
    }
}

module.exports = {
    httpGetUserInfo,
    httpEditUserInfo
}