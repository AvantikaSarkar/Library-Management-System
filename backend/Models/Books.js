const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    name : {
        type : String,
        required : true
    },

    author : {
        type : String,
        required : true
    },

    //for keeping count
    stock :{
        type : Number,
        required : true
    }
});

const Book = mongoose.model('Book', bookSchema);

module.export = Book;