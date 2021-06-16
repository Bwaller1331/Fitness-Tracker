const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    day: {
        type:Date,
        default: () => new Date(),

    },
    exercises: [
      { 
        name: {
            type:String,
            trim:true,
            required:"Give your exercise a name"
            },
        type:{
            type: String,
            trim:true,
            required: "Enter the exercise type"
            },
        weight: Number,

        sets: Number,

        reps: Number,

        duration: {
            type:Number,
            required:"Enter a workout duration in minutes"
        },
        distance: Number

       }
    ],
});

const Exercise = mongoose.model('Workout', exerciseSchema);

module.exports = Exercise;