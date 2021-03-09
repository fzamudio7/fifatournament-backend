import express from "express";
import {json, urlencoded } from "body-parser"
import morgan from "morgan"
import cors from "cors"

export const app = express();

app.disable('x-powered-by')

app.use(cors())//allow cross domain resource sharing
app.use(json())//format request data
app.use(urlencoded({extended: true}))//attache parameters to url like query string like question mark
app.use(morgan('dev'))//loggin in console

const log = (req, res, next) => {//middleware
    console.log("logging");
    next();//next when called execute the next function after it
}

app.get('/data',log, (req, res) =>{
    res.send({data: [1,2,3]});
});

app.post('/data',(req, res) =>{
    console.log(req.body);
    res.send({ok: true});
});


export const start = () => {
    app.listen(3000, () => {
        console.log("server runnig on port 3000");
    });  
};