const express = require('express')

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
  const {listBooksController,createBooksController,deleteBooksController,updateBooksController, createAuthorController, listAuthorController} = require("./controllers");
const app = express();


app.use(bodyParser.json)

app.get('/books/:id?', listBooksController);

app.post('/book', createBooksController);

app.post('/book', updateBooksController)
app.delete('/book', deleteBooksController)

app.post('/author', createAuthorController)

app.get('/author', listAuthorController);



mongoose.set('strictQuery', false); 

mongoose.connect("mongodb+srv://Op_Psych:Felix@Vera@cluster0.bocq1lr.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true} ).then(
    result=> {
        app.listen(3000, () => console.log('Server is up and running'))   
    }
).catch(err => console.log(err));


