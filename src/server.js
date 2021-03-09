import express from "express";
import {json, urlencoded } from "body-parser"
import morgan from "morgan"
import cors from "cors"
import tournamentRouter from "./resources/tournament/tournament.router" 

export const app = express();

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({extended: true}))
app.use(morgan('dev'))

const log = (req, res, next) => {
    console.log("middleware");
    next();
}

app.use("/api/tournament", log, tournamentRouter);

export const start = () => {
    app.listen(3000, () => {
        console.log("server runnig on port 3000");
    });  
};