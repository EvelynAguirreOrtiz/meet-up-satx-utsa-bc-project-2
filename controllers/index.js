const router = require("express").Router();

const htmlRoutes = require("./html-routes.js");
const dashboardRoutes = require("./post-dashboard-routes.js");
const apiRoutes = require("./api/");

router.use("/", htmlRoutes);
router.use("/post-dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
