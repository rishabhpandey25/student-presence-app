const{
    databaseGetAttendence
} = require('../models/userData.model');

async function httpGetAttendence(req,res){
    try{
        const section =  req.body.section;
        const attednenceData = await databaseGetAttendence(section);
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