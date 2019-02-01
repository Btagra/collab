var db = require("../models");
module.exports = {
    findProfiles: (req, res) => {
        db.User.find({ uid: req.params.uid })
            .populate("profiles")
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err));
    },
    newProfile: (req, res) => {
        db.Profile.create({
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            bio: req.body.bio,
            instruments: req.body.instruments,
            image: req.body.image,
            genres: req.body.genres,
            portfolios: req.body.portfolios,
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

        db.User.find({ uid: req.params.uid })
            .populate("profiles")
            .then(result => {

                db.Profile.find({}).then(function (data) {
                    var bestMatch = {
                        name: "",
                        lastName: "",
                        id: '',
                        image: "",
                        bio: "",
                        portfolios: ""
                    };

                    var newDudeTotal = 0
                    newDudeTotal += parseInt(result[0].profiles[0].q1)
                    newDudeTotal += parseInt(result[0].profiles[0].q2)
                    newDudeTotal += parseInt(result[0].profiles[0].q3)
                    newDudeTotal += parseInt(result[0].profiles[0].q4)
                    newDudeTotal += parseInt(result[0].profiles[0].q5)
                    newDudeTotal += parseInt(result[0].profiles[0].q6)
                    newDudeTotal += parseInt(result[0].profiles[0].q7)
                    newDudeTotal += parseInt(result[0].profiles[0].q8)
                    newDudeTotal += parseInt(result[0].profiles[0].q9)
                    newDudeTotal += parseInt(result[0].profiles[0].q10)

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
                        if ((newDudeTotal - oldDudeTotal) < smallestDifference) {
                            if (data[i].firstName !== result[0].profiles[0].firstName) {
                                smallestDifference = Math.abs(newDudeTotal - oldDudeTotal);
                                bestMatch.name = data[i].firstName
                                bestMatch.lastName = data[i].lastName
                                bestMatch.id = data[i]._id
                                bestMatch.image = data[i].image
                                bestMatch.bio = data[i].bio
                                bestMatch.portfolios = data[i].portfolios
                            }

                        }
                    }
                    res.json(bestMatch)
                })
            })
            .catch(err => {
                res.status(422).json(err)
            });
    }
};