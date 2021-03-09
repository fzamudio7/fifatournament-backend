import express from "express";
import {json, urlencoded } from "body-parser"
import morgan from "morgan"
import cors from "cors"

export const app = express();
const router = express.Router();

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({extended: true}))
app.use(morgan('dev'))

const log = (req, res, next) => {
    console.log("logging");
    next();
}

router.route("/cat")
    .get()
    .post()

router.route("/cat/:id")
    .get()
    .put()
    .delete()

app.get('/data',log, (req, res) =>{
    res.send({data: [1,2,3]});
});

app.put('/data',log, (req, res) =>{
});

app.post('/data',(req, res) =>{
    console.log(req.body);
    res.send({ok: true});
});

app.delete('/data',log, (req, res) =>{
});

export const start = () => {
    app.listen(3000, () => {
        console.log("server runnig on port 3000");
    });  
};