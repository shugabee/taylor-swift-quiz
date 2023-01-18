require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { getSong } = require('./controllers/songController');

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());
app.use(cors());

app.get("/api/getSong", getSong)




app.listen(SERVER_PORT, () => 
    console.log(`Server is running on ${SERVER_PORT}`)
);