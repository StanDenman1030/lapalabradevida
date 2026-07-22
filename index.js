const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const path = require("path");
const env = require("dotenv").config();
const nodemailer = require("nodemailer");
const request = require("request");
const https = require("https");

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/station", (req, res) => {
    res.render("station");
});

app.get("/podcast", (req, res) => {
    res.render("podcast");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/events", (req, res) => {
    res.render("events");
});

app.get("/error", (req, res) => {
    res.render("error");
});

app.get("/success", (req, res) => {
    res.render("success");
});

app.get("/message", (req, res) => {
    res.render("message");
});

app.get("/eStation", (req, res) => {
    res.render("eStation");
});

app.get("/ePodcast", (req, res) => {
    res.render("ePodcast");
});

app.get("/eMessage", (req, res) => {
    res.render("eMessage");
});

app.get("/eHome", (req, res) => {
    res.render("eHome");
});

app.get("/eError", (req, res) => {
    res.render("eError");
});

app.get("/eContact", (req, res) => {
    res.render("eContact");
});

app.get("/eAbout", (req, res) => {
    res.render("eAbout");
});





    

   
    
    


app.listen(PORT, function () {
    console.log("Server started on port 3000");
});