var db = require("../models");
module.exports = {
    findNotes: (req, res) => {
        db.User.find({ uid: req.params.uid })
            .populate("notes")
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err));
    },
    newNote: (req, res) => {
        db.Note.create({
            title: req.body.title,
            body: req.body.body
        })
            .then(dbNote => {
                return db.User.findOneAndUpdate(
                    { uid: req.body.uid },
                    { $push: { notes: dbNote._id } },
                    { new: true }
                );
            })
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err));
    }
};
