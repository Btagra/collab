const db = require("../models");
module.exports = {

    findMessages: (req, res) => {
        // console.log("findMessages");

        db.Chat.find({ uid: req.params.uid })
            .populate("messages")
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err));
    },

    newMessages: (req, res) => {
        console.log(req.body);
        const newChat = {
            name: req.body.name,
            message: req.body.message
        };
        db.Chat.create(newChat)
            .then((dbResponse, err) => {
                console.log(dbResponse);

                if (err) return res.status(500).send('There are an error to save messages');
                return res.status(200).send(newChat);

            });
    }
}