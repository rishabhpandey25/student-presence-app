const { getUserCredentialsCollection } =  require('./index.model');

/**
 * fuction to check user credentials with that on the database
 * @param {string} userEmail - email of the user
 * @param {string} userPassword - password of the user
 * @returns {authResponse} 
 */

async function databaseAuthUserInfo(userEmail, userPassword){
    try{
        const collection=getUserCredentialsCollection();
        const userCredentials = await collection.findOne({email : userEmail});

        if(userCredentials){
            if(userCredentials.password==userPassword){
               const res = {exsist:true,info:userCredentials,error: ""};
               return res;
            }
            else{
                const res = {exsist:true,info:null,error: "Password Incorrect"};
                return res;
            }  
        }
        else{
            const res = {exsist:false,info:null,error:"User not registered"}
            return res;
        }  
            
    }catch(e){
        console.log(e);
        throw e;
    }
    
   
}

/**
 * fuction to create add user to database
 * @param {string} userEmail - email of the user
 * @param {string} userPassword - password of the user
 * @returns {boolean} 
 */
async function databaseCreateNewUser(userEmail, userPassword){
   
    
    try{
        const userData =  await databaseAuthUserInfo(userEmail,userPassword);
        if(userData.exsist){
            return false;
        }
        const collection=getUserCredentialsCollection();
        const response= await collection.insertOne({email:userEmail,password:userPassword});
        return true;
    }catch(e){
        console.log(e);
        throw e;
    }
    
}

module.exports = {
    databaseAuthUserInfo,
    databaseCreateNewUser
}