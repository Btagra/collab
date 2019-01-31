const db = require("../models");
module.exports = {

    //     findMessages: (req, res) => {
    //         db.Signature.find({ uid: req.params.uid })
    //             .populate("messages")
    //             .then(result => res.json(result))
    //             .catch(err => res.status(422).json(err));
    //     },
    //     newMessages: (req, res) => {
    //         db.Signature.create({
    //             message: req.body.message
    //         })
    //             .then(dbMessage => {
    //                 return db.Signature.findOneAndUpdate(
    //                     { uid: req.body.uid },
    //                     { $push: { message: dbMessage._id } },
    //                     { new: true }
    //                 );
    //             })
    //             .then(result => res.json(result))
    //             .catch(err => res.status(422).json(err));
    //     }

    findMessages: (req, res) => {
        let {
            name,
            message
        } = req.body
        console.log(req.body + "what us");

        if (name && message) {
            name = name.trim()
            message = message.trim()
        } else {
            return res.status(422).send("Name and message required!")
        }

        const newSignature = {
            "name": name,
            "message": message
        }
    },
    newMessages: (req, res) => {
        db.Signature.create(newSignature)
            .then((dbResponse, err) => {

                if (err) return res.status(500).send('Error saving your message!');
                return res.status(200).send(newSignature);

            });
    }
}