const express = require('express');
const mongoose = require('mongoose');

const app = express();
 
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/workoutDB",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
        console.log(`App running on ${PORT}`);
});