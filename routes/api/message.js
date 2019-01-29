const router = require("express").Router();
const messageController = require("../../controllers/messageController");

router.route("/:uid").get(messageController.findMessages);
router.route("/create").post(messageController.newMessages);

module.exports = router;