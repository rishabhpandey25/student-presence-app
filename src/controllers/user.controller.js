const {authUserInfo} = require('./auth.controller');
const {
    dataBaseGetUserInfo,
    dataBaseEditUserInfo
} = require('../models/userData.model');

function httpGetUserInfo(req,res){

}
function httpEditUserInfo(req,res){

}

module.exports = {
    httpGetUserInfo,
    httpEditUserInfo
}