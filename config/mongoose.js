const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = `mongodb+srv://yura:OzxhMGm4CAOwXtqc@cluster0.b3sbv.mongodb.net/test`;
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;
