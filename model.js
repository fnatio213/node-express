const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    authors: [
        {
            authorId: {required: true, type: Schema.Types.ObjectId, ref: "Author" }
        }
    ]
})

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
