import express from "express";
// import fs from "fs";
import mongoose from "mongoose";
// import qs from "qs";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import ejss from "ejs";
import OpenAI from "openai";

dotenv.config();
const app =express();
app.use(express.json({limit : '50mb'}));
app.use(cors());
// app.set('trust proxy', true);

app.set("view engine", "ejs");
app.engine("html", ejss.renderFile);

app.get("/", function(req, res) {
    res.render("index.html");
});

app.listen(5003, () => console.log("listening to port 5003, success!"));