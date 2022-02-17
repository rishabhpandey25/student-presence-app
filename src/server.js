const http = require('http');
const app = require('./app');
const {dataBaseConnect} = require('./models/index.model');

const PORT = process.env.PORT || 8000;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_NAME =  process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.ntyzi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

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