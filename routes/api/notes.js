const router = require("express").Router();
const notesController = require("../../controllers/notesController");

router.route("/:uid").get(notesController.findNotes);
router.route("/create").post(notesController.newNote);

module.exports = router;


