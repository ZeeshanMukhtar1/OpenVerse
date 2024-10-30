const express = require("express");
const router = require("./routes/defaultroute");
const app = express();
const cors = require("cors");

const jwt = require("jsonwebtoken");

app.use(cors());

app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello from index");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
