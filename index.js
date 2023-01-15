const express = require('express')
const parser = require('body-parser')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {listBookapiController,createBookapiController,deleteBookapiController,updateBookapiController} = require("./controllers");
const app = (express)();

app.use(bodyParser.json)

app.get('/')

app.listen(3000, () =>console.log('Server is up and running'))