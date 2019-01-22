const router = require("express").Router();
const exampleController = require("../../controllers/controller");

router.route("/").get(controller.findAll);

module.exports = router;
