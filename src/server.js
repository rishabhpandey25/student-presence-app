const http = require('http');
const app = require('./app');
const {dataBaseConnect} = require('./models/index.model');

const PORT = process.env.PORT || 8000;
const url = "mongodb+srv://attendence-app:iUcHWkCWxEBs3dhP@cluster0.ntyzi.mongodb.net/attendence-app?retryWrites=true&w=majority";

const server = http.createServer(app);

async function startServer(){
    try{
        console.log(await dataBaseConnect(url));
        server.listen(PORT,()=>{
            console.log(`Listening on port ${PORT}.....`);
        })
    }
    catch(err){
        console.log(err);
        throw err;
    }
    
    
}

startServer();