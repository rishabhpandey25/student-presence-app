 const { getUserDataCollection} =  require('./index.model');

 async function databaseCreateNewUserData(userData){
    const collection = getUserDataCollection();
    const data = await collection.insertOne(userData);
    return data;
 }

 async function databaseEditUserData(updatedUserData){
    const collection = getUserDataCollection();
    const userData = await collection.replaceOne({email: updatedUserData.email},updatedUserData);
    return userData;
 }
 
 async function databaseGetUserData(userEmail){
    const collection = getUserDataCollection();
    const userData = await collection.findOne({email: userEmail});
    return userData;
 }

 async function databaseGetAttendence(branch,section){
    const collection = getUserDataCollection();
    const userData = await collection.countDocuments({branch: branch,section: section});
    return userData;
 }
 module.exports = {
     databaseCreateNewUserData,
     databaseEditUserData,
     databaseGetUserData,
     databaseGetAttendence
 }