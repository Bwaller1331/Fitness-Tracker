const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    day = {
        type:Date,
        default: Date.now(),

    }
    exercises: [{
        type: String,
        trim:true,
        required: 

        
    }]
})