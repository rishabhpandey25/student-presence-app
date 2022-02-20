 const { getUserDataCollection} =  require('./index.model');

 async function databaseCreateNewUserData(userData){
    try{
      const collection = getUserDataCollection();
      const data = await collection.insertOne(userData);
      return data;
    }
    catch(err){
      console.log(err)
      throw err;
    }
    
 }
 
 async function databaseEditUserData(updatedUserData){
    try{
      const collection = getUserDataCollection();
      const userData = await collection.replaceOne({email: updatedUserData.email},updatedUserData);
      return userData;
    }
    catch(err){
      console.log(err)
      throw err;
    }
    
 }
 
 async function databaseGetUserData(userEmail){
   try{
      const collection = getUserDataCollection();
      const userData = await collection.findOne({email: userEmail});
       return userData;
   }
   catch(err){
      console.log(err)
      throw err;
   }
    
 }

 async function databaseGetAttendence(section){
   try{
      const collection = getUserDataCollection();
      const userData = await collection.countDocuments({ section:{$in:section},attendence:true});
      return userData;
   }
   catch(err){
      console.log(err)
      throw err;
   }
    
 }
 module.exports = {
     databaseCreateNewUserData,
     databaseEditUserData,
     databaseGetUserData,
     databaseGetAttendence
 }