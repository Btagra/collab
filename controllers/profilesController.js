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
            firstname: req.body.firstname,
            lastname: req.body.lastname
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
    }
};