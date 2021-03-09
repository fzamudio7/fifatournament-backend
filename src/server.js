var express = require("express");
var app = express();

app.get('/',(req, res) =>{
    res.send({message: 'hello'})
});


export const start = () => {
    app.listen(3000, () => {
        console.log("server runnig on port 3000");
    });  
};