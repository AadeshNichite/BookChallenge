const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    author: {
        type: String,
        required : true
    },
    bookinfo: [{
            bookname: {
                type : String,
                required : true
            },
            description :{
                type : String,
                required : true
            },
            rating : {
                type : String,
                required : true
            }

    }] 

})

module.exports = Profile = mongoose.model('Books', BooksSchema );