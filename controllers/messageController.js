const db = require("../models");
module.exports = {
    findMessages: (req, res) => {
        db.User.find({ uid: req.params.uid })
            .populate("messages")
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err));
    },
    newMessages: (req, res) => {
        db.Signature.create({
            message: req.body.message
        })
            .then(dbMessage => {
                return db.User.findOneAndUpdate(
                    { uid: req.body.uid },
                    { $push: { message: dbMessage._id } },
                    { new: true }
                );
            })
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err));
    }
}