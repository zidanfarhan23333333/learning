const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AuthModel = require("./models/auth");

const app = express();
app.use(express.json());
app.use(cors());

// URL koneksi MongoDB Atlas
const mongoURI =
  "mongodb+srv://Farhan:IAtJMiz7SvuG9bLD@cluster0.yzukbb7.mongodb.net/myDatabaseName?retryWrites=true&w=majority";

// Koneksi ke MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.post("/register", async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newUser = await AuthModel.create(req.body);
    console.log("Data saved:", newUser);
    res.json(newUser);
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ error: "An error occurred during registration." });
  }
});

app.get("/user", async (req, res) => {
  try {
    const response = await AuthModel.find();
    res.json(response);
  } catch (err) {
    console.log(err);
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
