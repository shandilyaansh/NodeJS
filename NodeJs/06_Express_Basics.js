const { text } = require('body-parser');
const { clear } = require('console');
const express = require('express');
const app = express();
app.get('', (req, res) => {
    res.send("Hello Anshu Kumar welcome to this Home Page");
});
app.get('/about', (req, res) => {
    res.send(' <h1>Welcome Anshu Kumar</h1> <label for="user">Username value="${req.query.name}" </label> <input type="text" placeholder="username" id="user" /><br> <label for="pass">Password</label> <input type="password" id="pass"/> ')
});
app.get('/help', (req, res) => {
    // console.log("Data sent by browser ",req.query.name);
    res.send(
    '<h2>Welcome to help Page</h2><br> <a href="/about">Go to About Page</a> '
    );
});
app.listen(5000);