const app = require('express')();
const path = require('path');
const express = require('express');

app.use(express.static('public'));

app.listen(2000, () => console.log("Server iniciado"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});