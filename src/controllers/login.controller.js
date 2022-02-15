const {
    authUserInfo
} = require('./auth.controller');

async function httpLoginUser(req,res){
    const loginData = req.body;
    try{
        const user = await authUserInfo(loginData.email,loginData.password);
        if(user.exist){
           return res.status(200).json(user.info);
        }
        else{
           return res.status(400).json({
                error : "worng credentials"
            });
        }
    }
    catch(err){
        console.log(err);
        return res.status(500);
    }
}

module.exports = {
    httpLoginUser
};