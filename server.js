const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());




app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use(require('./routes/nav.js')); 
app.use(require('./routes/api'));

app.listen(PORT, () => {
        console.log(`App running on ${PORT}`);
});


