const router = require("express").Router();
const notesController = require("../../controllers/profilesController");

router.route("/:uid").get(notesController.findProfiles);
router.route("/create").post(notesController.newProfile);

module.exports = router;