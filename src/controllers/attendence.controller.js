const{
    databaseGetAttendence
} = require('../models/userData.model');

async function httpGetAttendence(req,res){
    try{
        const branch = req.query.branch;
        const section = req.query.sec;
        const attednenceData = await databaseGetAttendence(branch,section);
        return res.status(200).json(attednenceData);
    }
    catch(err){
        console.log(err);
        return res.status(500);
    }

}

module.exports = {
    httpGetAttendence
}