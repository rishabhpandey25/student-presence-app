const {
    createNewUser
} =  require('./auth.controller')
const {
    dataBaseCreateNewUserData
} = require('../models/userData.model');

function httpRegisterUser(req,res){
    try{
        const reqData = req.body;
        const userCreated = createNewUser(reqData.email,reqData.password);
        if(userCreated){
            const user = {
                name : reqData.name,
                branch : reqData.branch,
                section : reqData.section,
                email : reqData.email
            };

           const userData =  dataBaseCreateNewUserData(user);
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