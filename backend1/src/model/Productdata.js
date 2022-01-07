const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jamsheela:jamsheela@products.5qdc8.mongodb.net/jamsheelaretryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    productId : Number,
    productName : String,
    productCode : String,
    releaseDate : String,
    description : String,
    price : Number,
    quantity :Number,
    imageUrl : String
});

var Productdata = mongoose.model('product', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Productdata;