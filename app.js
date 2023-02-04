const express =require("express");
const app=express();
var cors = require('cors')

app.use(cors())
require("./router/index")(app);



app.listen(3001,()=>{
 console.log("Port : 3001");   
})
