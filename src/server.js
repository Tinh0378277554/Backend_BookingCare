import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web.js"
require('dotenv').config();

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app)
initWebRoutes(app)

let port = process.env.PORT || 6969 // Port === undefined => port = 6969
app.listen(port, () => {
    console.log("Backend nodejs is running on port " + port)
})