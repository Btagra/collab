var db = require("../models");
module.exports = {
    findProfiles: (req, res) => {
        db.User.find({ uid: req.params.uid })
            .populate("profiles")
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err));
    },
    newProfile: (req, res) => {
        console.log('We are bout tosave thi guy!!!', req.body)
        db.Profile.create({
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            bio: req.body.bio,
            instruments: req.body.instruments,
            q1: parseInt(req.body.q1),
            q2: parseInt(req.body.q2),
            q3: parseInt(req.body.q3),
            q4: parseInt(req.body.q4),
            q5: parseInt(req.body.q5),
            q6: parseInt(req.body.q6),
            q7: parseInt(req.body.q7),
            q8: parseInt(req.body.q8),
            q9: parseInt(req.body.q9),
            q10: parseInt(req.body.q10),
            image: req.body.selectedFile.name
        })
            .then(dbProfile => {
                return db.User.findOneAndUpdate(
                    { uid: req.body.uid },
                    { $push: { profiles: dbProfile._id } },
                    { new: true }
                );
            })
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err));
    },
    compare: (req, res) => {
        console.log('new dude coming in!!!', req.body);


        db.Profile.find({}).then(function (data) {
            console.log('ALL OUR OLD DUDES!!!', data);

            var bestMatch = {
                name: "",
                photo: "",
                friendDifference: Infinity
            };

            var newDudeTotal = 0
            newDudeTotal += parseInt(req.body.q1)
            newDudeTotal += parseInt(req.body.q2)
            newDudeTotal += parseInt(req.body.q3)
            newDudeTotal += parseInt(req.body.q4)
            newDudeTotal += parseInt(req.body.q5)
            newDudeTotal += parseInt(req.body.q6)
            newDudeTotal += parseInt(req.body.q7)
            newDudeTotal += parseInt(req.body.q8)
            newDudeTotal += parseInt(req.body.q9)
            newDudeTotal += parseInt(req.body.q10)

            console.log('new dudeee total!!!', newDudeTotal);

            var smallestDifference = 100000
            for (var i = 0; i < data.length; i++) {
                var oldDudeTotal = 0
                oldDudeTotal += data[i].q1
                oldDudeTotal += data[i].q2
                oldDudeTotal += data[i].q3
                oldDudeTotal += data[i].q4
                oldDudeTotal += data[i].q5
                oldDudeTotal += data[i].q6
                oldDudeTotal += data[i].q7
                oldDudeTotal += data[i].q8
                oldDudeTotal += data[i].q9
                oldDudeTotal += data[i].q10
                console.log('old dude total!!!', oldDudeTotal);
                if ((newDudeTotal - oldDudeTotal) < smallestDifference) {
                    smallestDifference = Math.abs(newDudeTotal - oldDudeTotal);
                    bestMatch.name = data[i].firstName
                }
            }
            console.log('thisi s our best match!!!', bestMatch);
            res.json(bestMatch)
        })


        //   return bestMatch;

        // db.User.create({ uid: req.body.uid })
        //     .then(result => res.json(result))
        //     .catch(err => res.status(422).json(err));
    }
};