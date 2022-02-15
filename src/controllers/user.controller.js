const {authUserInfo} = require('./auth.controller');
const {
    dataBaseGetUserData,
    dataBaseEditUserData
} = require('../models/userData.model');

function httpGetUserInfo(req,res){
    try{
        const  reqData = req.body;
        const user = authUserInfo(reqData.email,reqData.password);
        if(user.exist){
            const userData = dataBaseGetUserData(user.info.email);
            return res.status(200).json(userData);
        }else{
            return res.status(400).json({
                error : "user does not exist"
            });
        }
    }catch(err){
        console.log(err);
        return res.status(500);
    }
}
function httpEditUserInfo(req,res){
    try{
        const userCredentials = req.body.userCredentials;
        const updatedUserData = req.body.updatedUserData;
        const user =authUserInfo(userCredentials.email,userCredentials.password);
        if(user.exist){
            const userData =  dataBaseEditUserData(updatedUserData);
            return res.status(201).json(userData);
        }
        else{
            return res.status(400).json({
                error : "user does not exist"
            });
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