const express = require("express");
// const calendar = require("../controller/calendar");
const { calendar, specific_calendar } = require("../controller/calendar");
const router = express.Router();
const {create_user} = require("../controller/users")
// const {} = calendar

router.get("/calendar", calendar);
router.get("/calendar/:id", specific_calendar);
router.post("/user", create_user);

module.exports = router;
