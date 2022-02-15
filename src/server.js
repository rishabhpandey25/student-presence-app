const http = require('http');
const app = require('./app');
const {dataBaseConnect} = require('./models/test.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer(){
    console.log(await dataBaseConnect());
    server.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}.....`);
    })
    
}

startServer();