const express = require("express");
const fs = require("fs");

const calendar = (req, res) => {
  fs.readFile("calendar.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading calendar file");
      return;
    }

    const months_of_the_year = JSON.parse(data);
    res.json(months_of_the_year);
  });
};

const specific_calendar = (req, res) => {
  const id = parseInt(req.params.id); // make sure it’s a number

  fs.readFile("calendar.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading calendar file");
      return;
    }

    const months_of_the_year = JSON.parse(data);

    if (id < 0 || id >= months_of_the_year.length) {
      res.status(404).send("Month not found");
      return;
    }

    res.json(months_of_the_year[id]);
  });
};

// Export both functions in an object
module.exports = { calendar, specific_calendar };