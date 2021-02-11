const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gowtham:Mahtwogs333@cluster0.ix9hs.mongodb.net/Sample?retryWrites=true&w=majority',{ 
            useUnifiedTopology: true,
            useNewUrlParser: true 
        }, (err) => {
    if(!err) {
        console.log("DB connected successfully.");
    }
    else {
        console.log(JSON.stringify(err, undefined, 2));
    }
});
module.exports = mongoose;
