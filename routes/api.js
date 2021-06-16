const router = require('express').Router();
const Exercise = require('../models/exercise.js'); 


router.post('/api/workouts',(req,res) => {
    Exercise.create({})
    .then((dbExercise) => {
        res.json(dbExercise);
    }) 
    .catch((err) => {
        res.json(err);
    });
});

router.get('/api/workouts', (req,res) => {
    Exercise.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                },
            },
        },
    ])
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put('/api/workouts/:id', ({body,params},res) => {
    Exercise.findByIdAndUpdate( params.id, {$push: {exercises: body}
    })
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get('/api/workouts/range', (req,res) => {
    Exercise.aggregate([
        {
            $addFields: {
                totalduration: {
                    $sum: '$exercises.duration',
                }
            }
        }
    ])
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;