const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const noteRoutes = require("./notes");

router.use("/user", userRoutes);
router.use("/notes", noteRoutes);

// For anything else, render the html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
