const router = require("express").Router();
const messageController = require("../../controllers/messageController");

router.route("/").get(messageController.findMessages);
router.route("/").post(messageController.newMessages);

module.exports = router;