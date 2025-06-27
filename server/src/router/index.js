const router = require("express").Router();
const entityRoutes = require("./entityRoutes.js");

router.use(entityRoutes);


module.exports = router;