const express = require('express');
const app = express();
const router = require("./routes/all")
const PORT = 3500;

const cors = require("cors");

app.use(cors());


app.use(express.json());
app.use("/all", router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});