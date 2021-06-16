const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    day = {
        type:Date,
        default: Date.now(),

    },
    exercises: [
      { 
        name: {
            type:String,
            trim:true,
            required:[true,"Give your exercise a name"]
            },
        type:{
            type: String,
            trim:true,
            required:[true, "Enter the exercise type"],
            },
        weights: Number,

        sets: Number,

        reps: Number,

        duration: {
            type:Number,
            required:[true,"Enter a workout duration in minutes"]
        },
        distance: Number

       }
    ],
});

const Exercise = mongoose.model('Exercise', exerciseSchema);