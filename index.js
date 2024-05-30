/*
*Title : Uptime Monitoring Application
*Description : A RESTFul API to monitor up or down time of user defined links
*Author : Abdullah Al Sobail
*Date : 29/05/2024
*
*/
//Dependencies
const http=require('http');
const url=require('url');

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
    //req handling
    //get the url and parse it
    const parsedUrl=url.parse(req.url,true);
    const path=parsedUrl.pathname;
    const trimmedPath=path.replace(/^\/+|\/+$/g,'');
    const method=req.method.toLowercase();
    const querryStringObject=parsedUrl.query;
    const headersObject=req.headers;
     
    //response handle
    res.end(' World');
}
//start the server
app.createserver();