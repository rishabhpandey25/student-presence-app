const {
    createNewUser
} =  require('./auth.controller')
const {
    databaseCreateNewUserData
} = require('../models/userData.model');

async function  httpRegisterUser(req,res){
    try{
        const reqData = req.body;
        const userCreated = await createNewUser(reqData.email,reqData.password);
        if(userCreated){
            const user = {
                name : reqData.name,
                branch : reqData.branch,
                section : reqData.section,
                email : reqData.email,
                attendence: reqData.attendence
            };
           const userData = await databaseCreateNewUserData(user);
           return res.status(201).json(userData);

        }
        else{
           return res.status(400).json({
                error : "user already exists"
            })
        }

    }catch(err){
        console.log(err);
        return  res.status(500);
    }
}

module.exports = {
    httpRegisterUser
};