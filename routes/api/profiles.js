const router = require("express").Router();
const profilesController = require("../../controllers/profilesController");

router.route("/:uid").get(profilesController.findProfiles);
router.route("/create").post(profilesController.newProfile);
router.route("/compare/:uid").get(profilesController.compare);

module.exports = router;