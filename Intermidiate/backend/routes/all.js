const express = require("express");
// const calendar = require("../controller/calendar");
const { calendar, specific_calendar } = require("../controller/calendar");
const router = express.Router();

// const {} = calendar

router.get("/calendar", calendar);
router.get("/calendar/:id", specific_calendar);

module.exports = router;
