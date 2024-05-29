/*
*Title : Uptime Monitoring Application
*Description : A RESTFul API to monitor up or down time of user defined links
*Author : Abdullah Al Sobail
*Date : 29/05/2024
*
*/
//Dependencies
const http=require('http');

//app object - module scaffolding
const app={};

//configuration
app.config ={
    port:3000
};

//create server
app.createserver = () => {
    const server =http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listen to port ${app.config.port}`);
    });
}
//handale Request Response 
app.handleReqRes=(req,res)=>{
    //response handle
    res.end(' World');
}
//start the server
app.createserver();