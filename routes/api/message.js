const router = require("express").Router();
const messageController = require("../../controllers/messageController");

router.route("/messages").get(messageController.findMessages);
router.route("/messages").post(messageController.newMessages);

module.exports = router;