const{
    dataBaseGetAttendence
} = require('../models/userData.model');

function httpGetAttendence(req,res){
    try{
        const branch = req.query.branch;
        const section = req.query.sec;
        const attednenceData = dataBaseGetAttendence(branch,section);
        return res.status(200).json(attednenceData);
    }
    catch{
        console.log(err);
        return res.status(500);
    }

}

module.exports = {
    httpGetAttendence
}