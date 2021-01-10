const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    username : {
        type : String,
        required : true,
        unique : true
    },

    borrowed_book_count : {
        type : Number
    }
});

const User = mongoose.model('User', userSchema);

module.export = User;